<template>
    <div class="anime-news">
      <h1>Anime News</h1>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-else class="news-grid">
        <div v-for="newsItem in animeNews" :key="newsItem.id" class="news-card">
          <div class="news-content">
              <p class="news-date">{{ formatDate(newsItem.article.date) }}</p>
            <h2 class="news-title">{{ newsItem.article.title }}</h2>
            <p class="news-summary">{{ newsItem.article.summary }}</p>
            <a :href="newsItem.article.url" target="_blank">Click here for more info</a>
          </div>
          <img :src="newsItem.article.thumbnail" alt="" class="news-thumbnail">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimeAPIvue',
    data() {
      return {
        animeNews: [],
        error: '',
      };
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      }
    },
    async mounted() {
      const url = 'https://anime-news-net.p.rapidapi.com/api/news';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '910ade2d91msh4f5537367e867aap1cef0cjsnd4203bdbde09',
          'X-RapidAPI-Host': 'anime-news-net.p.rapidapi.com',
        },
      };
  
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        this.animeNews = result;
      } catch (error) {
        this.error = 'Error fetching anime news: ' + error;
      }
    },
  };
  </script>
  
  <style scoped>
  .anime-news {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: auto;
  }
  
  .error-message {
    color: red;
    font-size: 1.2em;
  }
  
  .news-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  
  .news-card {
    border: 1px solid #ccc;
    padding: 20px;
  }
  
  .news-content {
    flex: 1;
  }
  
  .news-title {
    font-size: 1.5em;
    margin: 0 0 10px;
  }
  
  .news-date {
    font-size: 0.9em;
    color: #666;
    margin: 0 0 5px;
  }
  
  .news-summary {
    margin: 0 0 10px;
  }
  
  .news-thumbnail {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
  </style>
  
  