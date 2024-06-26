<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const id = route.params.id
const movieDetails = ref(null)
const videoKey = ref(null)
const apikey = 'ac819c0bda1e124c88872adaf1b6d111'

const fetchMovieDetails = async () => {
    try {
        // 영화 정보 가져오기
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
        )
        movieDetails.value = response.data

        // 영화의 동영상 가져오기 (예시로 트레일러를 가져옴)
        const videoResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}`
        )
        if (videoResponse.data.results.length > 0) {
            videoKey.value = videoResponse.data.results[0].key
        }
    } catch (error) {
        console.log(error)
    }
}

onMounted(fetchMovieDetails)
</script>

<template>
    <div>
        <div class="watch" v-if="movieDetails">
            <div v-if="videoKey" class="video-container">
                <iframe width="1120" height="630" :src="'https://www.youtube.com/embed/' + videoKey" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p v-else>No trailer available</p>
            <h1>{{ movieDetails.title }}</h1>
            <p>⭐ {{ parseFloat(movieDetails.vote_average).toFixed(1) }}</p>
            <!-- 동영상 플레이어 -->
            
        </div>
    </div>
</template>

<style>
.watch {
    margin-top: 30px;
    padding: 20px;
    text-align: center;

    h1 {
        font-family: var(--fontJ);
        font-weight: 600;
        font-size: 5vh;
    }
    
    p {
        font-family: var(--fontJ);
        margin-bottom: 10px;
        font-size: 18px;
    }
}

.movie-poster {
    max-width: 100%;
    max-height: 60vh;
    object-fit: contain;
    border-radius: 10px;
    margin: 20px;
}

.video-container {
    margin-top: 20px;
}
</style>
