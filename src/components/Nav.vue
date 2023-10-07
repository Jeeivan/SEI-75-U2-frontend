<template>
    <nav>
        <p><button><router-link :to="'/'" >Home</router-link></button></p>
        <p><button><router-link :to="'/anime'" >Animes</router-link></button></p>
        <p><button><router-link :to="'/reviews'" >Reviews</router-link></button></p>
        <p><button><router-link :to="'/reviews/create'" >Create a Review</router-link></button></p>
    </nav>
</template>

<script>
        export default {
        name: 'NavVue',
        data: () => ({
            error: '',
        })
    }
</script>

<style>
    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>