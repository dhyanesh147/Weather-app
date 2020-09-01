// const request = require('postman-request')

// let lat=0
// let long=0
// const rurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Hazaribagh.json?access_token=pk.eyJ1IjoiaGltYW5zaHU4MTAyMyIsImEiOiJja2VoNjV4aDkxdGF3MnltaWRjejNkenByIn0.IfcxIKxBR71mzUmrHfgmLg&limit=1'
// request ({url:rurl},(error,response)=>{
//   const a = JSON.parse(response.body)
//    // a.features[0].text = "surat"
//    lat = a.features[0].center[1]
//    long = a.features[0].center[0]
//     console.log(a.features[0].center)
// })
// const url = `http://api.weatherstack.com/current?access_key=f013d1a3d6540309bd85669d22636425&query=`+lat+","+long
// request({url:url}, (error,response)=>{
//     const data = JSON.parse(response.body);
//     console.log(data.current.temperature + "degree celsius")
    
    
// })



const address = process.argv[2]
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
if(address)
geocode(address, (error, data) => {
    if(error)
        return console.log('Error', error)
    else
    console.log('Data', data)


    forecast(data.latitude, data.longitude, (error, data) => {
        if(error)
          return console.log('Error', error)
        else 
          console.log('Data', data)
    })
})
else
 console.log( "please provide adress")


// forecast(24, 85.25, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })