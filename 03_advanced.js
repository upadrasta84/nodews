//node is asynchronous, single-threaded, non-blocking, and event-driven
console.log('Starting')



//A callback function is a function that we provide as an argument to another function with the intention to call it later.
//below, the setTimeout is taking an arrow method as a function and will be called in 2 seconds.
setTimeout(() => {
    console.log('Time for 2 seconds')
}, 2000) //this is a non-blocking call.
//in the above, the callback function is asynchronous but not all callback functions need to be asynchronous.

//below callback function, for example, to the function filter, is synchronous
const names = ['Andrew','Karthik', 'Kamala', 'Vimala', 'Kalyani']
const kNames = names.filter((name) => {
    return name.startsWith('K')
})
console.log(kNames)




console.log('Stopping')

//At the core of Node v8 engine, we have Call Stack, Node APIs, Event Loop, and Callback queue
//Call stack is a stack for executing functions in order
//If we have something like timeout functions, then it gets pushed to Node APIs and off the call stack
//In the above, for the '0 seconds' callback function, once it reaches timeout, it gets added to the Callback queue and is ready to get executed
//before it gets executed, it needs to be added back to the Call Stack
//however, for that to happen the call stack needs to be empty which means that the 'main()' method needs to be completed after which the callback methods will be added to the stack
//none of the asynchronous functions will EVER run before the main() method completes

const request = require('request')

//mapbox is for getting location information. created mapbox account free account
var publicTokenMapBox = 'pk.eyJ1IjoiYmxpY2tlcmJsYWNrIiwiYSI6ImNreWk5bTdoaDFma2Yyb3FwNXp4Mnc3ajUifQ.EzmdAL411XMI2xV_zYrBdw' 


var location='Srinagar'

const forecast = (url) => {
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
}

const getCoordinates = (location) => {
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
            var url3 = 'http://api.weatherstack.com/current?access_key=7c71957eab2c7c79fbaa59cf39d3a76b&query='+latitude+','+longitude
            console.log('getting weather from',url3)
            forecast(url3)
        }
    })
}

getCoordinates(location)


/*
console.log('url is',url)
request({url:url}, (error,response) => {
//  const json = JSON.parse(response.body)
//  console.log(json)
    console.log('----------------------------------------------')
})



*/