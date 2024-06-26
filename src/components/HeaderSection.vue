<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const searchQuery = ref('')

const handleSearch = () => {
    if (searchQuery.value.trim()) {
        router.push({ name: 'search', query: { q: searchQuery.value } })
    }
}

const goToHome = () => {
    router.push({ name: 'home' })
}
</script>

<template>
    <header id="header" role="banner">
        <div class="header__inner">
            <h1 @click="goToHome"><span>Movie</span>View</h1>
            <div class="menu"></div>
            <div class="search">
                <input type="search" v-model="searchQuery" />
                <button @click="handleSearch">검색</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header__inner {
    background-color: var(--black100);
    padding: 40px;
    text-align: center;

    h1 {
        color: var(--white);
        text-transform: uppercase;
        margin-bottom: 30px;
        font-size: 4vh;
        cursor: pointer;
    }

    .search {
        width: 100%;
        input {
            width: 20rem;
            background-color: var(--black100);
            border: 1px solid var(--white);
            padding: 10px 20px;
            border-radius: 5px;
            margin-right: 10px;
            color: var(--white);
        }
        button {
            background-color: var(--black100);
            color: var(--white);
            border: 1px solid var(--white);
            padding: 10px 20px;
            border-radius: 5px;
            margin-right: 10px;
            transition: all 0.3s;

            &:hover {
                background-color: var(--white);
                color: var(--black100);
            }
        }
    }
}
</style>
