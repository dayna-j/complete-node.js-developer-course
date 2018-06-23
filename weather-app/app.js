// request is a package available on npm.  It provides an API for
// working with http requests.
const request = require('request');
const yargs = require('yargs');

const apiKey = 'AIzaSyBSWumYsldat90xe_mEKx28I77rtXZ17Lc';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to get weather for',
            string: true
        }})
        .usage('Correct usage: $0 option message \n')
        .nargs('h',1)
        .help()
        .alias('help', 'h')
        .epilog('Copyright Dayna J. Blackwell 2018')
        .argv;

// console.log(argv.address);

var encodedAddress = encodeURIComponent(argv.address);

request({ // config object
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + apiKey,
    json: true
},
// callback function
(error, response, body) => {
    
    if(error) {
        console.log('error');
    }
    else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address..');

    } else if (body.status === 'OK') {
        
    console.log(`\nLatitude & Longitude for ${body.results[0].formatted_address}\n`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
}); // end request call

