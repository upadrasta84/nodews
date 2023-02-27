//node is asynchronous, single-threaded, non-blocking, and event-driven
console.log('Starting')

//we cannot expect callback functions to return any value:

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0
        }
        return data;
    }, 2000)
}

const data = geocode('Tanuku') //we cannot expect callback to return any value. we will get undefined back from the callback function
console.log(data) 




const geocode2 = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0
        }
        callback(data)
    }, 2000)
}

//to get the data from the above geocode2 function, we need to callback the calling function.

geocode2('Tanuku', (data) => {
    console.log(data) //this time, it works fine!
})


const delayedAdd = (x,y,callback) => {
    setTimeout(() => {
        callback(x+y)
    }, 2000)
}

delayedAdd(2,3, (sumVal2)=> {
    console.log(sumVal2)
})


//using the above callback, we will rewrite the code from 03_advanced.js as below

const request = require('request')

var location='Srinagar'

const getCoordinates = (location, callback) => {
    var latitude, longitude
    const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoiYmxpY2tlcmJsYWNrIiwiYSI6ImNreWk5bTdoaDFma2Yyb3FwNXp4Mnc3ajUifQ.EzmdAL411XMI2xV_zYrBdw'
    request({url:url2, json: true}, (error,response) => {
        if(error) {
            console.log('couldnt connect to mapbox')
        } else if(response.body.features.length === 0) { //compare with 3 equals sign
            console.log('Invalid location provided')
        } else {
            latitude = response.body.features[0].center[1]
            longitude = response.body.features[0].center[0]
            console.log(latitude)
            console.log('----------------------------------------------')
            callback(latitude+','+longitude)
        }
    })
}

// first-class functions  means that the language treats functions as values – that you can assign a function into a variable, pass it around etc. 
// Higher-order functions are functions that work on other functions, meaning that they take one or more functions as an argument and can also return a function.
// map() and filter() are higher-order functions that are popularly used.


getCoordinates(location, (coordinates) => {
    const url = 'http://api.weatherstack.com/current?access_key=7c71957eab2c7c79fbaa59cf39d3a76b&query='+coordinates
    request({url:url, json: true}, (error,response) => {
        if(error) {
            console.log('Unable to connect to Weather API')
        } else if(response.body.error) {
            console.log('Unable to find location')
        } else {
            console.log('It is currently',response.body.current.temperature,'degrees centigrade in',location+'. there is',response.body.current.precip,'probability of rain')
            console.log('Descriptions: ', response.body.current.weather_descriptions[0])
        }
    })
})


