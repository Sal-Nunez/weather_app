import React from 'react'
import { Link } from 'react-router-dom'

const Current = props => {
    const { weatherInfo, dateFormat, unitFormat, timeFormat, buttonTransformClass } = props
    return (
        <div className="" style={{ width: '652px' }}>
            <h1 className="text-4xl my-3">Current Weather for {dateFormat(weatherInfo.daily[0].dt)}</h1>
            <div className="d-flex">

                <div>

                    <div style={{ width: '652px' }} className="rounded bg-gradient-to-br from-blue-400 to-gray-300 d-flex justify-content-between text-black p-3">
                        <div>
                            <span className="font-semibold">{weatherInfo.city}, {weatherInfo.state} Weather</span>
                            <div className="text-sm text-gray-600 font-medium">As of {timeFormat(weatherInfo.current.dt)}</div>
                            <div className="text-5xl font-semibold">{unitFormat(weatherInfo.current.temp)}</div>
                            <span className="font-semibold" style={{ marginBottom: '-25px', textTransform: 'capitalize' }}>{weatherInfo.current.weather[0].description} </span>
                        </div>
                        <div className="d-flex flex-col text-center">
                            <img className="w-24" src={`http://openweathermap.org/img/wn/${weatherInfo.current.weather[0].icon}@2x.png`} alt={weatherInfo.current.weather[0].main} />
                            <span style={{ marginTop: '-25px' }}>{unitFormat(weatherInfo.current.temp)}</span>
                        </div>
                    </div>
                    <div style={{ width: '652px' }} className="mt-3 rounded bg-gradient-to-br to-blue-400 from-gray-300 text-black p-3">
                        <p className="font-bold text-xl">Today's Forecast for {weatherInfo.city}, {weatherInfo.state}</p>
                        <div className="d-flex justify-content-between">
                            <div className="font-bold text-xl text-center ">
                                <div>Morning</div>
                                <div className="text-blue-600">{unitFormat(weatherInfo.daily[0].temp.morn)}</div>
                                <Link to="/hourly" onClick={e => e.target.blur()} className={"col-auto btn btn-block mb-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-gray-200 hover:border-blue-500 font-bold bg-blue-500 mt-4"}>Hourly</Link>
                            </div>
                            <div className="font-bold text-xl text-center ">
                                <div>Afternoon</div>
                                <div className="text-blue-600">{unitFormat(weatherInfo.daily[0].temp.day)}</div>
                            </div>
                            <div className="font-bold text-xl text-center ">
                                <div>Evening</div>
                                <div className="text-blue-600">{unitFormat(weatherInfo.daily[0].temp.eve)}</div>
                            </div>
                            <div className="font-bold text-xl text-center ">
                                <div>Overnight</div>
                                <div className="text-blue-600">{unitFormat(weatherInfo.daily[0].temp.night)}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    Test
                </div>
            </div>
        </div>
    )
}

export default Current