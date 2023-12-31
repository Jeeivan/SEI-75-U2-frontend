<template>
  <div class="single-anime-container">
    <div class="anime-details">
      <img
        :src="animes?.anime?.imageURL"
        alt="No image found"
        class="anime-image"
      />
      <div class="anime-info">
        <h1>{{ animes?.anime?.name }}</h1>
        <p class="anime-description">{{ animes?.anime?.description }}</p>
      </div>
    </div>
    <button @click="toggleReviews">
      {{ showReviews ? "Hide Reviews" : "Show Reviews" }}
    </button>

    <div v-if="showReviews" class="anime-reviews">
      <div class="reviews-container">
        <div v-for="review in reviews" :key="review._id" class="review-box">
          <div class="review-details">
            <div class="user">
              <img :src="review.image" alt="" />
              <p>Made By- {{ review.name }}</p>
            </div>
            <p>Date of Review - {{ review.date }}</p>
            <p>Rating - {{ review.rating }}/5</p>
            <p>Thoughts - {{ review.text }}</p>
          </div>
          <div v-if="review.user === userEmail" class="review-actions">
            <button @click="deleteReview(review._id)">Delete Review</button>
            <router-link :to="`/review/edit/${review._id}`"
              ><button>Edit Review</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decodeCredential } from "vue3-google-login";
import { useRoute } from "vue-router";

export default {
  name: "SingleAnimeVue",
  data: () => ({
    error: "",
    animes: {},
    reviews: [],
    id: "",
    userId: "",
    isInit: false,
    isLoggedIn: false,
    userName: "",
    userEmail: "",
    showReviews: false,
  }),
  mounted() {
    const route = useRoute();
    if (this.$cookies.isKey("user_session")) {
      this.isLoggedIn = true;
      const userData = decodeCredential(this.$cookies.get("user_session"));
      this.userName = userData.given_name;
      this.userEmail = userData.email;
    }
    fetch(`${process.env.VUE_APP_BACKEND_API}/anime/${route.params.id}`)
      .then((response) => response.json())
      .then((result) => {
        this.animes = result;
        this.id = route.params.id;
        this.fetchReviews();
      })
      .catch((error) => {
        this.error = "Error fetching data: " + error;
      });
  },
  methods: {
    toggleReviews() {
      this.showReviews = !this.showReviews;
    },
    fetchReviews() {
      fetch(`${process.env.VUE_APP_BACKEND_API}/${this.id}/reviews`)
        .then((response) => response.json())
        .then((result) => {
          this.reviews = result;
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
        });
    },
    deleteReview(reviewId) {
      fetch(`${process.env.VUE_APP_BACKEND_API}/review/${reviewId}`, {
        method: "DELETE",
      })
        .then(() => {
          this.fetchReviews();
        })
        .catch((error) => {
          console.error("Error deleting review:", error);
        });
    },
  },
};
</script>

<style scoped>
.anime-image {
  max-width: 300px; /* Adjusted image size */
  height: auto;
  margin: 15px;
}

.anime-description {
  font-size: 20px; /* Adjusted font size for description */
}

.anime-details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.anime-info {
  text-align: center;
  max-width: 500px; /* Set a maximum width for the info */
}

.anime-info h1 {
  font-size: 24px; /* Adjusted font size for title */
}

.anime-reviews {
  text-align: center;
  margin-top: 40px;
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
  margin: 15px;
}

.review-details {
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
}

.review-actions button {
  padding: 8px 16px;
  margin: 5px;
  font-size: 16px;
  background-color: #ff7b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.review-actions button:hover {
  background-color: #ff6a00;
}

.user {
  display: flex;
  justify-content: space-between;
}

.user img {
  height: 30px;
}

.single-anime-container {
  margin-top: 25px;
}

.single-anime-container button {
  padding: 8px 16px;
  margin: 5px;
  font-size: 20px;
  background-color: #ff7b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.single-anime-container button:hover {
  background-color: lightsalmon;
}
</style>
