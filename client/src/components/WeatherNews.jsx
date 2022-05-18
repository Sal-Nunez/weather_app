import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from '../assets/images/news_loading.gif'
import WeatherInfoSample from '../assets/WeatherInfoSample'


const WeatherNews = () => {

    const [wn, setWn] = useState(null)



    useEffect(() => {
        setWn(WeatherInfoSample)

        axios.get('http://localhost:8000/api/weather/search')
            .then(res => {
                console.log(res.data, "line 13")
                setWn(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    const goToSite = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div className="" style={{ width: '652px' }}>
            <div>
                <div className="">
                    <h1 className="mt-5 text-2xl bg-blue-500 text-gray-800 px-3 py-1" >Weather In The News</h1>
                    <div>
                        {
                            wn ?
                                wn.news_results.map((news, i) =>
                                    <div key={i} className="d-flex justify-content-between p-3  text-white rounded-2xl my-3" style={{ border: '#3c4043 1px solid' }}>
                                        <div>
                                            <div className="mb-1" style={{ color: '#bdc1c6', fontSize: '12px' }}>{news.source}</div>
                                            <div className="me-3">
                                                <div style={{ color: '#bdc1c6', fontSize: '18px' }} onClick={e => goToSite(news.link)} className="card-title hover:text-blue-custom cursor-pointer">{news.title}</div>
                                            </div>
                                            <div style={{ color: '#9aa0a6', fontSize: '14px' }} className="me-3">{news.snippet}</div>
                                            <span className="" style={{ color: '#9aa0a6', fontSize: '12px' }}>{news.date}</span>

                                        </div>
                                        <img src={news.thumbnail} style={{ height: '112px', width: '112px' }} className="rounded-2xl" alt="..." />
                                    </div>
                                )
                                :
                                <>
                                <h3>Loading News...</h3>
                                <img src={Loading} alt="" />
                                </>
                        }
                    </div>
                </div>
                {
                    wn ?
                        wn.people_also_search_for.map((results, i) =>
                            <div key={i}>
                                <div>
                                    <h3 className=" text-2xl rounded-lg  text-center p-3 inline-block">{results.name}</h3>
                                </div>
                                <div className="d-flex justify-content-between">
                                    {
                                        results.news_results.map((news, i) =>
                                            <div key={i} className="d-flex justify-content-between flex-column rounded-2xl" style={{ width: '212px', backgroundColor: '#202124', border: '#3c4043 1px solid' }}>
                                                <div key={i} className="" style={{ backgroundColor: '#202124' }} >
                                                    <img src={news.thumbnail} className="rounded-t-2xl" style={{ marginLeft: '-1px', marginTop: '-1px' }} alt="..." />
                                                    <div className="ms-3 pt-3" style={{ color: '#bdc1c6', fontSize: '12px' }}>{news.source}</div>
                                                    <div className="mx-3 mb-4">
                                                        <div onClick={e => goToSite(news.link)} style={{ fontSize: '16px' }} className=" hover:text-blue-custom cursor-pointer mt-1">{news.title}</div>
                                                    </div>
                                                </div>
                                                <div style={{ color: '#9aa0a6', fontSize: '12px' }} className="ms-3 mb-3 align-text-bottom">{news.date}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ) :
                        null
                }
            </div>
        </div>
    )
}

export default WeatherNews
