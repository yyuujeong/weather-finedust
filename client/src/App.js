import React, { useState, useEffect } from "react";
import { Reset } from "styled-reset";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import backgroundDawn from "./assets/dawn.png";
import backgroundDay from "./assets/day.png";
import backgroundAfternoon from "./assets/afternoon.png";
import backgroundNight from "./assets/night.png";
import NavWrapper from "./components/NavWrapper";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'NanumSquareNeo-Variable';
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

//배경화면
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ContentWrapper = styled.div`
  width: 30rem;
  height: 45rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.5;
    border-radius: 1.5rem;
    z-index: -9;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 35rem;
    height: 50rem;
  }
`;

function App() {
  // 시간대별 배경화면 바꾸기
  const [background, setBackground] = useState("");

  const changeBackgroundByTime = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 1 && currentTime <= 5) {
      setBackground(backgroundDawn);
    } else if (currentTime >= 6 && currentTime <= 15) {
      setBackground(backgroundDay);
    } else if (currentTime >= 16 && currentTime <= 18) {
      setBackground(backgroundAfternoon);
    } else {
      setBackground(backgroundNight);
    }
  };
  useEffect(() => {
    changeBackgroundByTime();
  }, []);


  return (
    <React.Fragment>
      <Reset />
      <GlobalStyle />
      <Wrapper $image={background}>
        <ContentWrapper>
          <NavWrapper />
        </ContentWrapper>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;