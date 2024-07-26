# 날씨 조회/위치 기반 미세먼지

### <https://weather-finedust.vercel.app>

## :date: 기간
- 2023.12 - 2024.02

## :hammer_and_pick: 기술
```React``` ```styled-components``` ```Express``` ```Zustand``` ```Webpack``` ```Babel```

## :card_index_dividers: 프로젝트 소개
- 개인 프로젝트
- 리액트와 Express로 제작한 후, Vercel을 통해 배포

## :mag_right: 주요 기능
- Open API를 통해 RESTful한 방식으로 사용자의 위치와 날씨/대기 정보를 조회
- Express를 이용해 API 키를 서버 측에서 관리하여 클라이언트에서의 노출을 방지
- Zustand를 사용한 상태 관리와 웹팩, 바벨을 적용하여 페이지 로딩 시간을 약 3.4초 단축
- react-router를 통해 페이지 이동을 구현하고, 특정 링크의 스타일링을 위해 NavLink 사용
- 시간대에 따라 변하는 배경화면을 제공해 사용자의 시각적 경험을 향상

### :point_right: 날씨 조회
- 세계 도시를 검색하여 날씨 정보 조회
### :point_right: 위치 기반 미세먼지
- Geolocation API를 이용해 사용자 위치 구함
- Reverse-Geocoding으로 위도와 경도 값을 주소로 변환
- 대기 질 상태를 직관적으로 표현하기 위해 이모지와 색상, 메시지를 사용