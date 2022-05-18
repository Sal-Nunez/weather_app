import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const Registration = props => {

    const history = useHistory()
    const [firstName, setFirstName] = useState("")
    const [errFirstName, setErrFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [errLastName, setErrLastName] = useState("")
    const [email, setEmail] = useState("")
    const [errEmailExists, setErrEmailExists] = useState("")
    const [errEmail, setErrEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errPassword, setErrPassword] = useState("")
    const {setUser} = props
    const [errPasswordRegex, setErrPasswordRegex] = useState({
        letter: "",
        uppercase: "",
        specialCharacter: "",
        number: ""
    })
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errConfirmPassword, setErrConfirmPassword] = useState("")
    const [errors, setErrors] = useState([])

    const validateFirstName = e => {
        setFirstName(e.target.value)
        if(e.target.value.length < 1) {
            setErrFirstName("First Name is required")
        } else if(e.target.value.length < 3) {
            setErrFirstName("First Name must be at least 3 characters")
        } else {
            setErrFirstName("")
        }
    }

    const validateLastName = e => {
        setLastName(e.target.value)
        if(e.target.value.length < 1) {
            setErrLastName("Last Name is required")
        } else if(e.target.value.length < 3) {
            setErrLastName("Last Name must be at least 3 characters")
        } else {
            setErrLastName("")
        }
    }

    const validateEmail = e => {
        setEmail(e.target.value)
        if(e.target.value.length < 1) {
            setErrEmail("Email is required")
        // REGEX CHECKER HERE
        } else if(!/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(e.target.value)) {
            setErrEmail("Email must be valid format")
        } else {
            setErrEmail("")
        }
    }

    const validatePassword = e => {
        setPassword(e.target.value)

        if(e.target.value.length < 1) {
            setErrPassword("Password is required")
        } else if(e.target.value.length < 8) {
            setErrPassword("Password must be at least 8 characters")
        } else {
            setErrPassword("")
        }

        let copyErr = {...errPasswordRegex}

        if(!/[a-z]/.test(e.target.value)) copyErr = {...copyErr, letter: "Must have at least one lowercase letter"}
        else copyErr = {...copyErr, letter: ""}

        if(!/[A-Z]/.test(e.target.value)) copyErr = {...copyErr, uppercase: "Must have at least one uppercase letter"}
        else copyErr = {...copyErr, uppercase: ""}
        
        if(!/[0-9]/.test(e.target.value)) copyErr = {...copyErr, number: "Must have at least one number"}
        else copyErr = {...copyErr, number: ""}

        if(!/[@$!%*?&]/.test(e.target.value)) copyErr = {...copyErr, specialCharacter: "Must have at least one special character"}
        else copyErr = {...copyErr, specialCharacter: ""}

        setErrPasswordRegex(copyErr)
    }

    const validateConfirmPassword = e => {
        setConfirmPassword(e.target.value)
        if (password !== e.target.value) setErrConfirmPassword("Passwords Must Match")
        else setErrConfirmPassword("")
    }


    const onSubmitHandler = e => {
        e.preventDefault()
        if (errFirstName === "" && errLastName === "" && errEmail === "" && errPassword === "" && errConfirmPassword === "" && errPasswordRegex.letter === "" && errPasswordRegex.number === "" && errPasswordRegex.specialCharacter === "" && errPasswordRegex.number === "") {
            axios.post('http://localhost:8000/api/register', { firstName, lastName, email, password, confirmPassword} , {withCredentials: true})
                .then( res => {
                    if(res.data.error){
                        setErrEmailExists(res.data.error)
                    } else {
                        localStorage.setItem('uuid', res.data._id)
                        setUser({
                            firstName: res.data.firstName,
                            lastName: res.data.lastName,
                            email: res.data.email,
                            id: res.data._id,
                            locations: res.data.locations
                        })
                        setErrEmailExists("")
                        setFirstName("")
                        setLastName("")
                        setEmail("")
                        setPassword("")
                        setConfirmPassword("")
                        history.push('/')
                    }
                })
                .catch(err => {
                    const errRes = err.response.data.errors
                    const errArr = []
                    for (const key of Object.keys(errRes)) errArr.push(errRes[key].message)
                    setErrors(errArr)
                })
        } else {
            if (!errors.includes("BRO THERE ARE ERRORS ON THE PAGE WHY U DO THIS")) {
                setErrors([...errors, "BRO THERE ARE ERRORS ON THE PAGE WHY U DO THIS"])
            }
        }
    }

    return (
        <div className="d-flex justify-center">
            <div>
                <h1>Welcome to THE WEBSITE!</h1>
                <h1>Registration</h1>
                <h3>Already a User? <Link to="/login">Login</Link></h3>
                <form className="mt-5" onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label className="me-3">First Name: </label><br />
                        <input onChange={validateFirstName} type="text" />
                        <p className="text-danger">{errFirstName}</p>
                    </div>
                    <div className="mb-3">
                        <label className="me-3">Last Name: </label><br />
                        <input onChange={validateLastName} type="text" />
                        <p className="text-danger">{errLastName}</p>
                    </div>
                    <div className="mb-3">
                        <label className="me-3">Email: </label><br />
                        <input onChange={validateEmail} type="text" />
                        <p className="text-danger">{errEmail}</p>
                        <p className="text-danger">{errEmailExists}</p>
                    </div>
                    <div className="mb-3">
                        <label className="me-3">Password: </label><br />
                        <input onChange={validatePassword} type="text" />
                        <p className="text-danger">{errPassword}</p>
                        {<p className="text-danger">{errPasswordRegex.letter}</p>}
                        {<p className="text-danger">{errPasswordRegex.uppercase}</p>}
                        {<p className="text-danger">{errPasswordRegex.specialCharacter}</p>}
                        {<p className="text-danger">{errPasswordRegex.number}</p>}
                    </div>
                    <div className="mb-3">
                        <label className="me-3">Password Confirmation: </label><br />
                        <input onChange={validateConfirmPassword} type="text" />
                        <p className="text-danger">{errConfirmPassword}</p>
                    </div>
                    <button className="btn btn-primary px-16 mt-3 mb-3" >Register</button>
                    {errors.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
                </form>
            </div>
        </div>
    )
}

export default Registration
