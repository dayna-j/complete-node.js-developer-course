const request = require('request');


var geocodeAddress = (address, apiKey, callback) => {
    var encodedAddress = encodeURIComponent(address);

request({ // config object
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + apiKey,
    json: true
},
// callback function
(error, response, body) => {
    
    if(error) {
        callback('error');
    }
    else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address..');

    } else if (body.status === 'OK') {
    callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
    });
  }
}); // end request call
}

module.exports.geocodeAddress = geocodeAddress;