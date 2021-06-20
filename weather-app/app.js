const geocode = require("./util/geocode");
const forecast = require("./util/forecast");

const address = process.argv[2];

if (!address) {
  console.log("please add address");
} else {
  geocode(address, (error, { lat, long, location }) => {
    //data = {lat: , long:, location: } destructuring
    if (error) {
      return console.log(error);
    }

    forecast(lat, long, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastdata);
    });
  });
}
