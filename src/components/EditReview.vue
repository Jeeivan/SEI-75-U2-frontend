<template>
  <div class="edit-container">
    <h1>Edit REVIEW</h1>
    <p>
      <textarea
        v-model="review.text"
        type="text"
        placeholder="Your Thoughts"
        class="larger-input"
      ></textarea
      ><br />
    </p>
    <p><button v-on:click="saveReview">Save Review</button></p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "EditReviewVue",
  data: () => ({
    error: "",
    review: {
      animeId: "",
      text: "",
      id: "",
    },
  }),
  mounted() {
    const route = useRoute();
    this.review.id = route.params.id;
    fetch(`http://localhost:4000/review/single/${route.params.id}`)
      .then((response) => response.json())
      .then((result) => {
        this.review = result;
        // console.log(result);
        this.review.text = result.review.text;
        this.review.animeId = result.review.title;
        // console.log(this.review.animeId);
      })
      .catch((error) => {
        this.error = "Error fetching data: " + error;
      });
  },
  methods: {
    saveReview: function () {
      fetch(`http://localhost:4000/review/single/${this.review._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: this.review.text,
        }),
      }).then((response) => {
        this.$router.replace({ path: `/anime/${this.review.title}` });
        console.log(response);
      });
    },
  },
};
</script>

<style scoped>
.larger-input {
  width: 300px;
  height: 100px;
}

.edit-container {
  margin-top: 25px;
}
</style>
