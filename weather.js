var request = require('request');
module.exports = function (location) {
	return new Promise(function(resolve,reject){
		var encodedLocation = encodeURIComponent(location);
	var url ='http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&appid=f955da74f95473e9bdf5bcd81ed2ce1e';

	//encodeURIComponent(location);
	if(!location)
	{
		return reject('No location provided');
		
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
};
	/**/
