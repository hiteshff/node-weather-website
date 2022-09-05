const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=9fb5320ebb474a15f54fd9cf1a01d7f9&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to forecast services!!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " until evening.It is currently " +
          body.current.temperature +
          " degrees out.There is " +
          body.current.precip +
          "% chance of rain.Speed of wind is " +
          body.current.wind_speed +
          "km/h and Humidity is " +
          body.current.humidity +
          "%"
      );
    }
  });
};

module.exports = forecast;
