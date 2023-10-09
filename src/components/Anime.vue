<template>
    <h1>ANIMES</h1>
    <!-- <NavVue /> -->
    <div>
        <div v-for='anime in animes' :key="anime._id">
            <p><router-link :to="'/anime/' + anime._id" ><h1>{{ anime.name }}</h1></router-link></p></div>
    </div>
</template>

<script>
// import NavVue from '../components/Nav.vue'
export default {
    name: 'AnimeVue',
    data: () => ({
        error: '',
        animes: [],
    }),
    mounted() {
        fetch('http://localhost:4000/anime')
            .then((response) => response.json())
            .then((result) => {
                this.animes = result;
            })
            .catch((error) => {
                this.error = 'Error fetching data: ' + error;
            });
    },
    methods: {},
//     components: {
//     NavVue
// }
};
</script>
