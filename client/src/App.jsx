import './App.css'
import Home from './views/Home'
import { Switch, Route, useHistory } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const api_key = '75aecf1e93859f55562ef3839ff57613'
    const history = useHistory()
    const [weatherInfo, setWeatherInfo] = useState(null)
    const [unit, setUnit] = useState("F")
    const [city, setCity] = useState("")
    const [user, setUser] = useState(null)
    const [weatherLocation, setWeatherLocation] = useState("")
    const [newsWeatherLocation, setNewsWeatherLocation] = useState("")
    const [wn, setWn] = useState(null)

    const cityHandler = (e) => {
        setCity(e.target.value)
        setWeatherLocation(e.target.value)
    }

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('uuid')
        if (userLoggedIn) {
            axios.get(`http://localhost:8000/api/checkLogin/${userLoggedIn}`, { withCredentials: true })
                .then(res => {
                    setUser({
                        id: res.data._id,
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        email: res.data.email,
                        locations: res.data.locations
                    })
                })
                .catch(err => console.error(err))
        }
    }, [])

    const searchHandler = (e, weatherLocation1 = null) => {
        e.preventDefault()
        setWeatherLocation(e.target.value)
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${weatherLocation1 ? weatherLocation1 : city}&key=AIzaSyDAmANHssnJ_6cRIuRyTbAITMkOUz9_EZo`)
            .then(res => {
                const lon = res.data.results[0].geometry.location.lng
                const lat = res.data.results[0].geometry.location.lat
                const state = res.data.results[0].formatted_address
                const city = res.data.results[0].address_components[0].long_name
                setNewsWeatherLocation(state)
                axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`)
                    .then(res => {
                        setWeatherInfo({ ...res.data, city, state })
                        history.push('/')
                        axios.get(`http://localhost:8000/api/weather/search/${state}`)
                            .then(res => {
                                setWn(res.data)
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Navbar setWeatherInfo={setWeatherInfo} setWeatherLocation={setWeatherLocation} weatherLocation={weatherLocation} setUser={setUser} user={user} setUnit={setUnit} setCity={cityHandler} search={searchHandler} />
            <Switch>
                <Route exact path="/login">
                    <Login setUser={setUser} />
                </Route>
                <Route exact path="/register">
                    <Registration setUser={setUser} />
                </Route>
                <Home
                    setNewsWeatherLocation={setNewsWeatherLocation}
                    newsWeatherLocation={newsWeatherLocation}
                    setWeatherInfo={setWeatherInfo}
                    cityHandler={cityHandler}
                    weatherInfo={weatherInfo}
                    search={searchHandler}
                    setUser={setUser}
                    api_key={api_key}
                    setUnit={setUnit}
                    user={user}
                    unit={unit}
                    wn={wn}
                    setWn={setWn}
                />
            </Switch>
        </>
    )
}

export default App