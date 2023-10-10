<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
  </head>
  <NavVue />
  <main>
    <router-view :key="$route.path" />
  </main>
</template>

<script>
import NavVue from './components/Nav.vue'
  import { decodeCredential } from 'vue3-google-login';
export default {
  name: 'App',
  data: () => ({
            isInit: false,
            isLoggedIn: false,
            userName: '',
            userEmail: ''
        }),
  mounted() {
      if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true;
        const userData = decodeCredential(this.$cookies.get('user_session'));
        this.userName = userData.given_name;
        this.userEmail = userData.email
      }
    },
    components: {
    NavVue
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  font-family: 'Bangers', cursive;
}

body {
  background-color: lightcyan;
}
</style>
