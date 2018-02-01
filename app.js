var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs').option('location', {
	alias:'l',
	demand: false,
	describe: 'location to fetch weather for ',
	type: 'string'
	
})
.help('help')
.argv;

/*weather(function (currentWeather) {
	console.log(currentWeather);
});

location(function(location){
	if(!location)
	{
		console.log('Unable to guess the location');
		return;
	}
	console.log('city:' + location.city);
	console.log('log/lat:' + location.loc);
	
});*/

if(typeof argv.l === 'string' && argv.l.length >0) {
	console.log('location was provided');
	
	weather(argv.l).then(function(currentWeather){
		console.log(currentWeather);
		
	}).catch(function(error){
		console.log(error);
	})
}
else
{
	console.log('no location given');
	
	location().then(function(loc){
		return weather(loc.city);
		
	}).then(function(currentWeather){
		console.log(currentWeather);
	}).catch(function(error){
		console.log(error)
	});
	
}