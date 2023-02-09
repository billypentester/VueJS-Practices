import { createRouter, createWebHistory } from 'vue-router'
import SignUp from './../components/SignUp.vue'
import ResultState from '../components/ResultState.vue'
import Home from './../components/Home.vue'
import Demo from './../components/Demo.vue'

const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Demo },
      { path: '/home', component: Home },
      { path: '/signup', component: SignUp },
      { path: '/result', component: ResultState }
    ]
})

export default router;
