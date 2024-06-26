<template>
  <main id="main" role="main">
    <div class="view__inner container">
      <!-- 최신 영화 섹션 -->
      <section class="view__card style1">
        <h3>최신 영화</h3>
        <div class="card">
          <ul>
            <li v-for="movie in latestMovies" :key="movie.id">
              <div class="movie__img">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" />
                <v-icon class="icon__play" name="co-media-play" scale="1.4" @click="watchMovie(movie.id)"></v-icon>
                <v-icon class="icon__desc" name="co-description" scale="1.4" @click="goToDetailPage(movie.id)"></v-icon>
              </div>
              <span>{{ movie.title }}</span>
              <p>{{ movie.release_date }}</p>
              <p>🎬 평점 : {{ parseFloat(movie.vote_average).toFixed(1) }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- 호러 영화 섹션 -->
      <section class="pop__card style1" ref="horrorMoviesSection">
        <h3>호러 영화</h3>
        <Swiper
          :slides-per-view="4"
          :space-between="30"
          :autoplay="{ delay: 2800, disableOnInteraction: false }"
          :loop="true"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="[Autoplay, Navigation]"
          class="mySwiper"
        >
          <SwiperSlide v-for="movie in horrorMovies" :key="movie.id">
            <div class="movie__img">
              <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" :alt="movie.title" />
              <v-icon class="icon__play" name="co-media-play" scale="1.4" @click="watchMovie(movie.id)"></v-icon>
              <v-icon class="icon__desc" name="co-description" scale="1.4" @click="goToDetailPage(movie.id)"></v-icon>
            </div>
            <span>{{ movie.title }}</span>
            <p>{{ movie.release_date }}</p>
            <p>🎬 평점 : {{ parseFloat(movie.vote_average).toFixed(1) }}</p>
          </SwiperSlide>
        </Swiper>
      </section>

      <!-- 액션 영화 섹션 -->
      <section class="pop__card style1" ref="actionMoviesSection">
        <h3>액션 영화</h3>
        <Swiper
          :slides-per-view="4"
          :space-between="30"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :loop="true"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="[Autoplay, Navigation]"
          class="mySwiper"
        >
          <SwiperSlide v-for="movie in actionMovies" :key="movie.id">
            <div class="movie__img">
              <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" :alt="movie.title" />
              <v-icon class="icon__play" name="co-media-play" scale="1.4" @click="watchMovie(movie.id)"></v-icon>
              <v-icon class="icon__desc" name="co-description" scale="1.4" @click="goToDetailPage(movie.id)"></v-icon>
            </div>
            <span>{{ movie.title }}</span>
            <p>{{ movie.release_date }}</p>
            <p>🎬 평점 : {{ parseFloat(movie.vote_average).toFixed(1) }}</p>
          </SwiperSlide>
        </Swiper>
      </section>

      <!-- 애니메이션 영화 섹션 -->
      <section class="pop__card style1" ref="animationMoviesSection">
        <h3>애니메이션 영화</h3>
        <Swiper
          :slides-per-view="4"
          :space-between="30"
          :autoplay="{ delay: 2800, disableOnInteraction: false }"
          :loop="true"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="[Autoplay, Navigation]"
          class="mySwiper"
        >
          <SwiperSlide v-for="movie in animationMovies" :key="movie.id">
            <div class="movie__img">
              <img :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path" :alt="movie.title" />
              <v-icon class="icon__play" name="co-media-play" scale="1.4" @click="watchMovie(movie.id)"></v-icon>
              <v-icon class="icon__desc" name="co-description" scale="1.4" @click="goToDetailPage(movie.id)"></v-icon>
            </div>
            <span>{{ movie.title }}</span>
            <p>{{ movie.release_date }}</p>
            <p>🎬 평점 : {{ parseFloat(movie.vote_average).toFixed(1) }}</p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  </main>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'

const router = useRouter()
const apikey = 'ac819c0bda1e124c88872adaf1b6d111'
const latestMovies = ref([])
const horrorMovies = ref([])
const actionMovies = ref([])
const animationMovies = ref([])

const fetchMovies = async (endpoint, targetRef) => {
  try {
    const response = await axios.get(endpoint)
    targetRef.value = response.data.results
  } catch (error) {
    console.error(error)
  }
}

const goToDetailPage = (id) => {
  router.push({ name: 'detail', params: { id } })
}

const watchMovie = (id) => {
  router.push({ name: 'WatchView', params: { id } })
}

onMounted(() => {
  fetchMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=1`, latestMovies)
  fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=27&page=1`, horrorMovies)
  fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=28&page=1`, actionMovies)
  fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&with_genres=16&page=1`, animationMovies)
})
</script>


