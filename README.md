# 날씨 조회/위치 기반 미세먼지

### <https://weather-finedust.vercel.app>

## :hammer_and_pick: 기술
```React``` ```Styled-Components``` ```Express```

## :card_index_dividers: 프로젝트 소개
- 개인 프로젝트
- 리액트와 Express를 사용했고 Open API를 활용해 보고자 제작
- Vercel을 통해 배포

## :mag_right: 주요 기능
- styled-components로 스타일을 적용해 재사용성을 높임
- 시간대 별 배경화면 변화
- react-router를 이용한 페이지 이동 (특정 링크 스타일링을 위해 NavLink 사용)
- Open API를 사용하고 async & await와 axios로 API 호출
- 정보 조회를 위해 REST API를 구현하고, API 키를 보호하기 위해 Express 백엔드 프레임워크를 사용하여 개선
- 반응형 구현을 위해 미디어 쿼리를 사용

### :point_right: 날씨 조회
- 세계 도시를 검색하여 날씨 정보 조회
### :point_right: 위치 기반 미세먼지
- Geolocation API를 이용해 사용자 위치를 구함
- Reverse-Geocoding으로 위도와 경도 값을 주소로 변환
- 미세먼지 단계별 이모지 & 색상 변경
