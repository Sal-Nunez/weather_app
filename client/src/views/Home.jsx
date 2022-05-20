import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Current from '../components/Current'
import { Switch, Route, useHistory, Link, useLocation } from 'react-router-dom'
import Account from '../components/Account'
import LocationsForm from '../components/LocationsForm'
import SevenDayForecast from '../components/SevenDayForecast'
import HourlyForecast from '../components/HourlyForecast'
import WeatherNews from '../components/WeatherNews'
import LandscapeFlower from '../assets/videos/landscape_flower_ad.gif'
import PizzaAd from '../assets/videos/pizza_ad.gif'
import HairAd from '../assets/videos/hair_ad.gif'


const Home = (props) => {

    const { api_key, unit, weatherInfo, setWeatherInfo, user, setUser, newsWeatherLocation, setNewsWeatherLocation, wn, setWn } = props

    const history = useHistory()
    const location = useLocation()
    const [modalShow, setModalShow] = useState(false)
    const [locationsError, setLocationsError] = useState("")

    const unitFormat = num => {
        return unit === "K" ? `${Math.round(num)}° K` : unit === "C" ? `${Math.round(num - 273.15)}° C` : `${Math.round((num - 273.15) * (9 / 5) + 32)}° F`
    }

    const dateFormat = (unix, length = 'l') => {
        const base = new Date(unix * 1000);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const year = base.getFullYear()
        const month = months[base.getMonth()]
        const date = base.getDate()
        const long_date = `${month} ${date}, ${year}`
        const short_date = `${month} ${date}`
        if (length === 'l') return long_date
        if (length === 's') return short_date
    }

    const timeFormat = (unix) => {
        let base = new Date(unix * 1000);
        let hour = base.getHours()
        let min = base.getMinutes()
        let a = "am"
        if (hour > 12) {
            hour -= 12
            a = "pm"
        } else if (hour === 12) {
            a = "pm"
        }
        if (min < 10) {
            min = '0' + min
        }
        if (hour === 0) hour = 12
        const time = `${hour}:${min} ${a}`
        return time
    }

    const buttonTransformClass = path => {
        return `col-auto btn btn-block me-3 mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-gray-200 hover:border-blue-500 font-bold ${location.pathname === `/${path}` ? 'border-blue-500 bg-transparent text-gray-200' : 'bg-blue-500'}`
    }

    useEffect(() => {
        if (!weatherInfo) {
            if (navigator.geolocation === {}) {
                navigator.geolocation.getCurrentPosition(location)
                function location(location) {
                    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.coords.latitude}, ${location.coords.longitude}&key=AIzaSyDAmANHssnJ_6cRIuRyTbAITMkOUz9_EZo`)
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
                                })
                                .catch(err => console.log(err))
                        })
                        .catch(err => console.error(err))
                }
            } else if (user) {
                if (user.locations.length > 0) {
                    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${user.locations[0]}&key=AIzaSyDAmANHssnJ_6cRIuRyTbAITMkOUz9_EZo`)
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
                                // console.log(res.data, "line 26")
                                setWn(res.data)
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.error(err))
                }
            }

        }
    }, [api_key, history, setWeatherInfo, weatherInfo, setNewsWeatherLocation, user, setWn, wn])

    return (
        <>
            <div className="" style={{maxWidth: '1004px' }}>
                {
                    weatherInfo ?
                        <div className="mt-3">
                            <Link to="/" onClick={e => e.target.blur()} className={buttonTransformClass('')}>Current Weather</Link>
                            <Link to="/forecast" onClick={e => e.target.blur()} className={buttonTransformClass('forecast')}>7 Day Forecast</Link>
                            <Link to="/hourly" onClick={e => e.target.blur()} className={buttonTransformClass('hourly')}>Hourly Forecast</Link>
                            {
                                user ?
                                    <button className="bg-blue-500 col-auto btn btn-block me-3 mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-gray-200 hover:border-blue-500 font-bold " onClick={
                                        () => {
                                            setModalShow(true)
                                            setLocationsError("")
                                        }
                                    }>
                                        My Locations
                                    </button>
                                    : null
                            }
                            <LocationsForm locationsError={locationsError} setLocationsError={setLocationsError} setUser={setUser} user={user} show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                        : null
                }
                <Switch>
                    <Route exact path='/'>
                        <Current buttonTransformClass={buttonTransformClass} unitFormat={unitFormat} timeFormat={timeFormat} weatherInfo={weatherInfo} dateFormat={dateFormat} />
                    </Route>
                    <Route exact path='/forecast'>
                        <SevenDayForecast unitFormat={unitFormat} timeFormat={timeFormat} weatherInfo={weatherInfo} dateFormat={dateFormat} />
                    </Route>
                    <Route exact path='/hourly'>
                        <HourlyForecast unitFormat={unitFormat} timeFormat={timeFormat} weatherInfo={weatherInfo} dateFormat={dateFormat} />
                    </Route>
                    <Route exact path='/myaccount'>
                        <Account />
                    </Route>
                </Switch>
            </div>
            <div style={{ maxWidth: '1004px'}} className="d-flex my-5 inside-modal">
                <div className="mb-3">
                    <img className="weatherNews show-mobile show-desktop" src={LandscapeFlower} alt="" />
                    <WeatherNews wn={wn} setWn={setWn} newsWeatherLocation={newsWeatherLocation} />
                </div>
                <div className="">
                    <div className="d-flex flex-column">
                        <img className="show-mobile show-desktop-small-image" src={PizzaAd} alt="" />
                        <div className="border m-5"></div>
                        <img className="show-mobile show-desktop-small-image" src={HairAd} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home