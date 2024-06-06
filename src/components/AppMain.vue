<script>
import { store } from "../store.js";
import AppCard from "./AppCard.vue";
import AppFlag from "./AppFlag.vue";
export default {
    data() {
        return { 
            store
        };
    },
    components: { 
        AppCard,
        AppFlag,
    },
};
</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col" v-for="(movie, index) in this.store.movie.results">
          <AppCard :index="index" :title="movie.title" :originalTitle="movie.originalTitle" :originalLanguage="movie.original_language" :vote="movie.vote_average"/>
          <ChangeFlag :languageCode="movie.original_language" />
        </div>
      </div>
    </div>
  </template>