import React from 'react';
import { Routes, Route, NavLink} from "react-router-dom";
import { styled } from 'styled-components';
import GlobalWeather from './GlobalWeather';
import Finedust from './Finedust';

//카테고리
const NaviWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #fff;
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
  span {
    color: #fff;
    opacity: 0.4;
  }
`;
const activeStyle = {
  color: '#fff',
  fontWeight: 'bold',
}
const deactiveStyle = {
  opacity: 0.4,
}

const NavWrapper = () => {
  return (
    <>
      <NaviWrapper>
        <NavLink
          to="/"
          style={({isActive}) => {
            return isActive ? activeStyle : deactiveStyle;
          }}
        >세계도시 날씨 조회</NavLink>
        <span>|</span>
        <NavLink
          to="/finedust"
          style={({isActive}) => {
            return isActive ? activeStyle : deactiveStyle;
          }}
        >위치 기반 미세먼지</NavLink>
      </NaviWrapper>

      <Routes>
        <Route path='/' element={<GlobalWeather/>}/>
        <Route path='/finedust' element={<Finedust/>}/>
      </Routes>
    </>
  );
};

export default NavWrapper;