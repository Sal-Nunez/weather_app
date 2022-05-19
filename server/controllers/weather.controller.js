const axios = require('axios')

module.exports.weatherNews = (req, res) => {

    console.log("In weather News")
    //use this so dont use calls to API but comment it out if we want to actually search!
    res.json({
        "search_metadata": {
            "id": "6284aed3a4bb3811a0ac430c",
            "status": "Success",
            "json_endpoint": "https://serpapi.com/searches/92405e162d9c8615/6284aed3a4bb3811a0ac430c.json",
            "created_at": "2022-05-18 08:31:15 UTC",
            "processed_at": "2022-05-18 08:31:15 UTC",
            "google_url": "https://www.google.com/search?q=weather&oq=weather&tbm=nws&sourceid=chrome&ie=UTF-8",
            "raw_html_file": "https://serpapi.com/searches/92405e162d9c8615/6284aed3a4bb3811a0ac430c.html",
            "total_time_taken": 0.95
        },
        "search_parameters": {
            "engine": "google",
            "q": "weather",
            "google_domain": "google.com",
            "device": "desktop",
            "tbm": "nws"
        },
        "search_information": {
            "news_results_state": "Results for exact spelling",
            "query_displayed": "weather",
            "total_results": 1640000000,
            "time_taken_displayed": 0.37
        },
        "people_also_search_for": [
            {
                "name": "News about severe weather",
                "news_results": [
                    {
                        "position": 1,
                        "link": "https://nonpareilonline.com/weather/watch-now-full-details-on-tuesday-evenings-severe-weather-threat/article_02299e56-abd7-599f-8b70-a288d4013131.html",
                        "title": "Watch now: Full details on Tuesday evening's severe weather threat",
                        "source": "Daily Nonpareil",
                        "date": "20 hours ago",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJkbBHKwiD1gQZuw_Ij_p9kGaENFlH3qA3c8QjeUilzlF8cquvAshN4B7&usqp=CAI&s"
                    },
                    {
                        "position": 2,
                        "link": "https://journalstar.com/weather/watch-now-tuesday-evening-severe-weather-update/article_9a71289e-d636-11ec-8e80-87bcf2b76c46.html",
                        "title": "Watch now: Tuesday evening severe weather update | Weather | journalstar.com",
                        "source": "Lincoln Journal Star",
                        "date": "8 hours ago",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrnIgqhVCAh92KVsgZbu7mU70GRC5ICUPBslX88UJenWshwSU-9cdV4gt&usqp=CAI&s"
                    },
                    {
                        "position": 3,
                        "link": "https://www.fox5ny.com/news/severe-storms-potential-tornados-forecast-nyc-region",
                        "title": "New York severe weather: Storms, flooding, potential tornadoes",
                        "source": "FOX 5 New York",
                        "date": "1 day ago",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4tqV1GDBNwWdmMOiaU56VZqHPaG4suqVz1-MGwL5&usqp=CAI&s"
                    }
                ]
            }
        ],
        "news_results": [
            {
                "position": 1,
                "link": "https://www.sfgate.com/weather/article/weather-shift-coming-to-California-17178712.php",
                "title": "'Substantial' weather pattern shift coming to California in May",
                "source": "SFGATE",
                "date": "14 hours ago",
                "snippet": "The much-dreaded wildfire weather has entered the California forecast.",
                "thumbnail": "https://serpapi.com/searches/6284aed3a4bb3811a0ac430c/images/be5ba6cadf9d367fe1df92c340a0c7830468b97f13e493a9b291633c03c75e2c.jpeg"
            },
            {
                "position": 2,
                "link": "https://foxbaltimore.com/news/local/weather-alert-high-heat-for-black-eyed-susan-day-preakness",
                "title": "WEATHER ALERT | High heat for Black-Eyed Susan Day and Preakness",
                "source": "WBFF",
                "date": "6 hours ago",
                "snippet": "Many years, it's the rain, or the cold, or the mud that's remembered for \nPreakness, but this year, it will be the heat! Preakness Planner.",
                "thumbnail": "https://serpapi.com/searches/6284aed3a4bb3811a0ac430c/images/be5ba6cadf9d367f24faeb0895c7c4f84ddde895ac493b949b3f87db2d08a3ae.jpeg"
            },
            {
                "position": 3,
                "link": "https://www.zdnet.com/article/best-weather-app/",
                "title": "The 5 best weather apps of 2022",
                "source": "ZDNet",
                "date": "2 hours ago",
                "snippet": "What is the best weather app? AccuWeather is ZDNet's top choice. We \ncompared features, cost, and accessibility when we determined our No.",
                "thumbnail": "https://serpapi.com/searches/6284aed3a4bb3811a0ac430c/images/be5ba6cadf9d367f452bbd3ace3390d0665e94bc9b2300537fdc63c3059a66b9.jpeg"
            },
            {
                "position": 4,
                "link": "https://www.clickondetroit.com/weather/2022/05/18/metro-detroit-weather-tracking-rain-and-dropping-temps/",
                "title": "Metro Detroit weather: Tracking rain and dropping temps",
                "source": "ClickOnDetroit",
                "date": "7 mins ago",
                "snippet": "This just may be the worst weather day of the week here in Metro Detroit \nwith clouds filling in and stacking up bringing rain chances our...",
                "thumbnail": "https://serpapi.com/searches/6284aed3a4bb3811a0ac430c/images/be5ba6cadf9d367fd9e43d2de680c5ae8688b786a4b893d5299c33aef81856cb.jpeg"
            },
            {
                "position": 5,
                "link": "https://www.cnn.com/videos/weather/2022/05/18/daily-weather-forecast-severe-storm-tornado-hail-wind-drought-fire-west-hot-south.cnn",
                "title": "Record heat spreads to the East",
                "source": "CNN",
                "date": "44 mins ago",
                "snippet": "Very hot temperatures spread across much of the South and East as the \ncentral US sees more severe storms. CNN meteorologist Pedram Javaheri...",
                "thumbnail": "https://serpapi.com/searches/6284aed3a4bb3811a0ac430c/images/be5ba6cadf9d367f0232b504ef6b06d415e0fbe5e7445d829b858dcf166051c8.jpeg"
            },
            {
                "position": 6,
                "link": "https://www.accuweather.com/en/winter-weather/denver-weather-to-go-from-high-80s-to-snow-in-a-matter-of-just-hours/1188582",
                "title": "Denver weather to go from high 80s to snow in a matter of just hours",
                "source": "AccuWeather",
                "date": "15 hours ago",
                "snippet": "AccuWeather meteorologists say temperatures could plummet more than 50 \ndegrees and a storm could unload more than a foot of snow in Colorado by \nthe weekend.",
                "thumbnail": "https://serpapi.com/searches/6284aed3a4bb3811a0ac430c/images/be5ba6cadf9d367fd9e96bd05dc0797c9b9006e57cfb3aa571440b546ce653d1.jpeg"
            },
            {
                "position": 7,
                "link": "https://www.accuweather.com/en/weather-news/116-year-old-ghost-tracks-unearthed-following-coastal-storm-on-jersey-shore/1188072",
                "title": "116-year-old 'ghost tracks' unearthed following pesky coastal storm",
                "source": "AccuWeather",
                "date": "1 day ago",
                "snippet": "The storm, which hammered the mid-Atlantic beaches for days on end \nbeginning on Mother's Day weekend, helped unearth a World War I-era...",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbjMvbb8IPNi2hzbFbJbs46iY96geXvVqXUJmOyK6T-y4n2imxc8w4bI&usqp=CAI&s"
            },
            {
                "position": 8,
                "link": "https://www.alabamawx.com/?p=242533",
                "title": "Hottest Weather So Far This Year Later This Week",
                "source": "The Alabama Weather Blog",
                "date": "21 hours ago",
                "snippet": "COOL MORNING: We have a cool May morning over North Alabama… here are some \ntemperatures just before sunrise… Gadsden 50. Haleyville 51",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE47nkuLC6RZsZI9IPtAX0WLdIFzERf5tVg2XR812sMDvHS9vzByqxQw&usqp=CAI&s"
            },
            {
                "position": 9,
                "link": "https://www.wmur.com/article/new-hampshire-weather-video-evening-51722/40028156",
                "title": "Video: Sunny, pleasant weather ahead in New Hampshire",
                "source": "WMUR",
                "date": "9 hours ago",
                "snippet": "Meteorologist Hayley LaPoint says sunny, pleasant weather will continue.",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_EMefb8cksaE3OtXNS2uH4ft6XNN2Qdnsr-bWFTCwK3sF4bE6u-lisU&usqp=CAI&s"
            }
        ],
        "pagination": {
            "current": 1,
            "next": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=10&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8NMDegQIARBK",
            "other_pages": {
                "2": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=10&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARA4",
                "3": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=20&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARA6",
                "4": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=30&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARA8",
                "5": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=40&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARA-",
                "6": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=50&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARBA",
                "7": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=60&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARBC",
                "8": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=70&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARBE",
                "9": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=80&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARBG",
                "10": "https://www.google.com/search?q=weather&tbm=nws&ei=066EYtKrHJfZytMPiLW2mAs&start=90&sa=N&ved=2ahUKEwiS4Yil0ej3AhWXrHIEHYiaDbMQ8tMDegQIARBI"
            }
        },
        "serpapi_pagination": {
            "current": 1,
            "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=10&tbm=nws",
            "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=10&tbm=nws",
            "other_pages": {
                "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=10&tbm=nws",
                "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=20&tbm=nws",
                "4": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=30&tbm=nws",
                "5": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=40&tbm=nws",
                "6": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=50&tbm=nws",
                "7": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=60&tbm=nws",
                "8": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=70&tbm=nws",
                "9": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=80&tbm=nws",
                "10": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&q=weather&start=90&tbm=nws"
            }
        }
    })

    // axios.get(`https://serpapi.com/search.json?engine=google&q=weather${}&tbm=nws&api_key=64a4be6709e78fac312237b98527e210e53de2234545a4cc457b9d35d3407295`)
    //     .then(results => {
    //         console.log("in res")
    //         const weather = results.data
    //         res.json(results.data)
    //         console.log(results)
    //         console.log("in res end")
    //     })
    //     .catch(err => {
    //         console.log('in err')
    //         res.json(err)
    //     })
}

