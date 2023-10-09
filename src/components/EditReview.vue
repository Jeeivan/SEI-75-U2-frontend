<template>
    <div>
      <h1>Edit Review</h1>
      <form @submit.prevent="updateReview">
        <label for="date">Date of Review:</label>
        <input type="date" v-model="review.date" required>
        
        <label for="rating">Rating (out of 5):</label>
        <input type="number" v-model="review.rating" min="1" max="5" required>
        
        <label for="text">Thoughts:</label>
        <textarea v-model="review.text" rows="4" cols="50" required></textarea>
        
        <button type="submit">Save Review</button>
      </form>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'EditReviewVue',
    data() {
  return {
    review: {
      date: "", // Initialize with empty values
      rating: "",
      text: "",
    },
  };
},
methods: {
  fetchReviewDetails() {
    const reviewId = this.$route.params.reviewId;
    fetch(`http://localhost:4000/review/${reviewId}`)
      .then((response) => response.json())
      .then((result) => {
        this.review = result; // Set the review details in data
      })
      .catch((error) => {
        console.error('Error fetching review details:', error);
      });
  },
  updateReview() {
    const reviewId = this.$route.params.reviewId;
    fetch(`http://localhost:4000/review/${reviewId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.review),
    })
    .then(() => {
      this.$router.push(`/singleAnime/${this.anime._id}`); // Redirect back to single anime page
    })
    .catch((error) => {
      console.error('Error updating review:', error);
    });
  }
},
mounted() {
  this.fetchReviewDetails(); // Fetch review details when component is mounted
}
  }
  </script>
  