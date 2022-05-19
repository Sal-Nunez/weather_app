const jwt = require("jsonwebtoken");

module.exports.basicAuth = (req, res, next) => {
    let cookie1 = req.headers.cookie
    let token = cookie1.substring(req.headers.cookie.indexOf('userToken=') + 10, req.headers.cookie.indexOf('userToken=') + 158)
    cookie1 ? jwt.verify(token, process.env.SECRET_KEY, (err, payload) => err ? res.status(401).json({ verified: false }) : next()) : res.status(401).json({ verified: false })
}