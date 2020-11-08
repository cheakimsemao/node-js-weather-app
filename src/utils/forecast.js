const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url =
        'http://api.weatherstack.com/current?access_key=ffbfca4cebf1575b8381db550b172ccb&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find the location', undefined);
        } else {
            callback(
                undefined,
                body.current.weather_descriptions[0] +
                    '. It is currently ' +
                body.current.temperature +
                    ' degree.'
            );
        }
    });
};

module.exports = forecast;
