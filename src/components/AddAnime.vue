<template>
  <div class="review-container">
    <h1>ADD AN ANIME</h1>
    <div class="input-row">
      <input
        type="text"
        v-model="anime.name"
        placeholder="Insert Anime Title"
      />
    </div>
    <div class="input-row">
      <input
        type="text"
        v-model="anime.imageURL"
        placeholder="Insert Anime Image Address"
      />
    </div>
    <div class="input-row">
      <textarea
        v-model="anime.description"
        placeholder="Give a brief description of the anime"
      ></textarea>
    </div>
  </div>
  <div class="input-row">
    <button v-on:click="saveAnime">Save Anime</button>
  </div>
</template>

<script>
export default {
  name: "MakeAnimeVue",
  data() {
    return {
      error: "",
      anime: {
        name: "",
        imageURL: "",
        description: "",
      },
    };
  },
  methods: {
    saveAnime() {
      // console.log(`New Anime ${this.anime.name} - ${this.anime.imageURL} - ${this.anime.description}`);
      fetch(`${process.env.VUE_APP_BACKEND_API}/addAnime`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.anime.name,
          imageURL: this.anime.imageURL,
          description: this.anime.description,
        }),
      })
        .then((res) => {
          console.log(res.status);
          this.anime.name = "";
          this.anime.imageURL = "";
          this.anime.description = "";
        })
        .then((response) => response.json())
        .then((result) => {
          this.userId = result.userId;
        })
        .catch((error) => {
          this.error = "Error fetching data: " + error;
        });
    },
  },
};
</script>

<style scoped>
.review-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.input-row {
  margin-bottom: 15px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

textarea {
  height: 150px;
}

button {
  padding: 10px 20px;
  background-color: #ff7b00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}

button:hover {
  background-color: lightsalmon;
}
</style>
