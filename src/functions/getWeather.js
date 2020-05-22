require("dotenv").config();
const axios = require("axios");

const WEATHERAPI = process.env.GATSBY_WEATHERAPI_KEY;

exports.handler = function (event, context, callback) {
  const lat = event.queryStringParameters.lat;
  const lng = event.queryStringParameters.lng;
  const unitType = event.queryStringParameters.unit;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=${unitType}&appid=${WEATHERAPI}`;

  axios
    .get(url)
    .then((json) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json.data),
      });
    })
    .catch((ex) => callback(ex));
};
