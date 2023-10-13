<template>
    <div class="container">
      <h1>EverythingAnime</h1>
      <nav>
        <div v-for="item in navItems" :key="item.text" class="nav-button">
          <router-link :to="item.link" class="nav-link">
            <span class="icon">{{ item.icon }}</span>
            {{ item.text }}
          </router-link>
        </div>
        <div v-if="isLoggedIn" class="profile-container">
          <img :src="userImage" alt="Profile Image" class="profile" />
          <span class="user-name">{{ userName }}</span>
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
      userName: '',
      userImage: '',
      navItems: [
        { text: 'Home', link: '/', icon: '🏠' },
        { text: 'Animes', link: '/anime', icon: '📺' },
        { text: 'Reviews', link: '/reviews', icon: '📝' },
        { text: 'Anime News', link: '/anime/api', icon: '📰' },
        { text: 'Profiles', link: '/profiles', icon: '👨🏾' },
        { text: 'Create a Review', link: '/reviews/create', icon: '➕' },
        { text: 'Add an Anime', link: '/anime/add', icon: '➕' },
      ]
    }),
    mounted() {
      if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true;
        const userData = decodeCredential(this.$cookies.get('user_session'));
        this.userName = userData.given_name;
        this.userImage = userData.picture;
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    background-color: beige;
  }
  
  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .nav-button {
    position: relative;
    padding: 10px 20px;
    margin: 0;
    background-color: #ff7b00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    text-transform: uppercase;
  }
  
  .nav-button:hover {
    background-color: lightsalmon;
  }
  
  .nav-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
  }
  
  .icon {
    margin-right: 8px;
    border-radius: 25%;
  }
  
  .profile-container {
    display: flex;
    align-items: center;
  }
  
  .profile {
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-right: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .user-name {
    font-size: 20px;
    color: #333;
  }
  </style>
  