const mongoose = require('mongoose');

const db = "mongodb://localhost/weather_app"

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connection to the database, ENGAGED'))
    .catch(err => {console.log('Error connecting to the database, NOT ENGAGED'), err})