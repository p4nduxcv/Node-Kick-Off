const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoicGFuZHV4Y3YiLCJhIjoiY2twd3NodzB0MDAwazJ2cHBsMjJ3MzRpbCJ9.jZ5a8aKxZGJ7fPUXGBwudg";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect internet or", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location", undefined);
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[0],
        long: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
