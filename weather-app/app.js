const geocode = require("./util/geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=050816e4518d6edd2f351d54f1e7345b&query=New%20York&units=f";

// const urlgeo =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFuZHV4Y3YiLCJhIjoiY2twd3NodzB0MDAwazJ2cHBsMjJ3MzRpbCJ9.jZ5a8aKxZGJ7fPUXGBwudg";

// request(url, (error, response) => {
//   const _weatherdata = JSON.parse(response.body);

//   console.log(
//     `It is curently`,
//     _weatherdata.current.temperature,
//     `degrees out. It feels like`,
//     _weatherdata.current.feelslike,
//     `degree out`
//   );
// });

// request({ url: urlgeo, json: true }, (error, response) => {
//   if (error) {
//     console.log(error, `network errror`);
//   } else if (response.body.features.length === 0) {
//     console.log(`unable to find location`);
//   } else {
//     const lat = response.body.features[0].center[0];
//     const long = response.body.features[0].center[1];
//     console.log(lat, long);
//   }
// });

geocode("India", (error, data) => {
  console.log(`Error`, error);
  console.log(`Data`, data);
});
