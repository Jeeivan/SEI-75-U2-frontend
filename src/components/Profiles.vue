<template>
    <div class="profiles-container">
      <h1>Profiles</h1>
      <p>A massive thanks to all users have made use of this site. We hope you have enjoyed yourself.</p>
      <div class="row">
        <div v-for='profile in profiles' :key="profile._id" class="col-lg-4 mb-4">
          <div class="card">
            <div class="card-body text-center">
              <img :src="profile.img" class="profile-picture" alt="Profile Picture">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.userEmail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfileVue",
    data: () => ({
      error: "",
      profiles: [],
    }),
    mounted() {
      fetch("http://localhost:4000/profiles")
        .then((response) => response.json())
        .then((result) => {
          this.profiles = result;
        })
        .catch((error) => {
          this.error = "Error fetching data: " + error;
        });
    },
    methods: {},
  };
  </script>
  
  <style scoped>
  .profiles-container {
    padding: 20px;
  }
  
  .card {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    background-color: beige;
  }
  
  .profile-picture {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px; /* Added margin for spacing */
  }

  p {
    font-size: 20px;
  }
  </style>
  