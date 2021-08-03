import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'

fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users=>{
    store.commit('loadUsers', users.slice(0,5));
})

createApp(App).use(store).use(router).mount('#app')
