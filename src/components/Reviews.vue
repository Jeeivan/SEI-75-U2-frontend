<template>
    <h1>REVIEWS</h1>
    <NavVue />
    <div>
    <div v-for='review in reviews' :key="review._id">
            <h1>Anime Title-{{ review.name }}</h1>
            <h1>Date of Review-{{ review.date }}</h1>
            <h1>Rating-{{ review.rating }}</h1>
            <h1>Thoughts-{{ review.text }}</h1>
            <br>
        </div>
    </div>
</template>

<script>
import NavVue from '../components/Nav.vue'
export default {
    name: 'ReviewVue',
    data: () => ({
        error: '',
        reviews: [],
    }),
    mounted() {
        fetch('http://localhost:4000/reviews')
            .then((response) => response.json())
            .then((result) => {
                this.reviews = result;
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {},
    components: {
    NavVue
}
};
</script>