<style scoped>
/* 공통 스타일 */
.card {
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 20px;

    li {
      border: 1px solid var(--black100);
      border-radius: 10px;
      overflow: hidden;
      padding: 15px;

      .movie__img {
        position: relative;
        img {
          border-radius: 10px;
          width: 100%;
        }
        svg {
          width: 40px;
          height: 40px;
          background-color: #00000085;
          color: var(--white);
          padding: 5px;
          border-radius: 50%;
          position: absolute;
          top: 40%;
          &:hover {
            opacity: 0.7;
          }
        }
        .icon__play {
          left: 30%;
        }
        .icon__desc {
          left: 58%;
        }
      }

      span {
        padding: 1rem;
        display: block;
        font-family: var(--fontJ);
      }
      p {
        font-size: 14px;
        padding: 0 1rem;
        display: block;
        font-family: var(--fontJ);
        text-align: right;
      }
    }
  }
  @media screen and (max-width: 1200px) {
      ul {
        grid-template-columns: repeat(3, 1fr);
      }
  }
  @media screen and (max-width: 1024px) {
      ul {
        grid-template-columns: repeat(2, 1fr);
      }
  }
  @media screen and (max-width: 768px) {
      ul {
        grid-template-columns: repeat(1, 1fr);
      }
  }
}

/* Latest Movies Section */
.view__card {
  margin-top: 50px;

  h3 {
    font-family: var(--fontJ);
    font-weight: 300;
    margin-bottom: 10px;
    font-size: 26px;
  }
}

/* Pop Card */
.pop__card {
  margin-top: 50px;

  h3 {
    font-family: var(--fontJ);
    font-weight: 300;
    margin-bottom: 10px;
    font-size: 26px;
  }

  .mySwiper {

    .swiper-wrapper {
      display: flex;
      width: 100%;
    }

    .swiper-slide {
      flex: 0 0 auto;
      width: calc(25% - 15px); /* 4개씩 보여줄 것이므로, 25%의 너비 설정 */
      margin-bottom: 20px; /* 슬라이드 아래 여백 추가 */
      margin-right: 20px;
      box-sizing: border-box; /* 요소의 너비와 높이에 패딩 및 테두리를 포함하도록 설정 */
      border: 1px solid var(--black100);
      border-radius: 10px;
      overflow: hidden;
      padding: 15px;

      .movie__img {
        position: relative;
        img {
          border-radius: 10px;
          width: 100%;
        }
        svg {
          width: 40px;
          height: 40px;
          background-color: #00000085;
          color: var(--white);
          padding: 5px;
          border-radius: 50%;
          position: absolute;
          top: 40%;
          &:hover {
            opacity: 0.7;
          }
        }
        .icon__play {
          left: 30%;
        }
        .icon__desc {
          left: 58%;
        }
      }

      span {
        padding: 1rem;
        display: block;
        font-family: var(--fontJ);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
      }
      p {
        font-size: 14px;
        padding: 0 1rem;
        display: block;
        font-family: var(--fontJ);
        text-align: right;
      }
    }
    @media screen and (max-width: 1200px) {
      .swiper-slide {
        width: calc(33% - 15px) !important; /* 3개씩 보여줄 것이므로, 33.33%의 너비 설정 */
      }
    }

    @media screen and (max-width: 1024px) {
      .swiper-slide {
        width: calc(50% - 15px)  !important; /* 2개씩 보여줄 것이므로, 50%의 너비 설정 */
      }
    }

    @media screen and (max-width: 768px) {
      .swiper-slide {
        width: 100%  !important; /* 1개씩 보여줄 것이므로, 100%의 너비 설정 */
      }
    }
  }
}
</style>
