/*function doWork(data, callback) {
    callback('done');
    callback('done second');
}

function doWorkPromise(data) {
    return new Promise(function (resolve, reject) {
       setTimeout(function() {
        reject('everything is broken!');
       },1000);
      //  reject({
       //     error: 'something bad happened'
       // });
    });
}
doWorkPromise('some data').then(function(data){
    console.log(data);
});*/
var request = require('request');

function getWeather(location){
return new Promise(function(resolve,reject)
{       
var encodedLocation = encodeURIComponent(location);
var url ='http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&appid=f955da74f95473e9bdf5bcd81ed2ce1e';

//encodeURIComponent(location);
if(!location)
{
return reject('Unable to guess the location');

}

request({
url: url,
json: true
}, function (error, response, body) {
if (error) {
reject('Unable to fetch weather.');
} else {
//console.log(JSON.stringify(body, null, 4));
// It's 77.77 in Philadelphia!
resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
}
});   


});
}
getWeather('New York').then(function(currentWeather)
                             {
                                console.log(currentWeather);
                                
                             }, function(error){
                                console.log(error);
                             });