import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home'
import Anime from '../components/Anime'
import Review from '../components/Reviews'
import MakeReview from '../components/MakeReview'
import SingleAnime from '../components/SingleAnime'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Anime',
        path: '/anime',
        component: Anime
    },
    {
        name: 'SingleAnime',
        path: '/anime/:id',
        component: SingleAnime
    },
    {
        name: 'Review',
        path: '/reviews',
        component: Review
    },
    {
        name: 'MakeReview',
        path: '/reviews/create',
        component: MakeReview
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;