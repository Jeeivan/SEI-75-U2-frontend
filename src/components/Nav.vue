<template>
        <h1>EverythingAnime</h1>
    <nav>
        <p><button><router-link :to="'/'" >Home</router-link></button></p>
        <p><button><router-link :to="'/anime'" >Animes</router-link></button></p>
        <p><button><router-link :to="'/reviews'" >Reviews</router-link></button></p>
        <div v-if="isLoggedIn">
      <p><button><router-link :to="'/reviews/create'" >Create a Review</router-link></button></p>
      </div>
    </nav>
</template>

<script>
import { decodeCredential } from 'vue3-google-login';
        export default {
        name: 'NavVue',
        data: () => ({
            isInit: false,
            isLoggedIn: false,
            userName: ''
        }),
  mounted() {
      if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true;
        const userData = decodeCredential(this.$cookies.get('user_session'));
        this.userName = userData.given_name;
      }
    },
    }
</script>

<style>
    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
</style>