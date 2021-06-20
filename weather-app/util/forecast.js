const request = require("request");

const urlwork =
  "http://api.weatherstack.com/current?access_key=050816e4518d6edd2f351d54f1e7345b&query=40.714,-74.006&units=f";

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=050816e4518d6edd2f351d54f1e7345b&query=" +
    lat +
    "," +
    long +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Network Error", undefined);
    } else if (response.body.error) {
      callback("Cordinates Not Find", undefined);
    } else {
      callback(
        undefined,
        `It is curently`,
        response.body.current.temperature,
        `degrees out. It feels like`,
        response.body.current.feelslike,
        `degree out`
      );
    }
  });
};

module.exports = forecast;
