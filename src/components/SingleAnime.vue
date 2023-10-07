<template>
    <NavVue />
    <div>
        <h1>{{ animes?.anime?.name }}</h1>
    </div>
</template>
<script>
import NavVue from '../components/Nav.vue'
import { useRoute } from 'vue-router'

export default {
    name: 'SingleAnimeVue',
    data: () => ({
        error: '',
        animes: {},
        id: ''
    }),
    mounted() {
        const route = useRoute()
        fetch(`http://localhost:4000/anime/${route.params.id}`)
            .then((response) => response.json())
            .then((result) => {
                this.animes = result
                this.id = route.params.id
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