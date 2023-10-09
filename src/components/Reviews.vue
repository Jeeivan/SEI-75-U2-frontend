<template>
    <h1>REVIEWS</h1>
    <div>
    <div v-for='review in reviews' :key="review._id">
            <h1>Anime Title - {{ review.title.name }}</h1>
            <h1>Date of Review - {{ review.date }}</h1>
            <h1>Rating - {{ review.rating }}/5</h1>
            <h1>Thoughts - {{ review.text }}</h1>
            <br>
        </div>
    </div>
</template>

<script>
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
};
</script>