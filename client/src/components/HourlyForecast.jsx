import React from 'react'
import {useHistory} from 'react-router-dom'
import Watermelon from '../assets/images/watermelon_ad.webp'
import SaleAd from '../assets/images/sale ad.webp'
import FakeAdTop from '../assets/images/fakeadtop.gif'


const HourlyForecast = props => {

    const { weatherInfo, dateFormat, unitFormat, timeFormat } = props
    const history = useHistory()


    if(!weatherInfo) {
        history.push('/')
        return null
    } else {
        return (
            <>
            <div className="d-flex">
                <div>
                    <img className=" mt-1" style={{ width: '652px', height: '300px' }} src={FakeAdTop} alt="" />
                    <div style={{width: '652px'}} className="border mt-4 mb-4"></div>
                    <h1 style={{width: '652px'}}>Hourly Forecast for {weatherInfo.state}</h1>
                    <div style={{ width: '652px', height: '910px', overflow: 'auto' }}>
                        {weatherInfo.hourly.map((weather, i) =>
                            <div key={i} className={`text-black my-1 p-2 d-flex d-flex justify-content-between bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-300 to-gray-300' : 'from-gray-300 to-blue-300'}`}>
                                <div>
                                    <div> {dateFormat(weather.dt, 's')} <span className="font-bold">{timeFormat(weather.dt)}</span> </div>
                                    <div>Temp: {unitFormat(weather.temp)}</div>
                                    <div>Feels Like: {unitFormat(weather.feels_like)}</div>
                                </div>
                                <div>
                                    <div className="capitalize">{weather.weather[0].description} {weather.clouds}%</div>
                                    <img className="block mx-auto" style={{ marginTop: '-20px', marginBottom: '-20px' }} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                                </div>
                            </div>
                        )}</div>
                </div>
                <div className="ms-3 mt-1">
                    <div className="d-flex flex-column">
                        <img className="mb-5" style={{ width: '300px' }} src={Watermelon} alt="" />
                        <div style={{}} className="border my-5"></div>
                        <img className="mt-5" style={{ width: '300px' }} src={SaleAd} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
}

export default HourlyForecast
