# 세계 날씨 & 내 위치 미세먼지

![project-weather](https://github.com/user-attachments/assets/da724ce9-6286-44bc-a991-d4644cfc1f26)

전 세계 날씨 검색 및 위치 기반 미세먼지 정보 제공 서비스입니다.

- 1인 개발
- 기간: 2023.12 - 2024.02
- 배포 사이트: [사이트](https://weather-finedust.vercel.app)
- 기술: ```React``` ```styled-components``` ```Express``` ```Zustand``` ```Webpack``` ```Babel```

## :mag_right: 개발 내용
- Open API와 Axios로 날씨, 미세먼지, 위치 정보를 받아와 화면에 표시
- Flexbox, Grid, 미디어 쿼리로 다양한 디바이스에 최적화된 사용자 경험 제공
- Zustand로 위치, 날씨, 미세먼지, 역지오코딩 데이터 상태 관리
- Webpack, Babel로 번들링 및 최적화하여 로딩 시간 3.4초 단축
- react-router-dom을 통한한 페이지 이동 구현 및 NavLink로 활성 링크 스타일링
- 시간대별 배경화면 제공으로 시각적 경험 향상

### :point_right: 세계 날씨
- 세계 도시를 검색하여 날씨 정보 조회
### :point_right: 내 위치 미세먼지
- Geolocation API를 이용해 사용자 위치 확인
- Reverse-Geocoding으로 위도와 경도를 주소로 변환
- 이모지, 색상, 메시지로 직관적인 대기 상태 표현

### :rotating_light: 트러블 슈팅
```문제점```
- API 키 보호를 위한 .env 설정 후에도 키 노출 문제 발생

```해결 방법```
- Express 서버를 사용해 API 요청을 처리하고 클라이언트는 서버를 통해 요청하도록 리팩토링