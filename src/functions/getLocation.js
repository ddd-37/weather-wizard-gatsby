require("dotenv").config();
const axios = require("axios");

const OPENCAGEAPI = process.env.GATSBY_OPENCAGEAPI_KEY;

exports.handler = function (event, context, callback) {
  const lat = event.queryStringParameters.lat;
  const lng = event.queryStringParameters.lng;

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${OPENCAGEAPI}&abbrv=1`;

  axios
    .get(url)
    .then((json) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json.data.results[0].components),
      });
    })
    .catch((ex) => callback(ex));
};
