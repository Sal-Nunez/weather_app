const axios = require('axios')

module.exports.searchWeather = (req, res) => {
    axios.get('https://serpapi.com/search.json?engine=google&q=weather&google_domain=google.com&gl=us&hl=en&tbm=nws&api_key=64a4be6709e78fac312237b98527e210e53de2234545a4cc457b9d35d3407295')
        .then(results => {
            console.log("in res")
            const weather = results.data
            res.json(results.data)
            console.log("in res end")
        })
        .catch(err => {
            console.log('in err')
            res.json(err)
        })
}