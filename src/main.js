import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiFilm } from "oh-vue-icons/icons";
import { CoDescription, CoMediaPlay } from "oh-vue-icons/icons";



addIcons(BiFilm);
addIcons(CoDescription);
addIcons(CoMediaPlay);

const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(router)

app.mount('#app')
