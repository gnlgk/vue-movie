<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const searchResults = ref([])
const apikey = 'ac819c0bda1e124c88872adaf1b6d111'
const route = useRoute()

const searchMovies = async (query) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`)
        // Filter movies to include only those with a poster_path
        searchResults.value = response.data.results.filter(movie => movie.poster_path)
    } catch (error) {
        console.error(error)
    }
}

// 라우트의 쿼리 변경 감지
watchEffect(() => {
    const searchQuery = route.query.q
    if (searchQuery) {
        searchMovies(searchQuery)
    }
})
</script>


<template>
    <div class="search-results container">
        <section class="view__card style1">
            <h3>"{{route.query.q}}" 검색 결과입니다.</h3>
            <div class="card">
                <ul>
                    <li v-for="movie in searchResults" :key="movie.id">
                        <div class="movie__img">
                            <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" />
                            <v-icon class="icon__play" name="co-media-play" scale="1.4" @click="watchMovie(movie.id)"></v-icon>
                            <v-icon class="icon__desc" name="co-description" scale="1.4" @click="goToDetailPage(movie.id)"></v-icon>
                        </div>
                        <span>{{ movie.title }}</span>
                        <p>{{ movie.release_date }} </p>
                        <p>🎬 평점 : {{ parseFloat(movie.vote_average).toFixed(1) }}</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped>
.view__card {
    margin-top: 50px;

    h3 {
        font-family: var(--fontJ);
        font-weight: 300;
        margin-bottom: 10px;
        font-size: 26px;
    }
    .card {
        ul {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
    }
}
</style>
