<script>
import { store } from './store';
import axios from 'axios';
import card from './components/card.vue';
export default {
  name: 'Boolflix',
  components: {
    card, 
  },
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
        language: store.searchLanguage,
      },
     })
     .then((response)=> {
      console.log(response);
      this.store.movies = response.data.results
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

  <ul>
    <li>
      <div v-for="movie in store.movies">
        <h3> {{ movie.title }}</h3>
        <h4>{{  movie.original_title }}</h4>
        <p>{{  movie.original_language }}</p>
        <p>{{  movie.vote_average }}</p>
       </div>
       
    </li>
  </ul>
</template>

<style scoped lang="scss">
</style>
