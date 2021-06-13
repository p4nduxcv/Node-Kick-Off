const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=050816e4518d6edd2f351d54f1e7345b&query=New%20York";

request(url, (error, response) => {
  const _weatherdata = JSON.parse(response.body);

  console.log(_weatherdata.current);
});
