import './assets/main.css'

import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import GetSnippet from './components/GetSnippet/GetSnippet.vue'

const app = createApp(App)


const routes: VueRouter.RouteRecordRaw[] = [
    {path: '/', component: Home, name: "home",},
    {path: '/snippet/:id', component: GetSnippet, name: "snippet", strict: true},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

app.use(router)

app.mount('#app')
