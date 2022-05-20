import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { scroller } from 'react-scroll'
import Loading from '../assets/images/news_loading.gif'
import '../App.css'


const WeatherNews = (props) => {

    const { wn, setWn } = props

    const [hasLoaded, setHasLoaded] = useState(false)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + 9)

    useEffect(() => {
        if (!hasLoaded) {
            setHasLoaded(true)
            axios.get(`http://localhost:8000/api/weather/search/`)
                .then(res => {
                    setWn(res.data)
                })
                .catch(err => console.error(err))
        }
    }, [hasLoaded, setWn])

    const pageHandler = (e) => {
        scroller.scrollTo("weatherNews", {
            duration: 800,
            delay: 0,
        })
        if (!isNaN(e.target.innerText)) {
            const start = (parseInt(e.target.innerText) - 1) + "0"
            setStart(parseInt(start))
            setEnd(parseInt(start) + 9)
        } else {
            if (e.target.innerText === "Next") {
                setStart(start + 10)
                setEnd(end + 10)
            } else if (e.target.innerText === "Previous") {
                setStart(start - 10)
                setEnd(end - 10)
            }
        }
    }


    const goToSite = (link) => {
        window.open(link, '_blank')
    }

    // console.log(wn ? wn.news_results.map((news) => console.log(news)) : "nothing here")

    if (wn && wn.news_results.length > 0) {
        // console.log(`wn: ${JSON.stringify(wn)} news_results: ${wn.news_results}`)
        return (
            <div style={{ width: '652px' }}>
                <div>
                    <div className="">
                        <h1 className="mt-5 text-2xl bg-blue-500 text-gray-800 px-3 py-1" >Weather In The News</h1>
                        <div>
                            {
                                wn ?
                                    wn.news_results.map((news, i) => {
                                        return news.source === "San Francisco Chronicle"
                                            || i < start || i > end
                                            ?
                                            null
                                            :
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
                                    })
                                    :
                                    <>
                                        <h3>Loading News...</h3>
                                        <img src={Loading} alt="" />
                                    </>
                            }
                        </div>
                    </div>
                    {
                        wn.people_also_search_for ?
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
                <nav className="" aria-label="Page navigation">
                        <ul className="d-flex justify-center">
                            {
                                start === 0 ?
                                    null :
                                    <span onClick={e => pageHandler(e)} className={`ppage-link-inactive`}>Previous</span>
                            }
                            <span onClick={
                                e => {
                                    pageHandler(e)
                                    window.scroll({
                                        top: window.scrollHeight
                                    })
                                }
                            } className={`ppage-link-${start === 0 ? "" : 'in'}active`}>1</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 10 ? "" : 'in'}active`}>2</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 20 ? "" : 'in'}active`}>3</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 30 ? "" : 'in'}active`}>4</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 40 ? "" : 'in'}active`}>5</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 50 ? "" : 'in'}active`}>6</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 60 ? "" : 'in'}active`}>7</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 70 ? "" : 'in'}active`}>8</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 80 ? "" : 'in'}active`}>9</span>
                            <span onClick={e => pageHandler(e)} className={`ppage-link-${start === 90 ? "" : 'in'}active`}>10</span>
                            {
                                start === 90 ?
                                    null :
                                    <span onClick={e => pageHandler(e)} className={`ppage-link-inactive`}>Next</span>
                            }
                        </ul>
                    </nav>
            </div>
        )
    } else return null

}

export default WeatherNews
