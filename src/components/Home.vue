<template>
    <h1>EverythingAnime</h1>
    <p><button><router-link :to="'/anime'" >Animes</router-link></button></p>
    <p><button><router-link :to="'/reviews'" >Reviews</router-link></button></p>
    <p><button><router-link :to="'/reviews/create'" >Create a Review</router-link></button></p>
    <div v-if="isLoggedIn">
        <h2>Hello {{ userName }}</h2>
        <button class="btn btn-primary" @click="handleLogOut">Log Out</button>
    </div>
    <div v-else>
        <GoogleLogin :callback="callback" />
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
            this.userName = userData.given_name
            this.$cookies.set('user_session', response.credential) // This creates a global cookie
            fetch('http://localhost:4000/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: userData.email
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
        }
    }
    }
</script>