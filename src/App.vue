<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    search() {
        const params = {
          api_key: this.store.apiInfo.endpoints.api_key,
          include_adult: this.store.apiInfo.endpoints.include_adult,
          language: this.store.apiInfo.endpoints.language,
          page: this.store.apiInfo.endpoints.page,
          query: this.store.apiInfo.endpoints.query,
        };
        axios.get(this.store.apiInfo.url, {params}).then((response) => {
          this.store.movie = response.data;
          console.log(this.store.movie);
        });
    },
    searchButton() {
        this.search();
    },
    resetButton() {
        this.store.apiInfo.endpoints.query = "";
        this.search();
    },
    created() {
      this.search();
    },
  },
};
</script>

<template>
  <AppHeader @searchButton="searchButton" @resetButton="resetButton"/>
  <AppMain/>
</template>
