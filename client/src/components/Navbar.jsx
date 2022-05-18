import React from 'react'
import Logo from '../assets/images/Logo.svg'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Navbar = props => {

    const {setCity, search, setUnit, user, setUser} = props
    const history = useHistory()

    const logout = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials: true})
            .then(res => {
                setUser(null)
                localStorage.removeItem('uuid')
            })
            .catch(err => console.error(err))
    }

    const changeWeatherLocation = (e) => {
        search(e, e.target.value)
        e.target.value = ""
    }

    return (
        <nav className="navbar navbar-expand-lg" style={{minWidth: '200px'}}>
            <div className="container-fluid">

                <img className="cursor-pointer" onClick={e => history.push('/')} style={{width: '80px', backgroundColor: 'white', borderRadius: '5px'}} src={Logo} alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">
                        <img style={{width: '60px'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz48L3N2Zz4=" alt="weatherBySalLogo" />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav me-auto">
                    <span className="ms-3 me-auto mb-2 mb-lg-0">
                        <label htmlFor="">Temp Unit</label>
                        <select onChange={e => setUnit(e.target.value)} className="nav-item ms-3 text-black">
                            <option value="F">F °</option>
                            <option value="C">C °</option>
                            <option value="K">K °</option>
                        </select>
                    </span>
                    <span className="ms-3 me-auto mb-2 mb-lg-0">
                        <label htmlFor="">My Locations: </label>
                        <select onChange={e => changeWeatherLocation(e)} className="nav-item ms-3 text-black">
                            <option  value="">---------</option>
                            {/* <option value="Los Angeles">Los Angeles</option> */}
                            {
                                user ?
                                user.locations.map((location, i) =>
                                <option key={i} value={location}>{location}</option>
                                )
                                : null
                            }
                        </select>
                    </span>
                        </div>
                    <div className="d-flex">

                    {
                        !user ?
                        null :
                        <button onClick={e => history.push('/myaccount')} className="btn-link btn">Account</button>
                    }

                    {
                        !user ?
                        <button onClick={e => history.push('/login')} className="btn-link btn me-3">Login</button>
                        :
                        <button onClick={logout} className="btn-link btn me-3">Logout</button>
                    }
                    <form onSubmit={search} className="d-flex">
                        <input onChange={e => setCity(e)} className="form-control me-2" type="search" placeholder="Search for Weather!" aria-label="Search" />
                        <button className="btn btn-outline-success">Search</button>
                    </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar