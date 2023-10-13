import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home'
import Anime from '../components/Anime'
import Review from '../components/Reviews'
import MakeReview from '../components/MakeReview'
import SingleAnime from '../components/SingleAnime'
import EditReview from '../components/EditReview'
import Login from '../components/Home'
import AnimeAPI from '../components/AnimeAPI'
import AddAnime from '../components/AddAnime'
import Profiles from '../components/Profiles'

const routes = [
    {
        name: 'Home',
        path: '/nav',
        component: Home
    },
    {
        name: 'Profiles',
        path: '/profiles',
        component: Profiles
    },
    {
        name: 'Login',
        path: '/',
        component: Login
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
    {
        name: 'EditReview',
        path: '/review/edit/:id',
        component: EditReview
    },
    {
        name: 'AnimeAPI',
        path: '/anime/api',
        component: AnimeAPI
    },
    {
        name: 'AddAnime',
        path: '/anime/add',
        component: AddAnime
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;