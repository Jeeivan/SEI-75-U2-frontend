<template>
  <div class="login-container">
    <h1 class="page-title">Login page</h1>
    <div v-if="isLoggedIn" class="user-info">
      <h2>Hello {{ userName }}</h2>
      <button class="btn btn-primary" @click="handleLogOut">Log Out</button>
    </div>
    <div v-else class="login-form">
      <GoogleLogin :callback="callback" />
    </div>
  </div>
</template>
<script>
import { decodeCredential, googleLogout } from "vue3-google-login";
export default {
  name: "LoginForm",
  data: () => ({
    isInit: false,
    isLoggedIn: false,
    userName: "",
  }),
  mounted() {
    if (this.$cookies.isKey("user_session")) {
      this.isLoggedIn = true;
      const userData = decodeCredential(this.$cookies.get("user_session"));
      this.userName = userData.given_name;
    }
  },
  methods: {
    callback: function (response) {
      this.isLoggedIn = true;
      const userData = decodeCredential(response.credential);
      // console.log(userData);
      this.userName = userData.given_name;
      this.$cookies.set("user_session", response.credential);
      location.reload();
      fetch(`${process.env.VUE_APP_BACKEND_API}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
        }),
      }).then(() => {
        console.log("session saved");
      });
    },
    handleLogOut: function () {
      googleLogout();
      this.$cookies.remove("user_session");
      this.isLoggedIn = false;
      location.reload();
    },
  },
};
</script>
