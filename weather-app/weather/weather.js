const request = require('request');

var getWeather = (lat, lng, apiKey, callback) => {

    request({
    url: 'https://api.darksky.net/forecast/894bb53f93a0eba252ea4f04de4c1973/33.397966,-111.8742554',
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
    json: true

    }, (error, response, body) => {
        if(error) {callback('Unable to connect to server');}
        else if (response.statusCode == 400) {
            callback('Unable to retrieve weather..');
        } else if (response.statusCode == 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;