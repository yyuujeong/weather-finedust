import React, { useEffect, useCallback } from "react";
import {useFinedust} from "../store/store";
import { styled } from "styled-components";
import {
  FaRegFaceGrinHearts,
  FaRegFaceSmileWink,
  FaRegFaceSmile,
  FaRegFaceFrown,
  FaRegFaceAngry,
} from "react-icons/fa6";

const ContentFinedust = styled.div`
  width: 100%;
  text-align: center;
  color: white;
`;
const FinedustCityName = styled.div`
  margin-top: 2rem;
  font-size: 2.4rem;
  font-weight: bold;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 4rem;
  }
`;
const CurrentTime = styled.div`
  margin-top: 0.8rem;
`;
const GradeCheck = styled.div`
  div {
    margin-top: 3.6rem;
    font-size: 8rem;
  }
  p {
    margin: 0.8rem 0 3.2rem;
    font-size: 2.8rem;
    font-weight: bold;
  }
`;
const FinedustGroup = styled.ul`
  display: flex;
  justify-content: space-evenly;
  li {
    font-size: 0.8rem;
  }
  span {
    display: block;
    margin: 0.8rem 0 1.1rem;
    font-size: 2.4rem;
  }
  p {
    margin: 0.3rem 0 0.8rem;
    font-size: 1.6rem;
  }
`;

const Finedust = () => {
  const {reverse, air, fetchReverse, fetchAir} = useFinedust();
  //현재시간
  const today = new Date().toLocaleString();

  //현재위치
  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchReverse(lat, lon);
      fetchAir(lat, lon);
    });
  }, [fetchReverse, fetchAir]);
  useEffect(() => {
    getCurrentLocation();
  }, []);

  //미세먼지 등급 별 이모지
  const FinedustLevels = ({ pm10, aqi }) => {
    let emoji;
    let message;
    let color;
  
    if (aqi === 1 || pm10 <= 20) {
      emoji = <FaRegFaceGrinHearts />;
      message = "매우 좋음";
      color = "blue";
    } else if (aqi === 2 || (pm10 >= 21 && pm10 <= 50)) {
      emoji = <FaRegFaceSmileWink />;
      message = "좋음";
      color = "skyblue";
    } else if (aqi === 3 || (pm10 >= 51 && pm10 <= 100)) {
      emoji = <FaRegFaceSmile />;
      message = "보통";
      color = "green";
    } else if (aqi === 4 || (pm10 >= 101 && pm10 <= 200)) {
      emoji = <FaRegFaceFrown />;
      message = "나쁨";
      color = "orange";
    } else {
      emoji = <FaRegFaceAngry />;
      message = "매우 나쁨";
      color = "red";
    }
  
    return (
      <div>
        {emoji}
        <p style={{ color }}>{message}</p>
      </div>
    );
  };

  return (
    <>
      <ContentFinedust>
        {Object.keys(reverse).length !== 0 && (
          <FinedustCityName>
            {reverse.city}
            { "\u00A0"}
            {reverse.locality}
          </FinedustCityName>
        )}
        <CurrentTime>{today}</CurrentTime>
        {Object.keys(air).length !== 0 && (
          <div>
            <GradeCheck>
              <b>
                <FinedustLevels aqi={air.list[0].main.aqi} />
              </b>
            </GradeCheck>

            <FinedustGroup>
              <li>
                미세먼지
                <span>
                  <FinedustLevels pm10={air.list[0].components.pm10} />
                </span>
                {air.list[0].components.pm10} μg/m³
              </li>
              <li>
                초미세먼지
                <span>
                  <FinedustLevels aqi={air.list[0].main.aqi} />
                </span>
                {air.list[0].components.pm2_5} μg/m³
              </li>
            </FinedustGroup>
          </div>
        )}
      </ContentFinedust>
    </>
  );
};

export default Finedust;
