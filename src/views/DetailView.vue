<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const movieId = route.params.id
const movieDetails = ref(null)
const cast = ref([])
const apikey = 'ac819c0bda1e124c88872adaf1b6d111'

const fetchMovieDetails = async () => {
    try {
        const response = await axios.get(
             `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&append_to_response=credits`
        )
        movieDetails.value = response.data
        cast.value = response.data.credits.cast.map(actor => ({
            id: actor.id,
            name: actor.name,
            character: actor.character,
            profile_path: actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : null
        }))
    } catch (error) {
        console.log(error)
    }
}

onMounted(fetchMovieDetails)
</script>

<template>
    <div>
        <div class="about" v-if="movieDetails">
            <div class="left">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path" :alt="movieDetails.title" class="movie-poster" />
            </div>
            <div class="right">
                <h1>{{ movieDetails.title }}</h1>
                <p class="date">{{ movieDetails.release_date }}</p>
                <p>{{ movieDetails.overview }}</p>
                <p>⭐ {{ parseFloat(movieDetails.vote_average).toFixed(1) }}</p>
                <div class="additional-info">
                    <p><strong>장르 :</strong> {{ movieDetails.genres.map(genre => genre.name).join(', ') }}</p>
                    <p><strong>감독 :</strong> {{ movieDetails.credits.crew.find(crew => crew.job === 'Director').name }}</p>
                    <p><strong>영화 시간 :</strong> {{ movieDetails.runtime }} 분</p>
                    <p><strong>국가 :</strong> {{ movieDetails.production_countries.map(country => country.name).join(', ') }}</p>
                </div>
                <h2>출연진</h2>
                <ul class="cast-list">
                    <li v-for="actor in cast" :key="actor.id">
                        <div class="actor-info">
                            <img v-if="actor.profile_path" :src="actor.profile_path" :alt="actor.name" class="actor-image" />
                            <div v-else class="no-image">이미지 없음</div>
                            <div class="actor-details">
                                <p class="actor-name">{{ actor.name }}</p>
                                <p class="actor-character">{{ actor.character }}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style>
.about {
    margin-top: 30px;
    padding: 20px;
    text-align: center;
    display: flex;

    .left {
        width: 40%;
    }
    .right {
        width: 60%;
        padding: 50px 30px 50px 30px;
        text-align-last: left;
        
        h1 {
            font-family: var(--fontJ);
            font-weight: 600;
            font-size: 5vh;
        }
        .date {
            color: #11111150;
            margin-bottom: 20px;
        }

        p {
            font-family: var(--fontJ);
            margin-bottom: 10px;
            font-size: 18px;
        }

        h2 {
            font-family: var(--fontJ);
            margin-top: 30px;
            font-size: 2.5vh;
            margin-bottom: 20px;
        }

        .cast-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            li {
                margin-right: 20px;
                margin-bottom: 20px;
                flex: 0 0 calc(33.33% - 20px);

                .actor-info {
                    display: flex;
                    flex-direction: column;

                    .actor-image {
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                        border-radius: 2%;
                        margin-right: 10px;
                    }

                    .actor-details {
                        p {
                            margin: 0;
                        }

                        .actor-name {
                            font-weight: bold;
                        }
                    }
                }
                /* 배우 이미지가 없는 경우 */
                .no-image {
                    width: 200px;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 2%;
                    margin-right: 10px;
                    padding: 90px 55px;
                }
            }
        }

        .additional-info {
            margin-top: 30px;
            p {
                font-family: var(--fontJ);
                margin-bottom: 10px;
                font-size: 18px;
            }
        }
    }
}

.movie-poster {
    max-width: 100%;
    max-height: 60vh;
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 30px;
}

</style>
