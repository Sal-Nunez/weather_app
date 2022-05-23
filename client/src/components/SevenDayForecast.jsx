import React from 'react'
import { useHistory } from 'react-router-dom'

const SevenDayForecast = props => {

    const { weatherInfo, dateFormat, unitFormat } = props
    const history = useHistory()

    if (!weatherInfo) {
        history.push('/')
        return null
    } else {
        return (
            <div className="" style={{maxWidth: '992px', margin: 'auto' }}>
                <h1>7 Day Forecast for {weatherInfo.state}</h1>
                {
                    weatherInfo.daily.map((weather, i) =>
                        <div key={i} className={`text-black my-1 font-bold p-2 show-desktop d-flex justify-content-between show-mobile bg-gradient-to-br
                            ${i % 2 === 0 && weather.weather[0].icon.includes("n") ? 'to-blue-300 from-gray-500' : i % 2 !== 0 && weather.weather[0].icon.includes("n") ? 'to-gray-500 from-blue-300' : null}
                            ${i % 2 === 0 && weather.weather[0].icon.includes("d") ? 'to-blue-300 from-yellow-100' : i % 2 !== 0 && weather.weather[0].icon.includes("d") ? 'to-yellow-100 from-blue-300' : null}`}>
                            <div>
                                <div> {dateFormat(weather.dt, 'l')}</div>
                                <div>Low: {unitFormat(weather.temp.min)}</div>
                                <div>High: {unitFormat(weather.temp.max)}</div>
                            </div>
                            <div>
                                <div><span className="font-bold">Morning:</span> <span className="text-blue-800 font-bold">{unitFormat(weather.temp.morn)}</span></div>
                                <div><span className="font-bold">Afternoon:</span> <span className="text-blue-800 font-bold">{unitFormat(weather.temp.day)}</span></div>
                                <div><span className="font-bold">Evening:</span> <span className="text-blue-800 font-bold">{unitFormat(weather.temp.eve)}</span></div>
                                <div><span className="font-bold">Overnight:</span> <span className="text-blue-800 font-bold">{unitFormat(weather.temp.night)}</span></div>
                            </div>
                            <div>
                                <div className="capitalize">{weather.weather[0].description} {weather.clouds}%</div>
                                <img className="block mx-auto" style={{ marginTop: '-20px', marginBottom: '-20px' }} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default SevenDayForecast
