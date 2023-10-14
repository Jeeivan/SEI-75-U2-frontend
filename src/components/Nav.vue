<template>
  <div class="container">
    <h1>EverythingAnime</h1>
    <nav class="nav-container">
      <div class="nav-button">
        <router-link to="/" class="nav-link">
          <span class="icon">🏠</span>
          Home
        </router-link>
      </div>

      <div class="nav-button">
        <router-link to="/anime" class="nav-link">
          <span class="icon">📺</span>
          Animes
        </router-link>
      </div>

      <div class="nav-button">
        <router-link to="/reviews" class="nav-link">
          <span class="icon">📝</span>
          Reviews
        </router-link>
      </div>

      <div class="nav-button">
        <router-link to="/anime/api" class="nav-link">
          <span class="icon">📰</span>
          Anime News
        </router-link>
      </div>

      <div class="nav-button">
        <router-link to="/profiles" class="nav-link">
          <span class="icon">👨🏾</span>
          Profiles
        </router-link>
      </div>

      <div v-if="isLoggedIn" class="profile-container">
        <div class="nav-button">
          <router-link to="/reviews/create" class="nav-link">
            <span class="icon">➕</span>
            Create a Review
          </router-link>
        </div>
        <div class="nav-button">
          <router-link to="/anime/add" class="nav-link">
            <span class="icon">➕</span>
            Add an Anime
          </router-link>
        </div>
        <img :src="userImage" alt="Profile Image" class="profile" />
        <span class="user-name">{{ userName }}</span>
      </div>
    </nav>
  </div>
</template>

<script>
import { decodeCredential } from "vue3-google-login";

export default {
  name: "NavVue",
  data: () => ({
    isInit: false,
    isLoggedIn: false,
    userName: "",
    userImage: "",
  }),
  mounted() {
    if (this.$cookies.isKey("user_session")) {
      this.isLoggedIn = true;
      const userData = decodeCredential(this.$cookies.get("user_session"));
      this.userName = userData.given_name;
      this.userImage = userData.picture;
    }
  },
};
</script>

<style scoped>
.container {
  background-color: beige;
}

.nav-container {
  display: flex;
  justify-content: space-between;
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
  justify-content: space-evenly;
}

.profile-container .nav-button {
  margin-right: 20px;
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
