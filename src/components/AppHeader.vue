<script>
import { store } from "../store.js";
export default {
    emits: ["searchButton", "resetButton"],
    data() {
      return {
        store,
      };
    },
  };
</script>

<template>
  <div>
    <input class="form-control" type="text" placeholder="Search character" v-model="this.store.apiInfo.endpoints.query"/>
    <button class="btn" value="Search" @click="$emit('searchButton')">
      Search
    </button>
    <button class="btn" value="Reset" @click="$emit('resetButton')">
      Reset
    </button>
  </div>
</template>