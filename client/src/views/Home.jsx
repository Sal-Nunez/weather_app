import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Current from '../components/Current'
import { Switch, Route, useHistory, Link, useLocation } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Account from '../components/Account'
import LocationsForm from '../components/LocationsForm'
import SevenDayForecast from '../components/SevenDayForecast'
import HourlyForecast from '../components/HourlyForecast'
import WeatherNews from '../components/WeatherNews'
import LandscapeFlower from '../assets/videos/landscape_flower_ad.gif'
import PizzaAd from '../assets/videos/pizza_ad.gif'
import HairAd from '../assets/videos/hair_ad.gif'


const Home = (props) => {

    // const [city, setCity] = useState("")
    const { api_key, unit, weatherInfo, setWeatherInfo, user, setUser } = props
    // const [weatherInfo, setWeatherInfo] = useState(null)


    // const [unit, setUnit] = useState("F")
    const history = useHistory()
    const location = useLocation()
    const [modalShow, setModalShow] = useState(false)

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

    // const cityHandler = (e) => {
    //     setCity(e.target.value)
    // }

    useEffect(() => {
        if (!weatherInfo) {
            if (navigator.geolocation) navigator.geolocation.getCurrentPosition(location)
            function location(location) {

                axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.coords.latitude}, ${location.coords.longitude}&key=AIzaSyDAmANHssnJ_6cRIuRyTbAITMkOUz9_EZo`)
                    .then(res => {
                        const lon = res.data.results[0].geometry.location.lng
                        const lat = res.data.results[0].geometry.location.lat
                        const state = res.data.results[0].formatted_address
                        const city = res.data.results[0].address_components[0].long_name
                        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`)
                            .then(res => {
                                setWeatherInfo({ ...res.data, city, state })
                                history.push('/')
                            })
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.error(err))
            }
        }
    }, [api_key, history, setWeatherInfo, weatherInfo])

    return (
        <>
            <div className="" style={{ marginLeft: '60px', minWidth: '1004px' }}>
                {
                    weatherInfo ?
                        <div className="mt-3">
                            <Link to="/" onClick={e => e.target.blur()} className={buttonTransformClass('')}>Current Weather</Link>
                            <Link to="/forecast" onClick={e => e.target.blur()} className={buttonTransformClass('forecast')}>7 Day Forecast</Link>
                            <Link to="/hourly" onClick={e => e.target.blur()} className={buttonTransformClass('hourly')}>Hourly Forecast</Link>
                            <button className="bg-blue-500 col-auto btn btn-block me-3 mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-gray-200 hover:border-blue-500 font-bold " onClick={() => setModalShow(true)}>
                                My Locations
                            </button>
                            <LocationsForm setUser={setUser} user={user} show={modalShow} onHide={() => setModalShow(false)} />
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
            <div style={{ minWidth: '1004px' }} className="row ms-5 my-5">
                <div className="col-auto mb-3">
                    <img style={{ width: '652px' }} src={LandscapeFlower} alt="" />
                    <WeatherNews />
                </div>
                <div className="col-auto">
                    <div className="d-flex flex-column">
                        <img className="mb-5" style={{ width: '300px' }} src={PizzaAd} alt="" />
                        <div className="border my-5"></div>
                        <img className="mt-5" style={{ width: '300px' }} src={HairAd} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home