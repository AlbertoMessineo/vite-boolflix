<script>
import { store } from './store';
import axios from 'axios';
export default {
  name: 'Boolflix',
  data(){
    return{
      store,
      errorMessage:'',
    }
  },
  methods: {
    search(){
     axios.get(store.config.apiMoviesUrl, {
      params:{
        api_key: store.config.apiKey,
        query: store.searchKey,
      }
     })
     .then((response)=> {
      console.log(response);
     })
     .catch((error) => {
      this.errorMessage = error.message;
     });
    },
  },

};
</script>

<template>
  <form @submit.prevent="search">
    <label for="search"> Search </label>
    <input type="text" id="search" v-model="store.searchKey">
    <button> Search </button>
  </form>
  <div v-if="errorMessage">{{ errorMessage }}</div>
</template>

<style scoped lang="scss">
</style>
