<template>
    <div>
        <img :src="animes?.anime?.imageURL" alt="An image">
        <h1>{{ animes?.anime?.name }}</h1>
        <p>{{ animes?.anime?.description }}</p>
        <br>
        <h2>Reviews</h2>
        <div v-for="review in reviews" :key="review._id">
            <p>Date of Review - {{ review.date }}</p>
            <p>Rating - {{ review.rating }}/5</p>
            <p>Thoughts - {{ review.text }}</p>
            <br>
            <button @click="deleteReview(review._id)">Delete Review</button>
            <p><router-link :to="`/review/edit/${id}`"><button>Edit Review</button></router-link></p>
        </div>
        <!-- <div v-if="reviews.length > 0">
            <h2>Reviews</h2>
            <ul>
                <li v-for="review in reviews" :key="review._id">
                    <p>{{ review }}</p>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No reviews available for this anime.</p>
        </div> -->
    </div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
    name: 'SingleAnimeVue',
    data: () => ({
        error: '',
        animes: {},
        reviews: [],
        id: ''
    }),
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:4000/anime/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
                this.animes = result
                this.id = route.params.id
                this.fetchReviews()
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {
        fetchReviews() {
            fetch(`http://localhost:4000/${this.id}/reviews`)
                .then((response) => response.json())
                .then((result) => {
                    this.reviews = result;
                })
                .catch((error) => {
                    console.error('Error fetching reviews:', error);
                });
        },
        deleteReview(reviewId) {
        fetch(`http://localhost:4000/review/${reviewId}`, {
            method: "DELETE",
        })
        .then(() => {
            this.fetchReviews();
        })
        .catch((error) => {
            console.error("Error deleting review:", error);
        });
    }
    },
};
</script>

<style>
    img {
        max-width: 300px;
        height: auto;
        margin: 15px;
    }
    p {
        font-size: 25px;
        margin: 70px;
    }
</style>