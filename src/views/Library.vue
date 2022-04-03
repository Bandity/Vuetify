<template>
  <v-img :src="LibraryBackground">
      <v-card-title  class="h2 ma-5 primary-title white--text justify-center">Library</v-card-title>
      <Articles></Articles>
      <router-view name="locDown"></router-view>
  </v-img>
</template>

<script>
  import LibraryBackground from '../assets/Library.png'
  import Articles from '../components/Articles.vue'
  export default {
    data : () => {
      return {
        LibraryBackground : LibraryBackground
      }
    },
    name: 'Library',
    components: {
      Articles
    }
  }
</script>

<style scoped>
</style>
