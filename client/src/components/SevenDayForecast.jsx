import React from 'react'
import {useHistory} from 'react-router-dom'

const SevenDayForecast = props => {

    const {weatherInfo, dateFormat, unitFormat} = props
    const history = useHistory()

    if (!weatherInfo) {
        history.push('/')
        return null
    } else {
        return (
            <div style={{ width: '652px' }}>
            <h1>7 Day Forecast for {weatherInfo.state}</h1>
            {
                weatherInfo.daily.map((weather, i) =>
                <div key={i} style={{ width: '652px'}} className={`text-black my-1 font-bold p-2 d-flex justify-content-between bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-300 to-gray-300' : 'from-gray-300 to-blue-300'}`}>
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
