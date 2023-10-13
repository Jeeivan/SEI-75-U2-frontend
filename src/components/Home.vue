<template>
    <div class="home-page">
      <h1 class="page-title">Welcome to EverythingAnime!</h1>
      <p class="subtitle">Explore a world of anime and share your thoughts with the community.</p>
      <div v-if="isLoggedIn">
        <h2 class="welcome-message">Hello {{ userName }}!</h2>
        <button class="logout-button" @click="handleLogOut">Log Out</button>
    </div>
    <div v-else>
        <GoogleLogin :callback="callback" class="google-login" />
    </div>
    <img src="https://i.pinimg.com/originals/9b/ee/e5/9beee5ce7fb9623cb34f08b16b2ba363.jpg" alt="Anime Background" class="background-image" />
    </div>
  </template>
  
  

<script>
import { decodeCredential, googleLogout } from 'vue3-google-login'

        export default {
        name: 'HomeVue',
        data: () => ({
            isInit: false,
            isLoggedIn: false,
            userName: ''
        }),
        mounted() {
        // Below is checking if the cookie is there from when user has logged in before
        if (this.$cookies.isKey("user_session")) {
            this.isLoggedIn = true
            const userData = decodeCredential(this.$cookies.get('user_session'))
            this.userName = userData.given_name
        }
    },
    methods: {
        callback: function (response) {
            this.isLoggedIn = true
            const userData = decodeCredential(response.credential)
            console.log(userData); // userData is the value being given
            console.log(userData.picture);
            this.userName = userData.given_name
            this.$cookies.set('user_session', response.credential) // This creates a global cookie
            location.reload()
            fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: userData.email,
                    name: userData.given_name,
                    img: userData.picture
                })
            })
            .then(() => {
                console.log('session saved');
            })
        },
        handleLogOut: function () {
            googleLogout()
            this.$cookies.remove('user_session') // user_session is name of cookie
            this.isLoggedIn = false
            location.reload()
        }
    }
    }
</script>

<style scoped>
.background-image {
    max-width: 300px;
    margin: 30px;
}
.home-page {
  text-align: center;
  margin-top: 50px;
  background-color: beige; 
}

.page-title {
  font-size: 48px;
  color: #ff7b00;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 20px;
  color: #333;
  margin-bottom: 40px;
}

.create-review-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ff7b00;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  display: inline-block;
}

.create-review-button:hover {
  background-color: #ff6a00;
}

.welcome-message {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.logout-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ff7b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #ff6a00;
}

.google-login {
  margin-top: 20px;
}

</style>