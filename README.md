# SEI Unit 2 Project ReadMe

## Project Description

About halfway through the General Assembly Software Engineering Immersive course, we embarked on our second project. After two weeks of gaining experience with Node.js, Express, MongoDB, and Vue.js, we were now tasked with the challenge of applying our newfound knowledge to create our own website. I decided to focus on the topic of anime, as it's a subject I have a deep passion for. My primary goal was to develop a platform where anime enthusiasts could discover their favourite shows and share their own reviews, while also exploring the opinions of fellow fans.

## Deployment Link

([https://jeeivan.github.io/Space-Invaders-Project/](https://everythinganime.netlify.app/))

## I was given a full week to work on this project and I worked independently to do this with the help of our instructors if I was facing any difficulties. 

## Technologies Used

CSS
HTML
Vanilla Javascript ES6
MongoDB
Mongoose
Node.js
Vue.js
Express


## Brief

Project Objective:
Build a full-stack application using Node/Express/MongoDB.
Gain independence in designing and coding the app.
Exercise creativity by choosing a project aligned with technical requirements.

Technical Requirements:
Include at least 2 data entities, incorporating One:Many or Many:Many relationships.
Implement OAuth authentication and basic authorization for user access.
Integrate full-CRUD data operations within the app's features.
Design a polished user interface consistent with daily-use apps.
Deploy the app online using Netlify.


## Planning

**Home Page/Landing Page:**
Title of EverythingAnime
Have Links for- List of Animes, All reviews, Add review
Be able to edit and delete reviews 
Have google login within this


**List of Animes-** 
Show a list of all anime
Each title will have its own link that will take the user to an individual anime page

**All reviews-**
Show all reviews for all animes
Have each review show the user that made the review, the name of the anime, the star rating, the review and the date it was made

**Individual anime page-**
This will include a picture of the anime, the name of the anime and underneath will include all reviews for that anime
There will also be a link within this page to also take you to the add review page

**Add Review page-**
This will have a form where users have to pick which anime they would like to leave a review for
They can give it a star rating of 0/5
Using expression/pattern so that users can only put in a number from 0-5 and they can only put in anime that is listed within the site
They can then have a section to add their personalised review

**MongoDB-**
Have one collection for user- have their name and last login
Have one collection for anime titles
Have one collection for reviews which will reference that anime

[Insert screenshot of excalidraw database here]

**Vue Files-**
Landing Page

All Animes- Show all animes

Anime- Show single page for anime- e.g. anime/‘individual id for that anime’
Have all reviews for each anime in this
Be able to delete a review in this
Have router link to take you to edit review page

Reviews- Show all reviews

AddReview- Form to add review

EditReview- Be able to edit your review

Nav- This will add in all buttons for different pages with their router links- I will then import this into my app.vue where the nav will be on every page

**Stretch Goals-**
Within all reviews page, being able to filter through reviews that each have a star rating e.g. if you click 5 you can see all 5/5 reviews, and if you press 1 you can see all 1/5 reviews 
Add in some sort of  external API
Make NAV bar look nicer
Have Reviews show user name and their google login logo
Have user schema have given name and logo and have this called 
Create own anime 


