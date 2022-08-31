const request = require("request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=f214fa5b8e3b54537263b7c4fe8405be&query=" +
    encodeURI(address);
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to geoCoding Services!", undefined);
    } else if (body.data.length === 0) {
      callback("Unable to find location.Try another search..", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
