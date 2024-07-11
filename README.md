# 날씨 조회/위치 기반 미세먼지

### <https://weather-finedust.vercel.app>

## :date: 기간
- 2023.12 - 2024.02

## :hammer_and_pick: 기술
```React``` ```styled-components``` ```Express```

## :card_index_dividers: 프로젝트 소개
- 개인 프로젝트
- 리액트와 Express를 사용했고 Open API를 활용해 보고자 제작
- Vercel을 통해 배포

## :mag_right: 주요 기능
- styled-components로 스타일을 적용해 재사용성을 높임
- 시간대 별 배경화면 변화
- react-router를 이용한 페이지 이동 (특정 링크 스타일링을 위해 NavLink 사용)
- Open API를 통해 RESTful한 API를 사용하여 사용자의 위치와 날씨/대기 정보를 조회
- 클라이언트 측에서 API 키가 노출되지 않도록 보호하기 위해 Express 백엔드 프레임워크를 사용하여 임시 서버 구축
- 미디어 쿼리를 사용해 반응형 웹 구현

### :point_right: 날씨 조회
- 세계 도시를 검색하여 날씨 정보 조회
### :point_right: 위치 기반 미세먼지
- Geolocation API를 이용해 사용자 위치 구함
- Reverse-Geocoding으로 위도와 경도 값을 주소로 변환
- 대기 질 상태를 직관적으로 표현하기 위해 이모지와 색상, 메시지를 사용하여 사용자 경험 개선
