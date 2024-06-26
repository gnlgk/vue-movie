import { createRouter, createWebHistory } from 'vue-router'
import DetailView from '../views/DetailView.vue'
import HomeView from '../views/HomeView.vue'
import WatchView from '../views/WatchView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/movie/:id',
            name: 'detail',
            component: DetailView,
            props: true
        },
        {
          path: '/watch/:id',
          name: 'WatchView',
          component: WatchView
        },
        {
            path: '/search',
            name: 'search',
            component: SearchView
        }
    ]
})

export default router
