<script>
import { store } from './store';
export default {
  name: 'boolflix',

  data() {
    return {
      text: 'Template VueJS',
    };
  },
};
</script>

<template>
  <form @submit.prevent="search">
    <label for="search"> Search </label>
    <input type="text" id="search" v-model="store.searchKey">
  </form>
</template>

<style scoped lang="scss">
</style>
