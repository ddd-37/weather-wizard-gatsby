require("dotenv").config();
const axios = require("axios");

const WEATHERAPI = process.env.GATSBY_WEATHERAPI_KEY;

exports.handler = function (event, context, callback) {
  const lat = event.queryStringParameters.lat;
  console.log(
    "exports.handler -> event.queryStringParameters",
    event.queryStringParameters
  );
  const lng = event.queryStringParameters.lng;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${WEATHERAPI}`;

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