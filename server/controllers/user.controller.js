const { User } = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


module.exports.editUser = (req, res) => {
    const { firstName, lastName, email } = req.body
    User.findOneAndUpdate({ _id: req.params.id }, { $set: { firstName: firstName, lastName: lastName, email: email } }, { new: true, runValidators: true })
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}

module.exports.updatePassword = (req, res) => {
    const { password, confirmPassword } = req.body
    password === confirmPassword ?
        (
            bcrypt.hash(password, 10).then(hash => {password = hash}),
            User.findOneAndUpdate({ _id: req.params.id }, { $set: { password: password } }, { new: true, runValidators: true })
                .then(user => res.json(user))
                .catch(err => res.status(400).json(err))
        )
        :
        res.status(400).json({ error: "Confirm Password Must Match" })
}

module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.register = (req, res) => {
    const user = User.findOne({ email: req.body.email })
        .then(user => {
            if (user == null) {
                User.create(req.body)
                    .then(user => {
                        const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
                        res
                            .cookie("userToken", userToken, { httpOnly: true })
                            .json(user);
                    })
                    .catch(err => res.status(400).json(err))
            } else {
                res.json({ error: "Email already exists", status: 400 })
            }
        })
}

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user == null) return res.json({ error: { email: "Email not found" } })
    const pw = await bcrypt.compare(req.body.password, user.password)
    if (!pw) return res.json({ error: { password: "Password is Incorrect" } })
    const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
    res
        .cookie("userToken", userToken, { httpOnly: true })
        .json(user)
}

module.exports.logout = (req, res) => {
    res.clearCookie('userToken');
    res.sendStatus(200);
}

module.exports.checkLogin = (req, res) => {
    const id = req.params.id
    User.findOne({_id: id})
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}

module.exports.addLocation = async (req, res) => {
    const {location, id} = req.body
    console.log(location, id)
    const updatedUser = await User.findOneAndUpdate({_id: id}, {$push: {locations: location}}, { new: true })
        res.json(updatedUser)
}

module.exports.removeLocation = async (req, res) => {
    let {locationIndex, id, locations} = req.body
    console.log(locationIndex, id, locations)

    const updatedUser = await User.findOneAndUpdate({_id: id}, {$set: {locations: locations.filter((location, i) => i !== locationIndex)}}, { new: true})
        res.json(updatedUser)
}