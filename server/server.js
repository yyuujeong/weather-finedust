const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/weather/:loaction', async(req, res) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&appid=${process.env.APP_WEATHER_KEY}&units=metric`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.get('/pollution', async (req, res) => {
  try {
      const pollutionRes = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${req.query.lat}&lon=${req.query.lon}&appid=${process.env.APP_WEATHER_KEY}`);
      res.json(pollutionRes.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () =>console.log(`server is listening on ${PORT}`));