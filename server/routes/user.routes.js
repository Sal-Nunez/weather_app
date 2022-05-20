const UserController = require('../controllers/user.controller')
const { basicAuth } = require('../config/jwt.config')
const WeatherController = require('../controllers/weather.controller')

module.exports = app => {
    app.post('/api/login', UserController.login)
    app.post('/api/register', UserController.register)
    app.get('/api/checkLogin/:id', basicAuth, UserController.checkLogin)
    app.put('api/users/:id', basicAuth, UserController.editUser)
    app.put('api/users/password/:id', basicAuth, UserController.updatePassword)
    app.delete('api/users/:id', basicAuth, UserController.deleteUser)
    app.get('/api/logout', basicAuth, UserController.logout)
    app.post('/api/users/locations/add', basicAuth, UserController.addLocation)
    app.post('/api/users/locations/remove', basicAuth, UserController.removeLocation)
    app.post('/api/users/locations/changePrimary', basicAuth, UserController.changePrimaryLocation)
    app.get('/api/weather/search', WeatherController.weatherNews)
    app.get('/api/weather/search/:location', WeatherController.weatherSearch)
}