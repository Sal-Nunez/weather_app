import axios from 'axios'
import React, { useState, useEffect } from 'react'


const WeatherNews = () => {

    const [wn, setWn] = useState({
        "search_metadata": {
            "id": "61915c6a797ac69905ce401f",
            "status": "Success",
            "json_endpoint": "https://serpapi.com/searches/7bfed6a4f3d0c664/61915c6a797ac69905ce401f.json",
            "created_at": "2021-11-14 18:58:50 UTC",
            "processed_at": "2021-11-14 18:58:50 UTC",
            "google_url": "https://www.google.com/search?q=weather&oq=weather&hl=en&gl=us&tbm=nws&sourceid=chrome&ie=UTF-8",
            "raw_html_file": "https://serpapi.com/searches/7bfed6a4f3d0c664/61915c6a797ac69905ce401f.html",
            "total_time_taken": 0.56
        },
        "search_parameters": {
            "engine": "google",
            "q": "weather",
            "google_domain": "google.com",
            "hl": "en",
            "gl": "us",
            "device": "desktop",
            "tbm": "nws"
        },
        "search_information": {
            "news_results_state": "Results for exact spelling",
            "query_displayed": "weather",
            "total_results": 735000000,
            "time_taken_displayed": 0.36
        },
        "people_also_search_for": [
            {
                "name": "News about Winter Weather Advisory",
                "news_results": [
                    {
                        "position": 1,
                        "link": "https://www.accuweather.com/en/winter-weather/northeast-cold-wintry-pattern-snow-potential/1046781",
                        "title": "Old Man Winter to awaken, blast Northeast with cold and snow",
                        "source": "AccuWeather",
                        "date": "1 day ago",
                        "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/5b4f52c9027e8478f0c3050db724f138e91db37215cfdcf2a8aa7f6b573fa3d752912d771864ca16b685f00bceeba0ca38f64cb3728d3ad4.jpeg"
                    },
                    {
                        "position": 2,
                        "link": "https://www.fox9.com/weather/winter-weather-advisory-in-effect-in-twin-cities",
                        "title": "Winter Weather Advisory in effect in Twin Cities",
                        "source": "FOX 9",
                        "date": "1 day ago",
                        "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/5b4f52c9027e8478f0c3050db724f138e91db37215cfdcf2a8aa7f6b573fa3d7fa0d7db14d10ff1ae83f3ed7cb102f845f45c104bb280a90.jpeg"
                    },
                    {
                        "position": 3,
                        "link": "https://www.accuweather.com/en/winter-weather/first-measurable-snow-to-pummel-chilly-northeast/1047345",
                        "title": "First measurable snow to pummel chilly Northeast",
                        "source": "AccuWeather",
                        "date": "7 hours ago",
                        "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/5b4f52c9027e8478f0c3050db724f138e91db37215cfdcf2a8aa7f6b573fa3d7269bca644b51615c26a84004b39355346c1a913be616b350.jpeg"
                    }
                ]
            },
            {
                "name": "News about NFL",
                "news_results": [
                    {
                        "position": 1,
                        "link": "https://www.actionnetwork.com/nfl/nfl-weather-forecast-lions-vs-steelers-snow-wind-pittsburgh-sunday",
                        "title": "Lions vs. Steelers NFL Weather Forecast: Sunday Snow & Wind Expected at Heinz Field in Pittsburgh",
                        "source": "Action Network",
                        "date": "2 hours ago",
                        "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/5b4f52c9027e8478f0c3050db724f13891359d7af9cdbab5049f4a8d666e7b34159ec07e014163aeaca442e073e77d33864ebd285a27ecfa.jpeg"
                    },
                    {
                        "position": 2,
                        "link": "https://www.actionnetwork.com/nfl/nfl-weather-forecast-packers-vs-seahawks-snow-wind-green-bay-lambeau-field-sunday",
                        "title": "NFL Packers-Seahawks Weather Forecast: Sunday Wind & Snow Expected at Lambeau in Green Bay",
                        "source": "Action Network",
                        "date": "1 hour ago",
                        "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/5b4f52c9027e8478f0c3050db724f13891359d7af9cdbab5049f4a8d666e7b34678a3bdda2047ea770d04cf57e646844e29b018e0d1506d5.jpeg"
                    },
                    {
                        "position": 3,
                        "link": "https://caneswarning.com/2021/11/12/miami-football-at-florida-state-game-weather-information-and-coaching-matchups/",
                        "title": "Miami football at Florida State: Game, weather information and coaching matchups",
                        "source": "Canes Warning",
                        "date": "1 day ago",
                        "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/5b4f52c9027e8478f0c3050db724f13891359d7af9cdbab5049f4a8d666e7b341b2c3a3c9e5d27af9bf7b9bcb8b654b7d22a3a97af372c6b.jpeg"
                    }
                ]
            }
        ],
        "news_results": [
            {
                "position": 1,
                "link": "https://thehill.com/homenews/sunday-talk-shows/581457-surgeon-general-warns-of-uptick-in-cases-as-cold-weather-arrives",
                "title": "Surgeon general warns of uptick in COVID-19 cases as cold weather arrives | TheHill",
                "source": "TheHill",
                "date": "3 hours ago",
                "snippet": "Surgeon General Vivek Murthy warned Americans on Sunday of a possible \nuptick of COVID-19 cases as the winter season approaches while...",
                "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/703dce799af80b77f560a304bb04600ebed1c0974d2d9d814aac46265c502565.jpeg"
            },
            {
                "position": 2,
                "link": "https://www.sfchronicle.com/weather/article/Dense-fog-advisory-issued-for-Bay-Area-16620062.php",
                "title": "Dense fog advisory issued for Bay Area — here’s the weather outlook",
                "source": "San Francisco Chronicle",
                "date": "1 hour ago",
                "snippet": "Fog hovering over the San Joaquin Valley traveled westward early Sunday, \nprompting the...",
                "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/703dce799af80b77b9868c916cb05d8286592819e9df92bbd95eb922b9edbf64.jpeg"
            },
            {
                "position": 3,
                "link": "https://www.oregonlive.com/weather/2021/11/portland-metro-saturday-weather-cloudy-with-highs-in-the-lower-60s.html",
                "title": "Portland metro Saturday weather: Cloudy with highs in the lower 60s",
                "source": "Oregon Live",
                "date": "3 hours ago",
                "snippet": "Sunday will be cloudy with a chance of rain overnight, a tame forecast \ncompared to the flood watch that ended the work week.",
                "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/703dce799af80b774fc59eda9f1d9388852658d9ebbf6429f1049e7444c338d6.jpeg"
            },
            {
                "position": 4,
                "link": "https://www.seattletimes.com/seattle-news/weather/heavy-rain-gusty-winds-urban-flooding-expected-in-seattle-area-through-monday/",
                "title": "Heavy rain, gusty winds, urban flooding expected in Seattle area through Monday",
                "source": "The Seattle Times",
                "date": "19 hours ago",
                "snippet": "Gusty winds and heavy rainfall are expected to last through Monday in the \nSeattle area, meteorologists say, which has the potential to cause...",
                "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/703dce799af80b777d1ccd1ee8d2e7dc451dd6e78d05d0a1821a9aae8aed28c2.jpeg"
            },
            {
                "position": 5,
                "link": "https://www.nj.com/weather/2021/11/nj-weather-more-than-23k-without-power-as-storms-hit-state.html",
                "title": "N.J. weather: More than 23K without power as storms hit state",
                "source": "NJ.com",
                "date": "21 hours ago",
                "snippet": "Forecasts called for the chance of strong wind gusts Saturday around the \nstate.",
                "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/703dce799af80b776efe41016081309b489229d1de554c7fac98762cc7244e77.jpeg"
            },
            {
                "position": 6,
                "link": "https://www.accuweather.com/en/winter-weather/atmospheric-river-to-continue-flowing-over-pacific-northwest-early-in-the-week/1047241",
                "title": "Atmospheric river to continue flowing over Pacific Northwest early in the week",
                "source": "AccuWeather",
                "date": "12 hours ago",
                "snippet": "The Pacific Northwest got a respite from heavy precipitation to begin the \nweekend. However, AccuWeather forecasters say that another atmospheric \nriver will...",
                "thumbnail": "https://serpapi.com/searches/61915c6a797ac69905ce401f/images/703dce799af80b77072871ca22355bd62417ac923e24b6cac47d6787ed3926f5.jpeg"
            },
            {
                "position": 7,
                "link": "https://www.wsj.com/articles/the-best-heated-gear-for-cold-weather-outdoor-adventures-11636644819",
                "title": "The Best Heated Gear for Cold Weather Outdoor Adventures",
                "source": "Wall Street Journal",
                "date": "3 days ago",
                "snippet": "From battery-powered gloves to futuristic insoles that heat up to 140 \ndegrees, this high-tech gear will keep you warm all winter long.",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzxQCNWUwVMX4P5gjOav_HlnvFxAe4jltAhCTpgGaN-baRbN9tH_Q1QE&usqp=CAI&s"
            },
            {
                "position": 8,
                "link": "https://kutv.com/news/local/park-city-mountain-delays-opening-due-to-warm-weather",
                "title": "Park City Mountain delays opening due to warm weather",
                "source": "KUTV",
                "date": "18 hours ago",
                "snippet": "Park City Mountain officials announced Friday their opening date has been \ndelayed due to warm weather. They have not yet announced a new...",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztwfD9X6-p9yjQgmBBUemeF08i2UEPjcBpUIk7qj-6ErjM9KdDlP7CANJ&usqp=CAI&s"
            }
        ],
        "pagination": {
            "current": 1,
            "next": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=10&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8NMDegQIARBJ",
            "other_pages": {
                "2": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=10&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARA3",
                "3": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=20&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARA5",
                "4": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=30&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARA7",
                "5": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=40&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARA9",
                "6": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=50&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARA_",
                "7": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=60&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARBB",
                "8": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=70&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARBD",
                "9": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=80&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARBF",
                "10": "https://www.google.com/search?q=weather&tbm=nws&ei=alyRYcnjC-ShqtsP0oaYyAs&start=90&sa=N&ved=2ahUKEwjJwI3DxJj0AhXkkGoFHVIDBrkQ8tMDegQIARBH"
            }
        },
        "serpapi_pagination": {
            "current": 1,
            "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=10&tbm=nws",
            "next": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=10&tbm=nws",
            "other_pages": {
                "2": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=10&tbm=nws",
                "3": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=20&tbm=nws",
                "4": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=30&tbm=nws",
                "5": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=40&tbm=nws",
                "6": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=50&tbm=nws",
                "7": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=60&tbm=nws",
                "8": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=70&tbm=nws",
                "9": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=80&tbm=nws",
                "10": "https://serpapi.com/search.json?device=desktop&engine=google&gl=us&google_domain=google.com&hl=en&q=weather&start=90&tbm=nws"
            }
        }
    })

    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/weather/search')
    //         .then(res => {
    //             console.log(res.data)
    //             setWn(res.data)

    //         })
    //         .catch(err => console.error(err))
    // }, [])

    const goToSite = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div className="" style={{ width: '652px'}}>
            <div>
                <div className="">
                    <h1 className="mt-5 text-2xl bg-blue-500 text-gray-800 px-3 py-1" >Weather In The News</h1>
                    <div>
                        {
                            wn.news_results.map((news, i) =>
                                <div key={i} className="d-flex justify-content-between p-3  text-white rounded-2xl my-3" style={{ border: '#3c4043 1px solid'}}>
                                    <div>
                                        <div className="mb-1" style={{ color: '#bdc1c6', fontSize: '12px'}}>{news.source}</div>
                                        <div className="me-3">
                                            <div style={{ color: '#bdc1c6', fontSize: '18px' }} onClick={e => goToSite(news.link)} className="card-title hover:text-blue-custom cursor-pointer">{news.title}</div>
                                        </div>
                                        <div style={{ color: '#9aa0a6', fontSize: '14px' }} className="me-3">{news.snippet}</div>
                                        <span className="" style={{ color: '#9aa0a6', fontSize: '12px' }}>{news.date}</span>

                                    </div>
                                    <img src={news.thumbnail} style={{ height: '112px', width: '112px' }} className="rounded-2xl" alt="..." />
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    wn.people_also_search_for.map((results, i) =>
                        <div key={i}>
                            <div>
                                <h3 className=" text-2xl rounded-lg  text-center p-3 inline-block">{results.name}</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                                {
                                    results.news_results.map((news, i) =>
                                    <div className="d-flex justify-content-between flex-column rounded-2xl" style={{ width: '212px', backgroundColor: '#202124', border: '#3c4043 1px solid' }}>
                                        <div key={i} className="" style={{backgroundColor: '#202124'}} >
                                            <img src={news.thumbnail} className="rounded-t-2xl" style={{marginLeft: '-1px', marginTop: '-1px'}} alt="..." />
                                            <div className="ms-3 pt-3" style={{color: '#bdc1c6', fontSize: '12px'}}>{news.source}</div>
                                            <div className="mx-3 mb-4">
                                                <div onClick={e => goToSite(news.link)} style={{fontSize: '16px'}} className=" hover:text-blue-custom cursor-pointer mt-1">{news.title}</div>
                                            </div>
                                        </div>
                                            <div style={{color: '#9aa0a6', fontSize: '12px'}} className="ms-3 mb-3 align-text-bottom">{news.date}</div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default WeatherNews
