# API를 이용한 영화 소개 사이트

본 프로젝트는 Vue.js와 TMDB(The Movie Database) API를 이용하여 구축한 영화 소개 사이트입니다. 이를 통해 사용자는 영화 모음을 탐색하고, 각 영화에 대한 세부 정보를 보고, 출연진에 대한 정보를 탐색할 수 있습니다.

## Function

* 영화 탐색 및 최신 정보 제공 : TMDB API를 통해 실시간으로 업데이트되는 영화 정보를 제공합니다. 이를 통해 사용자는 항상 최신 영화 소식을 받아볼 수 있습니다. 장르별로 분류된 영화 모음을 탐색할 수 있습니다.
* 영화 트레일러 보기 : 영화 트레일러를 시청할 수 있는 기능을 제공합니다. 사용자는 영화의 미리보기를 통해 영화의 분위기나 스토리를 간략하게 파악할 수 있습니다.
* 영화 정보 보기 : 각 영화에 대한 제목, 개봉일, 평점, 장르, 영화시간 등 자세한 정보가 제공됩니다. 사용자는 이름, 캐릭터, 프로필 이미지를 포함하여 각 영화의 출연진에 대한 정보를 탐색할 수 있습니다.
* 영화 검색 : 사용자는 영화 제목이나 장르를 기반으로 영화를 검색할 수 있습니다. 이를 통해 사용자는 자신이 원하는 영화를 빠르게 찾아볼 수 있습니다.
* 반응형 디자인 : 반응형 디자인을 통해 데스크톱, 태블릿, 스마트폰 등 다양한 기기에서 원활한 사용자 경험을 제공합니다. 어떤 기기를 사용하더라도 편리하게 영화 정보를 탐색할 수 있습니다.

## Stack

* Vue.js: 사용자 인터페이스를 구축하고 동적으로 데이터를 처리하는 데 사용됩니다. Vue.js를 활용하여 웹 애플리케이션을 구축함으로써 사용자에게 뛰어난 성능과 반응성을 제공합니다.
* Axios: TMDB API와의 통신을 위해 사용됩니다. Axios를 통해 HTTP 요청을 보내고 응답을 처리하여 영화 데이터를 얻어옵니다.
* CSS: 웹 사이트의 스타일링을 담당합니다. CSS를 통해 사용자에게 시각적으로 매력적인 디자인을 제공하여 사용자 경험을 향상시킵니다.
* TMDB API: 영화 정보를 가져오기 위한 주요 데이터 소스로 사용됩니다. TMDB API를 통해 영화의 제목, 개봉일, 평점, 장르 등의 정보를 얻어옵니다.

## Project Setup

1. 설치 및 실행
```sh
npm init vue@latest
npm install
npm run dev
```

2. 패키지 설치
```sh
npm i scss
npm i axios
npm i swiper
npm i vue-router
npm i oh-vue-icons
```

3. 빌드
```sh
npm run build
```

## Design

* 메인페이지
![image](https://github.com/gnlgk/vue-movie/assets/161431748/ec839b78-c34b-4b97-9b00-315e3b4775ff)

* 트레일러
![image](https://github.com/gnlgk/vue-movie/assets/161431748/f4e495d6-f902-43a0-8525-def24a59fee8)

* 세부정보
![image](https://github.com/gnlgk/vue-movie/assets/161431748/a670b1ad-a9dd-469b-8ddd-5402df07aabb)

* 검색
![image](https://github.com/gnlgk/vue-movie/assets/161431748/0cc8ac8c-f549-4d08-ac43-d96cc8674cb6)





