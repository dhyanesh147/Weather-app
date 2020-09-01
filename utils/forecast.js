const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f013d1a3d6540309bd85669d22636425&query=` + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
             callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
             callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast