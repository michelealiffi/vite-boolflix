<script>
import { store } from '../store';
import AppJumbo from './AppJumbo.vue';

export default {
    components: {
        AppJumbo
    },
    data() {
        return {
            store,
            imageBaseUrl: 'https://image.tmdb.org/t/p/'
        };
    },
    methods: {
        getImageUrl(path, size = 'w342') {
            return `${this.imageBaseUrl}${size}${path}`;
        },
        convertVoteToStars(vote) {
            return Math.ceil(vote / 2);
        },
        getStars(vote) {
            const fullStars = this.convertVoteToStars(vote);
            const emptyStars = 5 - fullStars;
            return {
                fullStars: new Array(fullStars).fill(true),
                emptyStars: new Array(emptyStars).fill(false)
            };
        }
    }
}
</script>

<template>
    <ul class="film-list mt-5 margin-left">
      <li class="poster-container" v-for="(film, index) in store.results" :key="index">
        <div class="image-wrapper">
          <img :src="getImageUrl(film.poster_path)" alt="Poster del film" v-if="film.poster_path" class="poster-image">
          <div class="overlay">
            <span class="title color-red">Titolo: {{ film.title }}</span>
            <span class="title color-red">Titolo originale: {{ film.original_title }}</span>
            <ul class="details">
              <li>Nazionalità: {{ film.original_language }}
                <ChangeFlag :languageCode="film.original_language" />
              </li>
              <li>
                <span v-for="(isFull, starIndex) in getStars(film.vote_average).fullStars" :key="'full-' + starIndex">
                  <i class="fas fa-star"></i>
                </span>
                <span v-for="(isEmpty, starIndex) in getStars(film.vote_average).emptyStars" :key="'empty-' + starIndex">
                  <i class="far fa-star"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="poster-container" v-for="(tv, index) in store.resultTv" :key="index + store.results.length">
        <div class="image-wrapper">
          <img :src="getImageUrl(tv.poster_path)" alt="Poster della serie TV" v-if="tv.poster_path" class="poster-image">
          <div class="overlay">
            <span class="title color-red">Titolo: {{ tv.name }}</span>
            <span class="title color-red">Titolo originale: {{ tv.original_name }}</span>
            <ul class="details">
              <li>{{ tv.original_language }}
                <ChangeFlag :languageCode="tv.original_language" />
              </li>
              <li>
                <span v-for="(isFull, starIndex) in getStars(tv.vote_average).fullStars" :key="'full-' + starIndex + store.results.length">
                  <i class="fas fa-star"></i>
                </span>
                <span v-for="(isEmpty, starIndex) in getStars(tv.vote_average).emptyStars" :key="'empty-' + starIndex + store.results.length">
                  <i class="far fa-star"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.poster-container {
  width: 150px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.poster-container:hover {
  transform: scale(1.05);
}

.image-wrapper {
  position: relative;
  width: 100%;
}

.poster-image {
  width: 100%;
  display: block;
  border-radius: 8px;
  transition: opacity 0.3s;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  padding: 10px;
  border-radius: 8px;
  font-size: xx-small;
}

.poster-container:hover .poster-image {
  opacity: 0;
}

.poster-container:hover .overlay {
  opacity: 1;
  visibility: visible;
}

.title {
  font-size: 1.1em;
  margin-bottom: 5px;
  text-align: center;
}

.details {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.details li {
  margin: 5px 0;
}
.color-red{
  color: red;
}
.margin-left{
    margin-left: 5%;
}
</style>