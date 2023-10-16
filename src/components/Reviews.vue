<template>
  <div class="anime-reviews">
    <h1 class="page-title">ANIME REVIEWS</h1>
    <div class="button-container">
      <button @click="filterReviews(1)" class="rating-button">
        1 Star Reviews
      </button>
      <button @click="filterReviews(2)" class="rating-button">
        2 Star Reviews
      </button>
      <button @click="filterReviews(3)" class="rating-button">
        3 Star Reviews
      </button>
      <button @click="filterReviews(4)" class="rating-button">
        4 Star Reviews
      </button>
      <button @click="filterReviews(5)" class="rating-button">
        5 Star Reviews
      </button>
    </div>
    <div class="reviews-container">
      <div
        v-for="review in filteredReviews"
        :key="review._id"
        class="review-box"
      >
        <div class="user">
          <img :src="review.image" alt="" />
          <p>Made By- {{ review.name }}</p>
        </div>
        <h2 class="anime-title">
          <router-link :to="'/anime/' + review.title._id">
            {{ review.title.name }}</router-link
          >
        </h2>
        <p class="review-detail">Date of Review - {{ review.date }}</p>
        <p class="review-detail">Rating - {{ review.rating }}/5</p>
        <p class="review-detail">
          Thoughts - <span class="larger-text">{{ review.text }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewVue",
  data: () => ({
    error: "",
    reviews: [],
    filteredReviews: [],
  }),
  mounted() {
    fetch(`${process.env.VUE_APP_BACKEND_API}/reviews`)
      .then((response) => response.json())
      .then((result) => {
        this.reviews = result;
        this.filteredReviews = result;
      })
      .catch((error) => {
        this.error = "Error fetching data: " + error;
      });
  },
  methods: {
    filterReviews(rating) {
      rating = parseInt(rating);
      this.filteredReviews = this.reviews.filter(
        (review) => parseInt(review.rating) === rating
      );
    },
  },
};
</script>

<style scoped>
.anime-reviews {
  text-align: center;
  margin-top: 25px;
}

.page-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin: 15px;
}

.rating-button {
  padding: 10px 20px;
  margin: 5px;
  font-size: 20px;
  background-color: #ff7b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.rating-button:hover {
  background-color: #ff6a00;
}

.reviews-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.review-box {
  max-width: 500px;
  width: 100%;
  background-color: beige;
  border: 2px solid #ff7b00;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.anime-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.review-detail {
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
}

.larger-text {
  font-size: 20px;
}

.user {
  display: flex;
  justify-content: space-between;
}

.user img {
  height: 30px;
}
</style>
