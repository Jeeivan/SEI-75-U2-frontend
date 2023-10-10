<template>
    <div class="container">
    <h1>EverythingAnime</h1>
    <nav>
      <p>
        <button class="nav-button">
          <router-link :to="'/'" class="nav-link">Home</router-link>
        </button>
      </p>
      <p>
        <button class="nav-button">
          <router-link :to="'/anime'" class="nav-link">Animes</router-link>
        </button>
      </p>
      <p>
        <button class="nav-button">
          <router-link :to="'/reviews'" class="nav-link">Reviews</router-link>
        </button>
      </p>
      <div v-if="isLoggedIn">
        <p>
          <button class="nav-button">
            <router-link :to="'/reviews/create'" class="nav-link">Create a Review</router-link>
          </button>
        </p>
      </div>
    </nav>
    </div>
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
    .container {
        background-color: lightcyan;
    }

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .nav-button {
    padding: 10px 20px;
    margin: 0;
    background-color: #ff7b00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  .nav-button:hover {
  background-color: lightsalmon;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

  .nav-link {
    text-decoration: none;
    color: inherit;
  }
</style>