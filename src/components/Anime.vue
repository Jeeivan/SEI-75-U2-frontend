<template>
    <div class="anime-list">
      <h1 class="page-title">ANIMES</h1>
      <div class="anime-container">
        <div v-for='anime in animes' :key="anime._id" class="anime-card">
          <router-link :to="'/anime/' + anime._id">
            <div class="anime-image">
              <img :src="anime.imageURL" alt="Anime Cover">
            </div>
            <h2 class="anime-title">{{ anime.name }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimeVue',
    data: () => ({
      error: '',
      animes: [],
    }),
    mounted() {
      fetch('http://localhost:4000/anime')
        .then((response) => response.json())
        .then((result) => {
          this.animes = result;
        })
        .catch((error) => {
          this.error = 'Error fetching data: ' + error;
        });
    },
    methods: {},
  };
  </script>
  
  <style scoped>
  .anime-list {
    max-width: 1200px;
    margin: 0 auto; 
    padding: 20px;
  }
  
  .page-title {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .anime-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center; 
  }
  
  .anime-card {
    flex: 0 0 calc(20% - 20px);
    background-color: beige;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .anime-card:hover {
    transform: scale(1.05);
  }
  
  .anime-image img {
    max-width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .anime-title {
    font-size: 24px;
    color: #333;
    margin: 10px;
  }
  
  .router-link {
    text-decoration: none;
    color: inherit;
  }
  </style>
  
