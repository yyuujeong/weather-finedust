# 세계 날씨/위치 기반 미세먼지

![project-weather](https://github.com/user-attachments/assets/da724ce9-6286-44bc-a991-d4644cfc1f26)

세계 각 도시의 날씨와 사용자의 위치에 따른 미세먼지를 확인할 수 있는 서비스입니다.

- 1인 개발
- 기간: 2023.12 - 2024.02
- 배포 사이트: [사이트](https://weather-finedust.vercel.app)
- 기술: ```React``` ```styled-components``` ```Express``` ```Zustand``` ```Webpack``` ```Babel```

## :mag_right: 개발 내용
- Open API와 axios를 활용하여 날씨, 미세먼지, 사용자의 위치 정보를 불러옴
- Flexbox와 Grid, 미디어 쿼리로 다양한 디바이스에 유연하게 대응하며 최적화된 사용자 경험 제공
- 클라이언트에서의 API 키 노출 방지를 위해 Express로 서버 측 RESTful API를 작성하고 dotenv로 환경 변수 관리
- Zustand로 위치, 날씨, 미세먼지 및 역지오코딩 데이터 상태 관리
- Webpack과 Babel을 통해 번들링 및 최적화를 진행하여 페이지 로딩 시간을 약 3.4초 단축
- react-router-dom을 통해 페이지 이동을 구현하고 NavLink를 사용하여 활성 링크 스타일링 적용
- 시간대에 따라 변하는 배경화면을 제공하여 사용자의 시각적 경험 향상

### :point_right: 세계 날씨
- 세계 도시를 검색하여 날씨 정보 조회
### :point_right: 위치 기반 미세먼지
- Geolocation API를 이용해 사용자 위치 구함
- Reverse-Geocoding으로 위도와 경도 값을 주소로 변환
- 대기 상태를 직관적으로 표현하기 위해 이모지와 색상, 메시지 사용

### :rotating_light: 트러블 슈팅
```문제점```
- API 키 보호를 위해 .env 파일을 만들어 .gitignore에 추가했으나 여전히 네트워크 창에서 키 노출

```해결 방법```
- Express를 이용해 서버 측에서 RESTful API를 작성하고 dotenv를 사용하여 환경 변수 관리
- 서버를 Vercel에 배포하고 클라이언트는 서버를 통해서만 API 요청을 수행하도록 변경. 이를 통해 API 키는 서버 내에서만 사용되어 클라이언트에서의 노출 방지