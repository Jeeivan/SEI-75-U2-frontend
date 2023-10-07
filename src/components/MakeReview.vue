<template>
    <h1>MAKE A REVIEW</h1>
    <NavVue />
    <p><input v-model="review.name" type="text" placeholder="Anime title"><br></p>
    <p><input v-model="review.date" type="text" name="date" placeholder="Today's Date"></p>
    <p><input v-model="review.rating" type="text" placeholder="Anime Rating 1-5"><br></p>
    <p><input v-model="review.text" type="text" placeholder="Your Thoughts"><br></p>
    <p><button v-on:click="saveReview">Save Review</button></p>
</template>

<script>
import NavVue from '../components/Nav.vue'
        export default {
        name: 'MakeReviewVue',
        data: () => ({
            error: '',
            review: {
            name: '',
            date:'',
            rating:'',
            text: ''
        }
        }),
        methods: {
        saveReview: function () {
            console.log(`New Review ${this.review.name} - ${this.review.date} - ${this.review.rating} - ${this.review.text}`);
            fetch('http://localhost:4000/addAnime', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: this.review.name,
                    date: this.review.date,
                    rating: this.review.rating,
                    text: this.review.text
                })
            })
            .then(res => {
                console.log(res.status)
                this.review.name = ''
                this.review.date = ''
                this.review.rating = ''
                this.review.text = ''
            })
        }
    },
        components: {
            NavVue
        }
    }
</script>