module.exports.weatherSearch = (req, res) => {
    const location = req.params.location
    console.log(`In Weather Search...location: ${location}`)


    console.log("")

        // axios.get(`https://serpapi.com/search.json?engine=google&q=weather ${location}&tbm=nws&num=100&api_key=64a4be6709e78fac312237b98527e210e53de2234545a4cc457b9d35d3407295`)
        //     .then(results => {
        //             console.log("in res")
        //             const weather = results.data
        //         res.json(results.data)
        //         console.log(results)
        //         console.log("in res end")
        //     })
        //     .catch(err => {
        //                 console.log('in err')
        //                 res.json(err)
        //             })
            
            console.log("")
            
            res.json({
                "search_metadata": {
                    "id": "6286644210d74498eebe9f44",
                    "status": "Success",
                    "json_endpoint": "https://serpapi.com/searches/7ec730c033d9a38a/6286644210d74498eebe9f44.json",
                    "created_at": "2022-05-19 15:37:38 UTC",
                    "processed_at": "2022-05-19 15:37:38 UTC",
                    "google_url": "https://www.google.com/search?q=weather+Tokyo%2C+Japan&oq=weather+Tokyo%2C+Japan&num=100&tbm=nws&sourceid=chrome&ie=UTF-8",
                    "raw_html_file": "https://serpapi.com/searches/7ec730c033d9a38a/6286644210d74498eebe9f44.html",
                    "total_time_taken": 4.59
                },
                "search_parameters": {
                    "engine": "google",
                    "q": "weather Tokyo, Japan",
                    "google_domain": "google.com",
                    "num": "100",
                    "device": "desktop",
                    "tbm": "nws"
                },
                "search_information": {
                    "news_results_state": "Results for exact spelling",
                    "query_displayed": "weather Tokyo, Japan",
                    "total_results": 4250000,
                    "time_taken_displayed": 0.49
                },
                "news_results": [
                    {
                        "position": 1,
                        "link": "https://www.sfchronicle.com/weather/article/Global-Forecast-Fahrenheit-17183768.php",
                        "title": "Global Forecast-Fahrenheit",
                        "source": "San Francisco Chronicle",
                        "date": "3 hours ago",
                        "snippet": "City/Town, Country;Thursday's Weather Condition;Thursday's High Temp ... \nTokyo, Japan;Inc. clouds;76;63;Mostly cloudy;79;65;SSE;9;64%;32%;5.",
                        "thumbnail": "https://serpapi.com/searches/6286644210d74498eebe9f44/images/aa56a9a63d251821a0254ac6e54754c77c098d9d27c450f0c0ff48374048a18f.png"
                    },
                    {
                        "position": 2,
                        "link": "https://www.npr.org/2022/04/23/1094500394/japan-missing-tour-boat-26-people",
                        "title": "10 of 26 people from sunken Japan tour boat confirmed dead",
                        "source": "NPR",
                        "date": "4 weeks ago",
                        "snippet": "TOKYO — Japan's guard says 10 of the 26 people aboard a tour boat that ... \ndecision to conduct the tour despite rough weather on Saturday.",
                        "thumbnail": "https://serpapi.com/searches/6286644210d74498eebe9f44/images/aa56a9a63d25182147156d9338af67320f51e8e0445692dd37115214ac43843d.jpeg"
                    },
                    {
                        "position": 3,
                        "link": "https://www.nbcchicago.com/news/national-international/biden-departing-week-in-asia-focus-on-trade-china/2836526/",
                        "title": "Biden Has an Eye on China as He Heads to South Korea, Japan",
                        "source": "NBC Chicago",
                        "date": "4 hours ago",
                        "snippet": "While in Japan, Biden will also meet with fellow leaders of the ... and \nTokyo against Beijing during a video call with Japanese Foreign...",
                        "thumbnail": "https://serpapi.com/searches/6286644210d74498eebe9f44/images/aa56a9a63d25182105b3cb93e4bfa3416732b3552b0bf7a95c53c0c92dbefb52.jpeg"
                    },
                    {
                        "position": 4,
                        "link": "https://www.sfchronicle.com/weather/article/Global-Forecast-Celsius-17138580.php",
                        "title": "Global Forecast-Celsius",
                        "source": "San Francisco Chronicle",
                        "date": "3 weeks ago",
                        "snippet": "City/Town, Country;Saturday's Weather Condition;Saturday's High Temp ... \nTokyo, Japan;Breezy this morning;17;12;A shower or two;19;11;N;15...",
                        "thumbnail": "https://serpapi.com/searches/6286644210d74498eebe9f44/images/aa56a9a63d251821ee4774f76ba33794eebfbeee54cc936a02f1232adf95f285.png"
                    },
                    {
                        "position": 5,
                        "link": "https://simpleflying.com/ana-boeing-787-dallas-fort-worth/",
                        "title": "Unexpected Visitor: Weather Makes ANA 787 Divert To Dallas Fort-Worth",
                        "source": "Simple Flying",
                        "date": "3 weeks ago",
                        "snippet": "This affected the plane's return flight to Tokyo out of Houston, ... the \nnight at DFW due to weather diversions in other parts of the state.",
                        "thumbnail": "https://serpapi.com/searches/6286644210d74498eebe9f44/images/aa56a9a63d2518214c896883edc5ae49ec88c4f68a673d4669da9ba20d7e4187.jpeg"
                    },
                    {
                        "position": 6,
                        "link": "https://www.wishtv.com/news/okinawa-marks-50-years-of-end-to-us-rule-amid-protests/",
                        "title": "Okinawa marks 50 years of end to US rule amid protests",
                        "source": "WISH-TV",
                        "date": "4 days ago",
                        "snippet": "TOKYO (AP) — Okinawa Governor Denny Tamaki on Sunday urged Japan's central \ngovernment to do more to reduce the U.S. military presence in the...",
                        "thumbnail": "https://serpapi.com/searches/6286644210d74498eebe9f44/images/aa56a9a63d25182195d3c2f6b87fc449e859a0605c060795ed2cbc503b027e2b.jpeg"
                    },
                    {
                        "position": 7,
                        "link": "https://ktvz.com/news/2022/04/27/brazil-to-face-japan-in-tokyo-in-pre-world-cup-friendly/",
                        "title": "Brazil to face Japan in Tokyo in pre-World Cup friendly",
                        "source": "KTVZ",
                        "date": "3 weeks ago",
                        "snippet": "The Brazilian soccer confederation says the match will take place on June 6 \nin Tokyo. Brazil is scheduled to play a friendly against rival...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqAXPH8DXmGKTpkhqsDp5AdcTtcfKCV38KIXj3jAMRNDGNQVitKGJSNk&usqp=CAI&s"
                    },
                    {
                        "position": 8,
                        "link": "https://www.usnews.com/news/business/articles/2022-03-22/power-outage-alert-in-japan-amid-quake-damage-cold-weather",
                        "title": "Power Outage Alert in Japan Amid Quake Damage, Cold Weather",
                        "source": "USNews.com",
                        "date": "Mar 22, 2022",
                        "snippet": "Power Outage Alert in Japan Amid Quake Damage, Cold Weather. Japan's \ngovernment is alerting people in the Tokyo region they may face blackouts...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFIBcO7gmVGxvjy0RaX8gHgwdwe6BYyuigYhWEXohC6N6kYO1l_nhODs&usqp=CAI&s"
                    },
                    {
                        "position": 9,
                        "link": "https://www.cnn.com/2022/04/29/asia/china-beijing-covid-notebook-selina-wang-intl-hnk-dst/index.html",
                        "title": "Flying into Beijing is tougher than ever as China ramps up its zero-Covid measures",
                        "source": "CNN",
                        "date": "3 weeks ago",
                        "snippet": "But just as the government is tightening controls in the city -- testing \n... Flights from Tokyo to Beijing this week were impossible to find...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4--RTKzy2lh1eq4xHEPDspmCL3mvDsGf0JJsaLhk35LkHwWkN47YoqI&usqp=CAI&s"
                    },
                    {
                        "position": 10,
                        "link": "https://www.cnn.com/2021/07/24/sport/tokyo-2020-olympics-heat-humidity-spt-intl/index.html",
                        "title": "Novak Djokovic says current weather conditions in Tokyo are 'brutal'",
                        "source": "CNN",
                        "date": "Jul 24, 2021",
                        "snippet": "CNN's weather team said temperatures on Saturday climbed to nearly 34°C \n(93°F) across the greater Tokyo region, with \"oppressive\" humidity...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDCydMA2S2qKs6XUu80vvDYJh7jtZo4T3vfu4HGrfolTc8e3-5PH44uY&usqp=CAI&s"
                    },
                    {
                        "position": 11,
                        "link": "https://www.wgrz.com/article/weather/heathers-weather-whys-what-is-weather-like-in-tokyo-summer-olympics/71-f0570cc8-53a2-4be1-be80-87ffa1c28e7a",
                        "title": "Heather’s Weather Whys: What’s the weather like in Tokyo for Summer Olympics?",
                        "source": "WGRZ",
                        "date": "Jul 21, 2021",
                        "snippet": "Heather's Weather Whys: What's the weather like in Tokyo for Summer \nOlympics? The 2020 summer Olympic Games begin on Friday and it could very...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhZPqlJslmkgQqWXn9WREmX72Ll71K3tLV5fUxoN-C6Vkog_c7a1ziTU&usqp=CAI&s"
                    },
                    {
                        "position": 12,
                        "link": "https://www.cnn.com/2021/07/30/sport/tokyo-2020-heat-weather-spt-intl/index.html",
                        "title": "Heat and humidity make 'Tokyo Summer the worst in the history of Olympics'",
                        "source": "CNN",
                        "date": "Jul 30, 2021",
                        "snippet": "Weather in Tokyo has been very hot and humid. Charlie Riedel/AP. The future \nof the summer games. In 1964, the Tokyo Summer Olympics were held in...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjX16YMrN1qxO9Ve5Sc1i7vaL-Sv2-pct1xiQ2BmYLbyKloDjKTa-4R0I&usqp=CAI&s"
                    },
                    {
                        "position": 13,
                        "link": "https://sports.yahoo.com/japan-lied-about-the-weather-and-now-olympians-are-paying-the-price-010612634.html",
                        "title": "Japan's Olympic organizers lied about its weather, and now athletes are paying the price",
                        "source": "Yahoo! Sports",
                        "date": "Jul 25, 2021",
                        "snippet": "This despite the Olympics moving the start time to 6:30 a.m. in an effort \nto beat the heat that, as these Tokyo Games have proven,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ROqu8o2kN0tzv54C3rDApZU_ukFh0HI-bbcZqTG31Pxay41svScvHlk&usqp=CAI&s"
                    },
                    {
                        "position": 14,
                        "link": "https://weather.com/en-IN/india/news/news/2021-07-04-several-remain-missing-as-heavy-rain-landslides-disrupt-life-in-japans",
                        "title": "Several Remain Missing as Heavy Rain, Landslides Disrupt ...",
                        "source": "The Weather Channel",
                        "date": "Jul 4, 2021",
                        "snippet": "... as Heavy Rain, Landslides Disrupt Life Around Japan's Tokyo Region ... \nhouses southwest of Tokyo Saturday amid days of heavy rainfall.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsXJaCY5pUcv5-yZVZe6iDIuVLJq3I93900jttj9ntM3jmwYFDjY4daQ&usqp=CAI&s"
                    },
                    {
                        "position": 15,
                        "link": "https://www.washingtonpost.com/weather/2021/08/04/tokyo-tropical-storm-heat-olympics/",
                        "title": "Tokyo faces stifling heat and then a tropical storm as Olympics ...",
                        "source": "The Washington Post",
                        "date": "Aug 4, 2021",
                        "snippet": "Athletes and others involved in the Summer Olympics in Tokyo face punishing \n... Weather also plagued the Olympics opening week when Tropical...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WS__7BVJVKr-UKyviDkQ8v0zbnKZL8_-uMnthTq2TyL8KeyN2VWJjaY&usqp=CAI&s"
                    },
                    {
                        "position": 16,
                        "link": "https://www.si.com/olympics/2021/08/05/tokyo-olympics-heat-humidity-open-water-swimming-temperatures",
                        "title": "Stifling Tokyo Heat, Humidity Create Even Tougher Conditions For Athletes",
                        "source": "Sports Illustrated",
                        "date": "Aug 5, 2021",
                        "snippet": "How hot was the water in Tokyo Bay? Official temperature at the start for \nthe women was 29.3 degrees celsius, which is 84.74 degrees...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGjfCvD3AByqi-8eylbLYUkLoGwkeEMhyi3NcKQQ&usqp=CAI&s"
                    },
                    {
                        "position": 17,
                        "link": "https://www.latimes.com/sports/olympics/story/2021-08-01/tokyo-olympics-heat-hot-weather-athletes-competition",
                        "title": "Olympics: Tokyo heat weather makes Games hard for athletes",
                        "source": "Los Angeles Times",
                        "date": "Aug 1, 2021",
                        "snippet": "Temperatures in the high 80s with humidity around 76% is common to Tokyo at \nthis time of year. As recently as the summer of 2019, dozens of...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3Hxpr4ghvjq2BCRmLaFx8RFQR1lEV2KvcC4tVixj_gY5FgcdOdD0xm0&usqp=CAI&s"
                    },
                    {
                        "position": 18,
                        "link": "https://www.nytimes.com/2021/07/28/sports/olympics/olympics-tokyo-heat-sprinters.html",
                        "title": "Why the Tokyo Heat May Help Olympic Sprinters",
                        "source": "The New York Times",
                        "date": "Aug 7, 2021",
                        "snippet": "To Sprinters, Hot Weather in Tokyo Feels Just Right. Tokyo was deemed to be \ntoo hot for marathoners, but there's evidence that the heat helps...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLTmqNWpT3ECMwmx5Hyv8FfM_cezGMdhTR56m_T7vSm_OS_uny1QqxY8&usqp=CAI&s"
                    },
                    {
                        "position": 19,
                        "link": "https://weather.com/news/news/2021-12-08-strangest-weather-2021",
                        "title": "The 21 Strangest Things About 2021's Weather | The Weather ...",
                        "source": "The Weather Channel",
                        "date": "Jan 7, 2022",
                        "snippet": "A father in a mask holds his infant child and enjoys the cherry blossom \nviewing at Ueno Park in Tokyo on March 27, 2021. (Yusuke Harada/NurPhoto...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnEHU_YPqJqUdxR85ngiQ4geMc3JVK3A5gGYLqeclz4rUo6QTI4nto7g&usqp=CAI&s"
                    },
                    {
                        "position": 20,
                        "link": "https://www.washingtonpost.com/weather/2021/08/06/tropical-storms-tokyo-mirinae-olympics/",
                        "title": "Two tropical storms could impact Tokyo in coming days",
                        "source": "The Washington Post",
                        "date": "Aug 6, 2021",
                        "snippet": "No weather advisories are up in Tokyo yet, but the Japanese Meteorological \nAgency is estimating a medium chance that alerts will be issued...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10ukmvZqKLZdHMsvDTRuR60Go4ZXChKv-ytuGmjHZhdCqcD_FY_pOAnQ&usqp=CAI&s"
                    },
                    {
                        "position": 21,
                        "link": "https://www.washingtonpost.com/weather/2022/03/16/japan-earthquake-tsunami/",
                        "title": "Japan hit by 7.3 magnitude earthquake, tsunami warning issued",
                        "source": "The Washington Post",
                        "date": "Mar 16, 2022",
                        "snippet": "The U.S. National Weather Service reported no expected tsunami for the West \nCoast ... with levels around a 4 in the Tokyo metropolitan area.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzRADliMaYPWOx_mIx_I-KtVzZja0KQmr3rcoLfV4xb3-ZZYXTbNW1UI&usqp=CAI&s"
                    },
                    {
                        "position": 22,
                        "link": "https://www.cnn.com/2021/07/19/weather/olympics-outlook-weather-wxn/index.html",
                        "title": "Olympic athletes face high heat and a possible typhoon this week",
                        "source": "CNN",
                        "date": "Jul 19, 2021",
                        "snippet": "CNN weather is launching a weekly column, publishing Mondays with the ... \nWhile the average high temperature in Tokyo during the Olympics is...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdit6svR3q2N778_4denqYS08bCapV6fg005a1SeriznQk0i9CdvUJsbM&usqp=CAI&s"
                    },
                    {
                        "position": 23,
                        "link": "https://www.washingtonpost.com/weather/2021/07/26/tropical-storm-nepartak-japan-olympics/",
                        "title": "Tropical Storm Nepartak is swirling toward Japan, skirting the ...",
                        "source": "The Washington Post",
                        "date": "Jul 26, 2021",
                        "snippet": "No alerts are currently in effect for Tokyo, although a few brief ... The \nJapanese weather satellite Himawari-8, which peers downward at the...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YpKU_g3yt9uPbO-YtFLyQBiHl-Xz5QaBa1g7ks-XaDrpv8A17t05al4&usqp=CAI&s"
                    },
                    {
                        "position": 24,
                        "link": "https://www.aljazeera.com/news/2021/7/21/olympics-face-heat-from-broiling-tokyo-summer",
                        "title": "Olympics face heat from broiling Tokyo summer",
                        "source": "Al Jazeera",
                        "date": "Jul 21, 2021",
                        "snippet": "Tokyo is notorious for hot and humid weather in July and August raising \nconcerns about the risk of heat-related illnesses. ... Tokyo, Japan – As...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngu-MZF96yiB334Xhrkv4ml5D9aCxPqxF_tQ9GT9mRplNUHsgptVWhCI&usqp=CAI&s"
                    },
                    {
                        "position": 25,
                        "link": "https://phys.org/news/2022-01-rare-tokyo-blankets-shrines-cancels.html",
                        "title": "Rare snow in Tokyo blankets shrines, cancels flights",
                        "source": "Phys.org",
                        "date": "Jan 6, 2022",
                        "snippet": "The weather agency issued Tokyo's first heavy snow warning in four years. \nSnow blanketed Tokyo on Thursday as hours of flurries forced the...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbK_Md2fieKr9L-KFdtKs0mE7MbEMquikuFKCX4AsGgs4DIFZd0eSooxQ&usqp=CAI&s"
                    },
                    {
                        "position": 26,
                        "link": "https://www.golfmonthly.com/olympic-golf/olympic-golf-weather-forecast-240447",
                        "title": "Olympic Golf Weather Forecast - What Is The Weather In Tokyo?",
                        "source": "Golf Monthly",
                        "date": "Jul 23, 2021",
                        "snippet": "Temperatures will be about 31°C (88°F) but will feel closer to 37°C (99°F) \nthanks to the humidity. Wind will be light at 9km/h but...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vCQ5xbO4fRcwLh5Di8dcbXELjcMdnsh9I-xun4s6zkR3HxNNmTkRIK0&usqp=CAI&s"
                    },
                    {
                        "position": 27,
                        "link": "https://www.washingtonpost.com/weather/2021/07/23/weather-olympics-japan-sports-heat/",
                        "title": "What the weather could mean for the Olympics in Japan",
                        "source": "The Washington Post",
                        "date": "Jul 23, 2021",
                        "snippet": "Temperatures in Tokyo during the summertime typically hover in the upper \n80s, with high humidity teaming up with the heat to make conditions all...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG22gATFRjPiNp3vGfnUffoYwVmjel7nioXANsHLBhv2m8sicmZqMNlXY&usqp=CAI&s"
                    },
                    {
                        "position": 28,
                        "link": "https://www.washingtonpost.com/weather/2022/02/25/japan-snow-record-depth-tsunan-hokkaido/",
                        "title": "Japan breaks snowfall records with 15 feet of snow",
                        "source": "The Washington Post",
                        "date": "Feb 25, 2022",
                        "snippet": "Round after round of intense wintry weather has caused numerous ... country \nto the northwest of Tokyo, with some peaks up to 10,000 feet.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CYVhldQm494HL7JpEhik8qdc7V57FOdmHTI2LmMrTVMD5Q5Co71Nj-0&usqp=CAI&s"
                    },
                    {
                        "position": 29,
                        "link": "https://www.reuters.com/lifestyle/sports/athletics-tokyo-dishes-out-punishing-heat-dayside-competitors-2021-08-01/",
                        "title": "Athletes battle Tokyo summer as staff suffer heat illness",
                        "source": "Reuters",
                        "date": "Aug 1, 2021",
                        "snippet": "8, coincide with the year's hottest weather in Tokyo, where the temperature \ncan top 35 degree Celsius (95°F). The 1964 Tokyo Summer Olympics...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLBSeazhMcVcBQn7-DaFk1DmQBocs63asBqdLJIvswr3h7C7FRrEOupA&usqp=CAI&s"
                    },
                    {
                        "position": 30,
                        "link": "https://www.cnn.com/world/live-news/tokyo-2020-olympics-07-24-21-spt/h_3436d86063a1504478e51ccc10cfebec",
                        "title": "July 24 Tokyo 2020 Olympics news and results",
                        "source": "CNN",
                        "date": "Jul 24, 2020",
                        "snippet": "Novak Djokovic says current weather conditions in Tokyo are \"brutal\" ... \nHosts Japan win first medal at 2020 Tokyo Olympics.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c217Q27sAUa_TsqLVh6j2-OD2lCdiFEz0_pxodLAxuAd5qQnxcp1CDk&usqp=CAI&s"
                    },
                    {
                        "position": 31,
                        "link": "https://www.timeout.com/tokyo/news/tokyo-could-be-snowing-again-this-thursday-february-10-020822",
                        "title": "Tokyo could be snowing again this Thursday February 10",
                        "source": "Time Out",
                        "date": "Feb 8, 2022",
                        "snippet": "Weather forecasts predict that the Kanto region could see up to 10cm ... \nSnow is expected in Tokyo sometime between Thursday February 10 and...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelV0Ct8uub3JvD3DdJUwYCcXwZYrPFDTi8_SIhSzlk1sVJaYBN57rd6M&usqp=CAI&s"
                    },
                    {
                        "position": 32,
                        "link": "https://time.com/6085237/olympics-extreme-heat/",
                        "title": "Tokyo Olympics: How Heat Takes Brutal Toll on Athletes | Time",
                        "source": "TIME",
                        "date": "Jul 29, 2021",
                        "snippet": "Everyone Knew Tokyo Would Be One of the Hottest Olympics Ever. ... She \nprepared for the weather during training by biking in a heat chamber...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNYx7DJhz1RpKhB7YHykO_8KY2wRgQ7CtXs39dYCzRIqixTpA1bceB1o&usqp=CAI&s"
                    },
                    {
                        "position": 33,
                        "link": "https://www.reuters.com/business/environment/japan-weather-bureau-says-la-nina-phenomenon-now-effect-2021-11-10/",
                        "title": "Japan weather bureau says La Nina phenomenon now in effect",
                        "source": "Reuters",
                        "date": "Nov 9, 2021",
                        "snippet": "TOKYO, Nov 10 (Reuters) - Japan's weather bureau said on Wednesday that the \nLa Nina phenomenon appears to now be in effect and that there is...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9rQ9AAvkXw6zMcxoVvDe8bsxR8vgdKBVfDRzsZKW3kTbwqN3dPCCk8w&usqp=CAI&s"
                    },
                    {
                        "position": 34,
                        "link": "https://www.wcnc.com/article/weather/hotter-weather-for-the-olympics/275-bf807bcd-af3f-4a14-ae41-7acfd25ca774",
                        "title": "Hotter than normal weather greets the start of the Olympics in Tokyo",
                        "source": "WCNC",
                        "date": "Jul 21, 2021",
                        "snippet": "CHARLOTTE, N.C. — It's the start of the summer games in Tokyo, Japan this \nweekend and you would expect warm weather.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhdqp09gtnmS_gQuzd33CXELr8a3KgF-5hOcMXw6zll2quzcN1CpGKXc&usqp=CAI&s"
                    },
                    {
                        "position": 35,
                        "link": "https://www.cnn.com/2021/07/22/weather/typhoon-in-fa-fabian-japan-china-taiwan/index.html",
                        "title": "Weakening In-Fa to bring heavy rain to China as new storm could affect Tokyo Olympics",
                        "source": "CNN",
                        "date": "Jul 23, 2021",
                        "snippet": "Weakening In-Fa to bring heavy rain to China as new storm could affect \nTokyo Olympics. By Jackson Dill, CNN. Updated 7:16 PM ET, Fri July 23,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZr6BGjHCWsqmHeL6tOoCFD_P6DFXLqjY3qV14StXi2fX4AFMzKra_fc&usqp=CAI&s"
                    },
                    {
                        "position": 36,
                        "link": "https://www.cnn.com/2021/08/04/sport/heat-weather-tokyo-2020-olympics-spt-intl/index.html",
                        "title": "Damian Warner: Three-time Olympian says Tokyo 2020 is the 'hottest' Games' he's competed in",
                        "source": "CNN",
                        "date": "Aug 4, 2021",
                        "snippet": "And having to battle extreme heat at the same time has made competitions in \nTokyo even more challenging. According to the CNN Weather team,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtBd8gGsYAwEzXyvqXF_gAbcENBtwILaWroHe5VGGAclprtOMLm217hQ&usqp=CAI&s"
                    },
                    {
                        "position": 37,
                        "link": "https://www.kshb.com/weather/weather-blog-1st-olympics-weather-forecast-for-tokyo",
                        "title": "Weather Blog: 1st Olympics weather forecast for Tokyo",
                        "source": "KSHB",
                        "date": "Jun 7, 2021",
                        "snippet": "Here is the LRC forecast for the 2021 Tokyo Olympics, beginning with a \nbroad view of Japan. Olympics Mean High Temperature. Weather Forecast For...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56Esjn90JNs8oqB9gjm5Ux1qKo3YB8CXCKJYDljz6i7DYidPgH7eGatE&usqp=CAI&s"
                    },
                    {
                        "position": 38,
                        "link": "https://www.japantimes.co.jp/news/2021/12/31/national/snow-year-end-travel/",
                        "title": "Heavy snow snarls travel in Japan during year-end holidays",
                        "source": "The Japan Times",
                        "date": "Dec 31, 2021",
                        "snippet": "The Tokyo region is expected to avoid the worst of the storm, ... could see \nas much as 70 cm of snowfall, the weather agency said.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShm33rc8iW1s6ARLBdrVHXrfG9xwj9QwdF1-I4VdLH6JLeDNRCAb4L-H0&usqp=CAI&s"
                    },
                    {
                        "position": 39,
                        "link": "https://www.bbc.com/future/article/20210728-how-tokyo-is-cooling-down-for-the-olympics",
                        "title": "How to cool a city struggling with heatwaves",
                        "source": "BBC",
                        "date": "Jul 29, 2021",
                        "snippet": "Local weather service Weathernews has quantified the levels of shade, wind \nmovement, and hot zones in Tokyo in the lead up to the Games.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rCgvWLwf6SdTbHdrihlBJMFfvaEzcW9svLo1y6OtnD3V2l-lCcLaFRg&usqp=CAI&s"
                    },
                    {
                        "position": 40,
                        "link": "https://earthobservatory.nasa.gov/images/148616/heating-up-in-tokyo",
                        "title": "Heating Up in Tokyo",
                        "source": "NASA Earth Observatory",
                        "date": "Jul 26, 2021",
                        "snippet": "As the 2021 Olympic Games opened in late July, Tokyo was in the midst ... \nthe event was scheduled in October to avoid the hottest weather.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcsP469LnArBEqw_kOku7LGNg7uthxHxX1DKZEu-YYYgYNa6dOF6bicE&usqp=CAI&s"
                    },
                    {
                        "position": 41,
                        "link": "https://weather.com/news/news/2021-05-01-earthquake-northern-japan-tokyo-miyagi",
                        "title": "Strong Earthquake Off Northern Japan Shakes Tokyo; Minor ...",
                        "source": "The Weather Channel",
                        "date": "May 1, 2021",
                        "snippet": "A Meteorological Agency official warned that strong aftershocks could hit \nthe region, and upcoming bad weather could trigger landslides. Some...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBT00CDeHhh-Bwm0sIzoiX7ELeAtqsizYfy9Yybiwptp9nhX_I28hfvY&usqp=CAI&s"
                    },
                    {
                        "position": 42,
                        "link": "https://www.click2houston.com/weather/2021/07/23/typhoon-heading-toward-tokyo-olympics/",
                        "title": "Typhoon heading toward Tokyo Olympics?",
                        "source": "Click2Houston",
                        "date": "Jul 22, 2021",
                        "snippet": "In fact, that part of the world is monitored by the Joint Typhoon Warning \nCenter out of Japan along with the Japanese Meteorological Agency.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeq6i8nc9RFfhiWJizCWXE9JfF--H1MKHVCNlGlvzmypWVMoIU6GiRB5Y&usqp=CAI&s"
                    },
                    {
                        "position": 43,
                        "link": "https://www.reuters.com/world/asia-pacific/japan-sees-partial-blackout-after-first-ever-power-supply-warning-2022-03-22/",
                        "title": "Japan turns down the heat and dims the lights to avoid power ...",
                        "source": "Reuters",
                        "date": "Mar 22, 2022",
                        "snippet": "TOKYO, March 22 (Reuters) - Japanese turned off neon signs, ... and the \naddition of more solar power generation as the weather improved.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZVIGP8QwWSYV7HM9-j56Y4ICYCibESHBvHhPjFG8E-lBv1bzTw50Ds8&usqp=CAI&s"
                    },
                    {
                        "position": 44,
                        "link": "https://www.nature.com/articles/s41598-021-04242-3",
                        "title": "The impact of temperature on the transmissibility and ...",
                        "source": "Nature",
                        "date": "Dec 29, 2021",
                        "snippet": "... on the transmissibility and virulence of COVID-19 in Tokyo, Japan ... \nDaily weather data (mean temperature (°C), relative humidity (%)...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOfTjiDq6J_PXDy9RlLR2fqkQW1X8gkVd9l7QggEJZ1avFw9m1VwQ350&usqp=CAI&s"
                    },
                    {
                        "position": 45,
                        "link": "https://www.designboom.com/architecture/weather-house-n-o-t-architects-studio-tokyo-japan-06-30-2021/",
                        "title": "not architects studio's 'weather house' is an extension of ...",
                        "source": "Designboom",
                        "date": "Jun 30, 2021",
                        "snippet": "settled within a residential neighborhood in tokyo, the weather house by n \no t architects studio introduces a bright and verdant atmosphere.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ky52YhvO5nHKl0ezrf15YGXbrJpHXbURG5A0V4uWsUzupdMnlk4q3Kg&usqp=CAI&s"
                    },
                    {
                        "position": 46,
                        "link": "https://www.cnn.com/2021/07/17/weather/olympics-heat-forecast-climate/index.html",
                        "title": "Athletes could face the warmest Olympic Games in decades",
                        "source": "CNN",
                        "date": "Jul 17, 2021",
                        "snippet": "(CNN) With the Olympic Games opening ceremonies less than a week away, all \neyes will be on the weather forecast. Athletes try to train in...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdit6svR3q2N778_4denqYS08bCapV6fg005a1SeriznQk0i9CdvUJsbM&usqp=CAI&s"
                    },
                    {
                        "position": 47,
                        "link": "https://www.cnn.com/videos/world/2021/07/30/tokyo-olympics-athletes-heat-stroke-selina-wang-pkg-ctw-intl-ldn-vpx.cnn",
                        "title": "The 'hottest games ever': Summer heat threatens athletes",
                        "source": "CNN",
                        "date": "Jul 30, 2021",
                        "snippet": "As the Tokyo Olympic games continue, athletes are facing one challenge \nthat's beyond the control of their coaches: extreme heat.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uNRDA9JxzK-flWiM1dV2wEP2l-dvjc0QN7Cr54rA3vlZtFkaPxLIufQ&usqp=CAI&s"
                    },
                    {
                        "position": 48,
                        "link": "https://sports.yahoo.com/heat-could-make-tokyo-olympics-the-worst-in-history-161343579.html",
                        "title": "Heat could make Tokyo Olympics 'the worst in history'",
                        "source": "Yahoo! Sports",
                        "date": "Jul 19, 2021",
                        "snippet": "“It's going to be uncomfortable,” Carl Parker, a storm specialist for the \nWeather Channel, told Yahoo Sports. Parker compared Tokyo's...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopoVg-Bi4g1ACz1xzDFNnKbeKyBrzkBHtiVYyN3PanR1Yo1Ps_GnnAXQ&usqp=CAI&s"
                    },
                    {
                        "position": 49,
                        "link": "https://www.dezeen.com/2021/07/31/not-architects-studio-weather-house-tokyo/",
                        "title": "Not Architects Studio encloses terraces with metal mesh at ...",
                        "source": "Dezeen",
                        "date": "Jul 31, 2021",
                        "snippet": "Screens made from metal mesh wrap around two sides of this house in Tokyo, \nJapan. Weather House was designed by Not Architects Studio for a...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_8gfnBB-BSJszIvhEc9BTUo8-akziC4SNtkddA2Nwhf7wFV6E5mXXnA&usqp=CAI&s"
                    },
                    {
                        "position": 50,
                        "link": "https://newsinfo.inquirer.net/1581132/summerlike-weather-seen-across-japan",
                        "title": "Summerlike weather seen across Japan",
                        "source": "Inquirer.net",
                        "date": "1 month ago",
                        "snippet": "As of 2:20 p.m., the warmest spot in Japan was Akiota, Hiroshima \nPrefecture, with a recorded temperature of 29 C. This was followed by \n28.7...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUZw5oXgko-R4KcOFet98ltZUXBkYmaQMDRoJIVzLteHpy1VSOdEP6mI&usqp=CAI&s"
                    },
                    {
                        "position": 51,
                        "link": "https://www.nippon.com/en/japan-data/h01261/",
                        "title": "Japan's 2022 Pollen Allergy Season | Nippon.com",
                        "source": "nippon.com",
                        "date": "Feb 25, 2022",
                        "snippet": "Japanese weather forecasting company Weathernews announced that Tokyo and \n13 other prefectures, including all those in Kyūshū,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVf_zXpXN4YK0jHK9Q61kCKDgvR17XUCvQPZQ7AI7fOIwXI9Hd50Fhas&usqp=CAI&s"
                    },
                    {
                        "position": 52,
                        "link": "https://www.bbc.com/news/world-asia-60770100",
                        "title": "Earthquake: Two dead after Japan hit by tremor",
                        "source": "BBC",
                        "date": "Mar 17, 2022",
                        "snippet": "A powerful earthquake that hit north-east Japan left at least two people \ndead and ... Buildings in Tokyo shook for more than two minutes.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTO-as1EitFCrzqiwmkonxnhSSGo8CNrJo49FF8miTR4DrKh3Ri05k3A&usqp=CAI&s"
                    },
                    {
                        "position": 53,
                        "link": "https://www.bloomberg.com/news/articles/2021-07-28/tokyo-s-summer-heat-hits-olympics-as-athletes-faint-struggle",
                        "title": "Olympic Athletes Struggle With Tokyo's Sweltering Heat",
                        "source": "Bloomberg.com",
                        "date": "Jul 28, 2021",
                        "snippet": "The weather situation during the current Olympics is far from the \nexperience during the 1964 summer games in Tokyo, when temperatures were...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4HC1xsTM_ezqtSqQXHxUlpllVafJ5HEwYBXTSZM_b28lV22gujA05Pg&usqp=CAI&s"
                    },
                    {
                        "position": 54,
                        "link": "https://www.forbes.com/sites/roberthart/2021/07/20/as-record-heat-threatens-tokyo-olympics-heres-what-climate-change-means-for-future-sporting-events/",
                        "title": "As Record Heat Threatens Tokyo Olympics, Here's What Climate Change Means For Future Sporting Events",
                        "source": "Forbes",
                        "date": "Jul 20, 2021",
                        "snippet": "In addition to the threat of Covid-19, athletes taking part in the Tokyo \n... into how outdoor sports events can be held in hot weather,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiS2wEywNI2lUpllnAXF5bs9-d4BpMJdja11lHCoaK5acuTlXfk8O2cvk&usqp=CAI&s"
                    },
                    {
                        "position": 55,
                        "link": "https://www.reuters.com/lifestyle/sports/surfing-tokyo-eyes-typhoon-forecast-surfers-say-bring-it-2021-07-23/",
                        "title": "Surfing-Tokyo eyes typhoon forecast, but surfers say bring it on",
                        "source": "Reuters",
                        "date": "Jul 23, 2021",
                        "snippet": "TOKYO, July 23 (Reuters) - Japanese residents may be worried about ... held \nduring typhoon season and the weather is a major talking point,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXH6n3-U54kdUoAW4sFEAWJmEecyuv0bnjJU5fipDI3noVqmVazzSehLE&usqp=CAI&s"
                    },
                    {
                        "position": 56,
                        "link": "https://blog.playstation.com/2022/03/16/the-real-life-superstitions-and-japanese-folklore-that-inspired-ghostwire-tokyos-supernatural-inhabitants/",
                        "title": "The real-life superstitions and Japanese folklore that inspired Ghostwire: Tokyo’s supernatural inhabitants",
                        "source": "PlayStation.Blog",
                        "date": "Mar 16, 2022",
                        "snippet": "In Ghostwire: Tokyo, you awake amidst the mass disappearance of nearly all \n... commonly crafted as adorable charms wishing for good weather.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEMyZPVgmRUZDw8TG3SNElN2rDNBuIC7LtBMf6wyGvlqeGGlcL0sfCx0&usqp=CAI&s"
                    },
                    {
                        "position": 57,
                        "link": "https://weather.com/news/weather/news/2018-01-23-tokyo-heaviest-snow-in-four-years-sea-effect-snow-japan",
                        "title": "After Tokyo's Heaviest Snow in Four Years and Coldest ...",
                        "source": "The Weather Channel",
                        "date": "Jan 23, 2018",
                        "snippet": "This weather pattern also allowed Tokyo to experience its coldest \ntemperature in 48 years earlier this week. An area of low pressure \ntracked...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuFm3fzoaPbTopVtvWT7fidBlwsDxOzokRRy_ecJrxLaSRNGZ4H9mpco&usqp=CAI&s"
                    },
                    {
                        "position": 58,
                        "link": "https://english.kyodonews.net/news/2022/03/b5ee82bb103e-urgent-large-eruption-occurs-in-papua-new-guinea-japan-weather-agency.html",
                        "title": "Large eruption occurs in Papua New Guinea; no tsunami in ...",
                        "source": "Kyodo News",
                        "date": "Mar 9, 2022",
                        "snippet": "The eruption on Manam in the Pacific island nation occurred at around 6:50 \np.m. Tokyo time, the Japan Meteorological Agency said, adding that a...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJcZexYV6_YIk6PAxPOiFCZxRITJlUYwLlycf08tqHvyA4bnYn3iXsOU&usqp=CAI&s"
                    },
                    {
                        "position": 59,
                        "link": "https://www.ny1.com/nyc/all-boroughs/entertainment/2022/04/07/ansel-elgort-and-ken-watanabe-star-in-yakuza-drama--tokyo-vice-",
                        "title": "Ansel Elgort and Ken Watanabe star in \"Tokyo Vice\"",
                        "source": "NY1",
                        "date": "1 month ago",
                        "snippet": "The new series “Tokyo Vice” takes viewers back to 1990s Japan, when the \nYakuza, Japan's mob, ruled Tokyo's red-light district.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD253YT6DwCsbCbH86Vwx_oqhH-MZBzg7MJapWJ1vBPgcrXkxT6xBkf40&usqp=CAI&s"
                    },
                    {
                        "position": 60,
                        "link": "https://www.utoronto.ca/news/hot-seat-u-t-expert-tokyo-weather-and-how-athletes-can-beat-heat",
                        "title": "In the hot seat: U of T expert on Tokyo's weather and how ...",
                        "source": "University of Toronto",
                        "date": "Jul 29, 2021",
                        "snippet": "... spoke to U of T's Jelena Damjanovic about the temperatures in Tokyo and \nwhat athletes can do to prepare for the heat.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJA0SZlvHtVKIuba2xno_pNwTsLE9hKwybd2VEtpe2QFek4nrXllmVyc&usqp=CAI&s"
                    },
                    {
                        "position": 61,
                        "link": "https://www.cnn.com/videos/weather/2021/08/04/tropical-storm-china-japan-tokyo-olympics.cnn",
                        "title": "Pair of tropical storms to impact China and Japan, including Tokyo",
                        "source": "CNN",
                        "date": "Aug 4, 2021",
                        "snippet": "... will bring flooding and potential landslides to Southeast China, while \nanother storm will bring rain and wind to Tokyo over the weekend.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwO4bUqROdTVkeYawbyOlIM6lcyGYRJOrpnfAq4fPIefZbIHdlUJi3FjV6&usqp=CAI&s"
                    },
                    {
                        "position": 62,
                        "link": "https://www.stripes.com/theaters/asia_pacific/2022-02-09/tokyo-snowstorm-us-military-camp-zama-school-closures-4870936.html",
                        "title": "Snowstorm forecast for Tokyo area shutters many Defense ...",
                        "source": "Stars and Stripes",
                        "date": "Feb 9, 2022",
                        "snippet": "Weather forecasters predicted between 2 and 4 inches of snow for Thursday, \naccording to a post Wednesday on U.S. Army Garrison Japan's...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVI5CCYcM76MZB4MUBRpNh_AGuYzEaNcFC07dkwooWu8rRn_IPVzo9l-Y&usqp=CAI&s"
                    },
                    {
                        "position": 63,
                        "link": "https://www.cnn.com/videos/weather/2021/08/06/tokyo-japan-tropical-storm-mirinae-lupit.cnn",
                        "title": "Tropical Storm Mirinae to brush Tokyo this weekend",
                        "source": "CNN",
                        "date": "Aug 6, 2021",
                        "snippet": "Tropical Storm Mirinae will pass just offshore of Tokyo this weekend, ... \nwill follow closely behind it, impacting much of Japan on Monday.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnSrI17Iiqsd408j36PotG_V0Nizi90HLWxojEG4ijQkWSy8Q7hLP6tA&usqp=CAI&s"
                    },
                    {
                        "position": 64,
                        "link": "https://www.aljazeera.com/news/2021/8/5/extreme-temperatures-on-the-rise-in-tokyo-beijing-seoul-report",
                        "title": "Greenpeace warns of ‘dangerous temperatures’ for Tokyo, Beijing",
                        "source": "Al Jazeera",
                        "date": "Aug 5, 2021",
                        "snippet": "Study shows hot weather is starting earlier and that more frequent heat \nwaves are likely. The Greenpeace study found that in Tokyo, the number...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_iJFzOxsbyOqpHg4PzhRQsJrbNRj2fvTaTDvPhscX7zuxdHcQYdymhI&usqp=CAI&s"
                    },
                    {
                        "position": 65,
                        "link": "https://weather.com/storms/hurricane/news/2019-10-09-super-typhoon-hagibis-japan-tokyo-forecast",
                        "title": "Typhoon Hagibis Struck Japan After Rapidly Intensifying Over ...",
                        "source": "The Weather Channel",
                        "date": "Oct 12, 2019",
                        "snippet": "Torrential rainfall, damaging winds and storm surge flooding hammered \nJapan. This was the second significant typhoon strike in Tokyo in just...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsc7S3lF8szRO31mO2_Kkoza-sNmz8VP20af6TuYpDrUDwYcU2M501Qc&usqp=CAI&s"
                    },
                    {
                        "position": 66,
                        "link": "https://english.kyodonews.net/news/2022/01/cf82db4e9f53-urgent-japans-pacific-coast-hit-by-tsunami-after-tonga-eruption.html",
                        "title": "Japan sees tsunami but no major damage after Tonga ...",
                        "source": "Kyodo News",
                        "date": "Jan 16, 2022",
                        "snippet": "Japan's weather agency issued tsunami warnings and advisories in the early \nhours for the Pacific coast from Hokkaido to Okinawa, but these...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSx_fk3SEenEGVjIQJUORv2GANyIxoJrUEBPPnpJLIb14e9GXAs1ZmeA&usqp=CAI&s"
                    },
                    {
                        "position": 67,
                        "link": "https://www.newsweek.com/tokyo-2020-olympics-controversies-covid-gwen-berry-swim-caps-doping-weather-1612115",
                        "title": "Tokyo 2020 Olympics Controversies: From Covid to Gwen Berry, Swim Caps, Doping and Weather",
                        "source": "Newsweek",
                        "date": "Jul 22, 2021",
                        "snippet": "Tokyo's weather. Aside from stringent coronavirus protocols, athletes in \nTokyo will also have to contend with the Japanese's capital oppressive...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nHRbmbxcnNjiBR--cWVPuVkn_GHq8gPNR2O2E8nLRoptRUqmRDh_zOQ&usqp=CAI&s"
                    },
                    {
                        "position": 68,
                        "link": "https://www.wsj.com/articles/tokyo-olympics-heat-11627186166",
                        "title": "Sweltering Conditions Are a Tough Opponent at the Tokyo Olympics",
                        "source": "Wall Street Journal",
                        "date": "Jul 25, 2021",
                        "snippet": "Tokyo's sometimes inhospitable summer weather—temperatures here have ... a \nconcern from the moment the city was awarded these Games in 2013.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn87gTFrAI71r98IlGRIZDJfhR7KWu-nGDR5ncpjY&usqp=CAI&s"
                    },
                    {
                        "position": 69,
                        "link": "https://www.nytimes.com/2021/08/04/sports/olympics/field-hockey-belgium-heat.html",
                        "title": "To prepare for Tokyo’s weather, Belgium’s field hockey team trained in a heat chamber.",
                        "source": "The New York Times",
                        "date": "Aug 4, 2021",
                        "snippet": "TOKYO — The hottest athletes at the entire Tokyo Olympics may be the \ngoalies in field hockey. Consider the conditions during Tuesday's...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXWPdvmiuzbgxwzXSjxdhWIZ-kK0j3oIu6k8XzJxpP0CpCYqQsoWinSY&usqp=CAI&s"
                    },
                    {
                        "position": 70,
                        "link": "https://www.theguardian.com/environment/2021/aug/05/olympic-athletes-and-volunteers-in-tokyo-tortured-by-heat",
                        "title": "Olympic athletes and volunteers in Tokyo ‘tortured’ by hottest Games ever",
                        "source": "The Guardian",
                        "date": "Aug 5, 2021",
                        "snippet": "It's a far cry from the “mild and sunny weather” that the Tokyo bid \ncommittee had promised in 2013 as “an ideal climate for athletes to...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAmEGQb1wElEF4a1yBKIdugCyOckcwztgjDTyRDLokGVx6tfvhiImr9k&usqp=CAI&s"
                    },
                    {
                        "position": 71,
                        "link": "https://www.wallpaper.com/architecture/weather-house-n-o-t-architects-tokyo-japan",
                        "title": "Inside-out house in Tokyo is an experiment in urban design",
                        "source": "Wallpaper",
                        "date": "Jul 10, 2021",
                        "snippet": "A Japanese architecture trio's latest residential project, the Weather \nHouse, occupies a prominent corner site in a Tokyo residential suburb.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRys2L9hZp2bOQmRsWg2BOIzSESNSt74hjR_S-cqATJzOKuXR4p0dhKbw&usqp=CAI&s"
                    },
                    {
                        "position": 72,
                        "link": "https://www.si.com/olympics/2022/02/06/beijing-olympics-winds-extreme-weather-unpredictable-moments",
                        "title": "Extreme Weather Shows That Even These Olympics Will Have Unpredictable Moments",
                        "source": "Sports Illustrated",
                        "date": "Feb 6, 2022",
                        "snippet": "Unpredictable weather is as much a part of the Winter Olympics as ... We \ncould see a repeat of what happened to Simone Biles in Tokyo,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iamVqbIlLNOxyuK29l8z1o0jIGJuIUSbSJiQm30&usqp=CAI&s"
                    },
                    {
                        "position": 73,
                        "link": "https://www.japantimes.co.jp/news/2022/01/25/national/japan-coronavirus-january-25/",
                        "title": "Japan's daily COVID-19 case tally exceeds 60000 for the first ...",
                        "source": "The Japan Times",
                        "date": "Jan 25, 2022",
                        "snippet": "Tokyo reported a record high 12,813 new cases, while many other prefectures \nalso reported record figures, including Osaka at 8,612, Aichi at...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-H8mLXBuT4NjxiaxGaAlP7JmNV7uwWedo5MI_Fdp96X_dVLZmo2GLRY&usqp=CAI&s"
                    },
                    {
                        "position": 74,
                        "link": "https://www.abc10.com/article/news/nation-world/japan-to-extend-virus-measures/507-3f6ace07-4596-4556-9e8e-887411b2b672",
                        "title": "Japan to extend virus measures in Tokyo and other areas",
                        "source": "ABC10",
                        "date": "Feb 9, 2022",
                        "snippet": "TOKYO, Japan — Prime Minister Fumio Kishida on Wednesday announced plans to \nkeep COVID-19 restrictions for Tokyo and 12 other areas for...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Bd4PicqrBGkHGmZtjuJUPiyXfFU_kRvcZDfpMhjYauImw5TvoeMeOoU&usqp=CAI&s"
                    },
                    {
                        "position": 75,
                        "link": "https://www.asahi.com/ajw/articles/14544325",
                        "title": "Heavy snow forecast for Kanto, including central Tokyo | The ...",
                        "source": "Asahi Shimbun",
                        "date": "Feb 9, 2022",
                        "snippet": "11, and the Japan Meteorological Agency is urging caution against traffic \ndisruptions. The agency said a low-pressure system that will form off...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajzF8ehnRU0mTORWJQqpZRgo0rEcYNELVWNU9aTinWRZfktOneMCZa2o&usqp=CAI&s"
                    },
                    {
                        "position": 76,
                        "link": "https://mainichi.jp/english/articles/20220114/p2a/00m/0na/030000c",
                        "title": "6 die due to heavy snow in Japan; bad weather expected to ...",
                        "source": "毎日新聞",
                        "date": "Jan 14, 2022",
                        "snippet": "Waves are expected to be 6 meters high in the Hokuriku, Kinki and Chugoku \nregions. (Japanese original by Shintaro Iguchi, Tokyo City News...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWnqDO9ZObQCpkgx-ulSakQVY8IU3unm6OZRUZX-kvteC8W3dKLgAT54&usqp=CAI&s"
                    },
                    {
                        "position": 77,
                        "link": "https://indianexpress.com/article/olympics/tokyo-2020-to-sprinters-hot-weather-in-japan-feels-just-right-7427837/",
                        "title": "Tokyo 2020: To sprinters, hot weather in Japan feels just right",
                        "source": "The Indian Express",
                        "date": "Jul 29, 2021",
                        "snippet": "Tokyo 2020: To sprinters, hot weather in Japan feels just right. When the \nmen's and women's sprints begin on Friday, most competitors will...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxbUfkTG4uE20Hspp5CzoePUUqtMO_YQzxjFX3JQF63x5FG77WlN3meXY&usqp=CAI&s"
                    },
                    {
                        "position": 78,
                        "link": "https://mainichi.jp/english/articles/20220210/p2a/00m/0na/008000c",
                        "title": "Bad weather disrupts public transport in east Japan - The ...",
                        "source": "毎日新聞",
                        "date": "Feb 10, 2022",
                        "snippet": "10, with suspensions of limited express trains and flights to and from \nTokyo's Haneda Airport following forecasts of snow and rain. East Japan...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_YZffRGllQdVH1wwU2fK4i6zLxJRhhwVduSYf_9nWRtVhirRBF4A0a7Y&usqp=CAI&s"
                    },
                    {
                        "position": 79,
                        "link": "https://www.reuters.com/business/energy/japan-utilities-lng-stocks-5-year-highs-may-avert-power-crunch-meti-2021-10-21/",
                        "title": "Japan's LNG stocks at 5-year highs, may avert power crunch ...",
                        "source": "Reuters",
                        "date": "Oct 21, 2021",
                        "snippet": "TOKYO, Oct 21 (Reuters) - Japan's inventories of liquefied natural ... \nJapan will likely avoid another power crunch even if the weather is...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQh0eyCOVDHwlZImhJqskXdu-tjzhHCk-u_a8U-NxYgMfXOSMaecf0-U&usqp=CAI&s"
                    },
                    {
                        "position": 80,
                        "link": "https://www.washingtonpost.com/world/2021/12/22/japan-covid-omicron-falling-cases/",
                        "title": "Japan coronavirus case drop is a mystery to researchers",
                        "source": "The Washington Post",
                        "date": "Dec 22, 2021",
                        "snippet": "TOKYO — As the omicron variant surges around the world, Japan's overall ... \nlike weather, cyclical patterns in the spread of the virus,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8Ola2JCEEOhy0-DTbZ1I563o_UKEGaiYtPzW3hq5cglbe6oBxzKA1pk&usqp=CAI&s"
                    },
                    {
                        "position": 81,
                        "link": "https://weather.com/storms/hurricane/news/2019-09-07-typhoon-faxai-forecast-japan",
                        "title": "Typhoon Faxai Makes Landfall in Japan; Damaging Winds ...",
                        "source": "The Weather Channel",
                        "date": "Sep 8, 2019",
                        "snippet": "Mountain View, CA Weather · Typhoon Faxai Makes Landfall in Japan; Damaging \nWinds, Heavy Rain and Pounding Surf Continue in Tokyo...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsc7S3lF8szRO31mO2_Kkoza-sNmz8VP20af6TuYpDrUDwYcU2M501Qc&usqp=CAI&s"
                    },
                    {
                        "position": 82,
                        "link": "https://www.asahi.com/ajw/articles/14479713",
                        "title": "Weather agency: Japan to face severe cold and snow this ...",
                        "source": "Asahi Shimbun",
                        "date": "Nov 11, 2021",
                        "snippet": "Japan can expect a freezing cold winter with lots of snow due to an \napparent La Nina weather phenomenon likely to last until the season's...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcGiNil9RiWARPtEtAU24UDvg9Y1xNDxYR9AwU9U6U5_CHCk96NsdeAM&usqp=CAI&s"
                    },
                    {
                        "position": 83,
                        "link": "https://whbl.com/2022/04/11/japan-weather-bureau-says-40-chance-of-la-nina-ending-during-spring-2/",
                        "title": "Japan weather bureau says 40% chance of La Nina ending ...",
                        "source": "WHBL",
                        "date": "1 month ago",
                        "snippet": "TOKYO (Reuters) – Japan's weather bureau said on Monday the La Nina \nphenomenon was continuing and kept the chance that it would end during...",
                        "thumbnail": "https://serpapi.com/searches/6286644210d74498eebe9f44/images/aa56a9a63d25182125f4c17e72326bb5c368eb9f46e5202b44c9fc6e863a3dcf.png"
                    },
                    {
                        "position": 84,
                        "link": "https://www.cnn.com/2021/05/25/sport/olympics-heat-climate-change-spt-intl/index.html",
                        "title": "Climate change could push temperatures at the Tokyo Olympics to the 'danger-zone' for athletes, report warns",
                        "source": "CNN",
                        "date": "Jun 7, 2021",
                        "snippet": "\"While the average high temperature in Tokyo during the Olympics (late July \nto early August) is 30-31 C (86-88 F), they frequently experience...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqarOKoRuV4YZeZuyyUx4tjXw9x2xq2QQ5lhuHTWmFk577DBAvD2Mlb9M&usqp=CAI&s"
                    },
                    {
                        "position": 85,
                        "link": "https://www.washingtonpost.com/sports/olympics/2021/08/08/olympics-closing-ceremonies-live-updates/",
                        "title": "Tokyo Games close with bittersweet sendoff for athletes ...",
                        "source": "The Washington Post",
                        "date": "Aug 8, 2021",
                        "snippet": "Tokyo 2020 officials acknowledged weaknesses in measures limiting the flow \n... hoisting of the flag was reportedly canceled due to weather.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSllI0Ed3cfP5XtSRP7dWgwNffP0N3q0qG19_AbRkDlydDKhopyCzM9gG8&usqp=CAI&s"
                    },
                    {
                        "position": 86,
                        "link": "https://www.letsrun.com/news/2022/03/2022-tokyo-marathon-mens-preview-ethiopians-team-up-to-try-to-take-down-eliud-kipchoge/",
                        "title": "2022 Tokyo Marathon Men's Preview: Ethiopians Team Up to ...",
                        "source": "LetsRun.com",
                        "date": "Mar 6, 2022",
                        "snippet": "So is the last guy to beat Kipchoge, 2020 London Marathon champ Shura \nKitata, and Japanese record holder Kengo Suzuki (2:04:56 pb). The weather...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuxDrKXLY6AiuzknSE_QGjLwKLJaxF0q9QmIrcx0Lj1UA2QPNvmZGlbk&usqp=CAI&s"
                    },
                    {
                        "position": 87,
                        "link": "https://www.9news.com/article/sports/olympics/tokyo-temperature/73-781760b3-c25e-4280-a9a1-ac1ec3152285",
                        "title": "What is the temperature in Tokyo for the Olympics? | 9news.com",
                        "source": "9News",
                        "date": "Jul 28, 2021",
                        "snippet": "According to Weather Underground, the temperatures in Tokyo will continue \nto stay in the high 80s and low 90s for the duration of the games,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmYsPO8ydsijqW5QjuQ8eId0XIDRGQZ2DHFazQALsvMzdkwB_ZcYddHw&usqp=CAI&s"
                    },
                    {
                        "position": 88,
                        "link": "https://www.nature.com/articles/s41598-022-10078-2",
                        "title": "Periodic sea-level oscillation in Tokyo Bay detected with the ...",
                        "source": "Nature",
                        "date": "1 month ago",
                        "snippet": "In Tokyo Bay, meteotsunamis induced by typhoons and the sea surface \ncurrents induced by ... Weather, Climate & Earthquake Information,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9rTMdN9wHFfNnmUv8fCsBUajs3tpRvNO_3s99-D1XHrenEQsAoZtedE5&usqp=CAI&s"
                    },
                    {
                        "position": 89,
                        "link": "https://www.npr.org/sections/tokyo-olympics-live-updates/2021/07/27/1019807529/the-tokyo-games-could-end-up-being-the-hottest-summer-olympics-ever",
                        "title": "Tokyo Could Be Hottest Olympic Games Ever : Live Updates ...",
                        "source": "NPR",
                        "date": "Jul 27, 2021",
                        "snippet": "Climate change in Japan. Extreme summer heat is no new phenomenon in Tokyo, \nbut experts say the role of human-driven climate change can't be...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_YO-toMM1_E4sq9flQfJmeFKEldcHXY1F6ldkx5n-ap7OjyT-6JRRVM&usqp=CAI&s"
                    },
                    {
                        "position": 90,
                        "link": "https://www.washingtonpost.com/weather/2021/07/20/heat-wave-northern-hemisphere/",
                        "title": "Five heat waves have swelled across the Northern Hemisphere",
                        "source": "The Washington Post",
                        "date": "Jul 20, 2021",
                        "snippet": "As viewed on a weather map of the globe, no fewer than five ... rails were \ndistorted,” tweeted Sayaka Mori, a meteorologist based in Tokyo.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ253a32R1KX8yWWMqAOQSqOU8EgpgZVgUj842KxZmK5kK2oiCzqrrNKFM&usqp=CAI&s"
                    },
                    {
                        "position": 91,
                        "link": "https://wdwnt.com/2022/01/photos-snow-blankets-tokyo-disney-resort/",
                        "title": "PHOTOS: Snow Blankets Tokyo Disney Resort",
                        "source": "WDW News Today",
                        "date": "Jan 10, 2022",
                        "snippet": "Chick-a-pin Hill was not spared of course, and some intrepid guests were \nstill riding Splash Mountain in the below-freezing weather!",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqNreIBU3ZIyhLrrfljvNF3HAgWT6q5GmDhSn90w6Ik4NwG5fIMEpsSE&usqp=CAI&s"
                    },
                    {
                        "position": 92,
                        "link": "https://mainichi.jp/english/articles/20210727/p2g/00m/0sp/095000c",
                        "title": "Wild weather swing barely makes a blip in Tokyo Olympic ...",
                        "source": "毎日新聞",
                        "date": "Jul 27, 2021",
                        "snippet": "A rainbow appears as athletes compete in the bike leg of the women's \nindividual triathlon competition at the Summer Olympics, on July 27,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gjyGygBjckDdbsA9VPVyYCNkuUPz__qlLCxD88YUYIYW7fw1rJZ-nD0&usqp=CAI&s"
                    },
                    {
                        "position": 93,
                        "link": "https://www.japantimes.co.jp/sports/2021/08/06/olympics/summer-olympics/olympic-athletics/womens-marathon/",
                        "title": "Women's marathon to start one hour earlier due to Sapporo heat",
                        "source": "The Japan Times",
                        "date": "Aug 6, 2021",
                        "snippet": "The Tokyo Olympics women's marathon to be held Saturday morning in Sapporo \nhas been moved forward by one hour to 6 a.m. due to heat concerns...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJe3N36qWeztmWJsP-0aAS0H8UACcOIpw6yHxlvfKKSPryBXZAi7lm8w&usqp=CAI&s"
                    },
                    {
                        "position": 94,
                        "link": "https://www.latimes.com/world-nation/story/2021-10-18/japan-puzzled-coronavirus-control-success",
                        "title": "Japan puzzles over its sudden coronavirus-control success",
                        "source": "Los Angeles Times",
                        "date": "Oct 18, 2021",
                        "snippet": "From 20,000 coronavirus cases a day to under 500: How did Japan do it? ... \npandemic and bad weather in late August that kept people home.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ubNXCEB0iWboUk6mt8OQz-CmJCIgCFvoq18CnZ4QNgN_M3kgrhlF0ZM&usqp=CAI&s"
                    },
                    {
                        "position": 95,
                        "link": "https://www.theguardian.com/world/2021/aug/14/million-urged-to-seek-shelter-as-floods-and-landslides-hit-japan",
                        "title": "Million urged to seek shelter as floods and landslides hit Japan",
                        "source": "The Guardian",
                        "date": "Aug 14, 2021",
                        "snippet": "Agence France-Presse in Tokyo ... evacuation alert as the weather agency \nreported unprecedented levels of rain in the area on Saturday.",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16uhyEAdiKLWi8t4qlajYLMZYGoTaRsdTJz3KNVyGBGmAw74znPmri9Nn&usqp=CAI&s"
                    },
                    {
                        "position": 96,
                        "link": "https://www.france24.com/en/live-news/20211227-heavy-snow-causes-travel-chaos-in-japan",
                        "title": "Heavy snow causes travel chaos in Japan",
                        "source": "France 24",
                        "date": "Dec 27, 2021",
                        "snippet": "Tokyo (AFP) – Heavy snow caused traffic jams, ... No injuries or deaths due \nto the freezing weather have yet been confirmed,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVejKLvtYxFRmASNIroe2awTCV3xkEd06Ypvb57I8i3tf2i3wyMHXZTU&usqp=CAI&s"
                    },
                    {
                        "position": 97,
                        "link": "https://mainichi.jp/english/articles/20210916/p2a/00m/0na/017000c",
                        "title": "Japan weather agency warns of flooding, landslides as ...",
                        "source": "毎日新聞",
                        "date": "Sep 16, 2021",
                        "snippet": "The projected course of Typhoon Chanthu as of 3 p.m. on Sept. 16, 2021 is \nseen in this image from the Japan Meteorological Agency website. TOKYO...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJExKMoaMXvRwfsSLfLujytY50J-DdysUXD0dq24p0IL5v7YGpfbmyJU&usqp=CAI&s"
                    },
                    {
                        "position": 98,
                        "link": "https://www.japantimes.co.jp/news/2021/11/30/national/japan-omicron-case/",
                        "title": "Japan confirms first case of omicron coronavirus variant",
                        "source": "The Japan Times",
                        "date": "Nov 30, 2021",
                        "snippet": "Japan reported its first case of the omicron variant Tuesday, ... variant \nin a male Namibian diplomat in his 30s who had landed in Tokyo on...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghvgYWYIHE0rnpL9Ih7bbYOR-W5zxtXpAYVLOW6RUN1LetlL98Zrqt5U&usqp=CAI&s"
                    },
                    {
                        "position": 99,
                        "link": "https://www.9news.com/article/sports/olympics/hottest-temperatures-olympics-history/73-e459e14f-0887-477d-82c0-aee1296955bd",
                        "title": "What was the temperature in Tokyo during the Olympics?",
                        "source": "9News",
                        "date": "Aug 7, 2021",
                        "snippet": "TOKYO, Japan — It was 94.5 degrees in Tokyo on Thursday and Friday. Those \nare the warmest temperatures ever recorded at the Olympics,...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2RT6wMSsSxsiJKxTqPuMyhmdhyCwdf8tX6DzsNPjpJrMYb5vvA0Ryyo&usqp=CAI&s"
                    },
                    {
                        "position": 100,
                        "link": "https://www.ekathimerini.com/nytimes/1165441/in-tokyo-climate-change-has-made-for-a-hot-olympics/",
                        "title": "In Tokyo, climate change has made for a hot Olympics",
                        "source": "eKathimerini.com",
                        "date": "Jul 31, 2021",
                        "snippet": "The 2000 Sydney Olympics, held in late September to adjust to weather in \nthe Southern Hemisphere, have been the least-viewed Summer Games in the...",
                        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrbD7phrfqKSkeF14993Xv1CHP4NNEhyCl_fvWSJbzLrRX3nm9kpNLXI&usqp=CAI&s"
                    }
                ],
                "pagination": {
                    "current": 1,
                    "next": "https://www.google.com/search?q=weather+Tokyo,+Japan&num=100&tbm=nws&ei=RGSGYuL5Ks2m_QbupraQAw&start=100&sa=N&ved=2ahUKEwjiq-W78uv3AhVNU98KHW6TDTIQ8NMDegQIARA8",
                    "other_pages": {
                        "2": "https://www.google.com/search?q=weather+Tokyo,+Japan&num=100&tbm=nws&ei=RGSGYuL5Ks2m_QbupraQAw&start=100&sa=N&ved=2ahUKEwjiq-W78uv3AhVNU98KHW6TDTIQ8tMDegQIARA4",
                        "3": "https://www.google.com/search?q=weather+Tokyo,+Japan&num=100&tbm=nws&ei=RGSGYuL5Ks2m_QbupraQAw&start=200&sa=N&ved=2ahUKEwjiq-W78uv3AhVNU98KHW6TDTIQ8tMDegQIARA6"
                    }
                },
                "serpapi_pagination": {
                    "current": 1,
                    "next_link": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&num=100&q=weather+Tokyo%2C+Japan&start=100&tbm=nws",
                    "next": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&num=100&q=weather+Tokyo%2C+Japan&start=100&tbm=nws",
                    "other_pages": {
                        "2": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&num=100&q=weather+Tokyo%2C+Japan&start=100&tbm=nws",
                        "3": "https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.com&num=100&q=weather+Tokyo%2C+Japan&start=200&tbm=nws"
                    }
                }
            })
            
}
