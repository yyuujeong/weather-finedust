import React, { useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { MdOutlineWaterDrop } from "react-icons/md";

//도시 검색창
const ContentGlobal = styled.div`
  text-align: center;
  input {
    width: 20.5rem;
    height: 3rem;
    color: #222;
    text-indent: 0.7rem;
    outline: none;
    border: none;
    border-radius: 0.4rem 0 0 0.4rem;
  }
  button {
    box-sizing: border-box;
    background: black;
    border-radius: 0 0.4rem 0.4rem 0;
    border-style: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1.5rem;
    line-height: 1.5;

    outline: none;
    overflow: hidden;
    padding: 0.5rem 1.5rem;
    position: relative;
    text-align: center;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
      background: #313131;
    }
  }
`;

//결과 화면
const ResultWrapper = styled.div`
  text-align: center;
  color: #fff;
  margin-top: 2rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  img {
    width: 12rem;
    height: auto;
    margin-top: -1.6rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 4rem;
  }
`;
const WeatherCityName = styled.h1`
  font-size: 3rem;
`;
const WeatherInformation = styled.ul`
  li:nth-child(2) {
    margin-top: -1.6rem;
  }
  li:nth-child(3) {
    font-size: 4.8rem;
    font-weight: bold;
    line-height: 2;
  }
  span {
    font-size: 2.4rem;
    font-weight: normal;
  }
`;
const MaxMin = styled.div`
  margin-top: -1.6rem;
  color: lightgray;
`;
const Humidity = styled.div`
  margin-top: 3.2rem;
  font-size: 2.4rem;
`;

const GlobalWeather = () => {
  const [location, setLocation] = useState("");
  const weatherUrl = `https://weather-finedust-server.vercel.app/weather/${location}`;
  const [result, setResult] = useState("");

  const searchWeather = async (e) => {
    e.preventDefault();
    try {
      const weatherData = await axios({
        method: "get",
        url: weatherUrl,
      });
      console.log(weatherData);
      setResult(weatherData);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <ContentGlobal>
        <form onSubmit={searchWeather}>
          <input
            type="text"
            placeholder="도시를 입력하세요"
            autoFocus
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button>검색</button>
        </form>
      </ContentGlobal>
      {Object.keys(result).length !== 0 && (
        <ResultWrapper>
          <WeatherCityName>{result.data.name}</WeatherCityName>
          <WeatherInformation>
            <li>
              <img
                src={`http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`}
              ></img>
            </li>
            <li>{result.data.weather[0].main}</li>
            <li>
              {Math.trunc(result.data.main.temp)} <span>°C</span>
            </li>
          </WeatherInformation>
          <MaxMin>
            최고: {Math.trunc(result.data.main.temp_max)}° 최저:{" "}
            {Math.trunc(result.data.main.temp_min)}°
          </MaxMin>
          <Humidity>
            <MdOutlineWaterDrop></MdOutlineWaterDrop>
            {result.data.main.humidity}%
          </Humidity>
        </ResultWrapper>
      )}
    </>
  );
};

export default GlobalWeather;
