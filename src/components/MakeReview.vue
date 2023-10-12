<template>
    <div class="review-container">
    <h1>MAKE A REVIEW</h1>
    <select v-model="review.animeId" style="width: 300px; height: 30px; font-size: 20px;">
    <option v-for="anime in animes" :value="anime._id" :key="anime._id">{{ anime.name }}</option>
</select>
    <div class="star-rating">
  <span v-for="star in 5" :key="star" @click="setRating(star)" :class="{ 'filled': star <= review.rating }">&#9733;</span>
</div>
    <p><textarea v-model="review.text" type="text" placeholder="Your Thoughts" class="larger-input"></textarea><br></p>
    <p><button v-on:click="saveReview">Save Review</button></p>
</div>
</template>

<script>
  import { decodeCredential } from 'vue3-google-login';

export default {
    name: 'MakeReviewVue',
    data() {
        return {
            error: '',
            review: {
                animeId: '',
                date: '',
                rating: 0,
                text: ''
            },
            animes: [],
            userId: '',
            isInit: false,
            isLoggedIn: false,
            userName: '',
            userEmail: '',
            userImage: ''
        }
    },
    created() {
        this.fetchAnimeTitles();
    },
    mounted() {
      if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true;
        const userData = decodeCredential(this.$cookies.get('user_session'));
        console.log(userData);
        this.userName = userData.given_name;
        this.userEmail = userData.email
        this.userImage = userData.picture
      }
    },
    methods: {
        fetchAnimeTitles() {
            fetch('http://localhost:4000/anime')
                .then(res => res.json())
                .then(data => {
                    this.animes = data;
                })
                .catch(error => console.error('Error:', error));
        },
        setRating(star) {
        this.review.rating = star;
        },
            saveReview() {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };
            const formattedDate = new Date().toLocaleDateString(undefined, options);
            this.review.date = formattedDate;

            console.log(`New Review ${this.review.name} - ${this.review.date} - ${this.review.rating} - ${this.review.text}`);
            console.log(this.userEmail);
            fetch(`http://localhost:4000/addReview`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    animeId: this.review.animeId,
                    date: this.review.date,
                    rating: this.review.rating,
                    text: this.review.text,
                    email: this.userEmail,
                    image: this.userImage,
                    name: this.userName
                })
            })
            .then(res => {
                console.log(res.status);
                this.review.name = '';
                this.review.date = '';
                this.review.rating = '';
                this.review.text = '';
            })
            .then((response) => response.json())
      .then((result) => {
        console.log(result)
        this.userId = result.userId
      })
      .catch((error) => {
        this.error = 'Error fetching data: ' + error;
      });
        }
    },
}
</script>

<style scoped>
.star-rating {
  font-size: 24px;
}

.star-rating span {
  cursor: pointer;
}

.star-rating span.filled {
  color: gold; 
}

.larger-input {
  width: 300px; 
  height: 100px; 
}

.review-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.review-container > * {
  margin-bottom: 15px;
}

.review-container button {
  background-color: #ff7b00; 
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.review-container button:hover {
  background-color: lightsalmon;
}

.larger-input {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

</style>