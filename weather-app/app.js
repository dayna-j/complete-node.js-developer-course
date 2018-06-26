// request is a package available on npm.  It provides an API for
// working with http requests.

const yargs = require('yargs');
// require the geocode module
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
// google api
const googleApiKey = 'AIzaSyBSWumYsldat90xe_mEKx28I77rtXZ17Lc';
const darkskyApiKey = '894bb53f93a0eba252ea4f04de4c1973';

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

// call geocodeAddress function on geocode object.  3 input arguments; the address, api key and a callback function
// the callback function prints an error message if one exists and stringifies the result if there is no error

geocode.geocodeAddress(argv.address,googleApiKey, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        // weather.getWeather is using the results data from the google geocode api
        weather.getWeather(results.latitude, results.longitude, darkskyApiKey, (errorMessage, results) => {
    
            if (errorMessage) {
                console.log(errorMessage);
            }
            else {
                console.log(JSON.stringify(results,undefined, 2));
            }
        });
    }
});
// darksky api key 894bb53f93a0eba252ea4f04de4c1973

