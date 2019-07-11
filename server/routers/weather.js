const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/getWeather', (req, res) => {
  request({
    url: 'https://www.apiopen.top/weatherApi?city=上海',
    method: 'get',
    headers: {
      Accept: 'application/json'
    }
  }, (error, response, body) => {
    if (error) {
      res.statusCode = 500;
      res.send({
        status: false,
        error
      });
    } else {
      res.statusCode = 200;
      res.send({
        status: true,
        data: body
      });
    }
  });
});

module.exports = {
  router: [router]
};