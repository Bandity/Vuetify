<template>
  <v-card class="overflow-hidden">
    <v-app-bar dark>
      <v-spacer/>
        <v-btn plain x-large outlined v-for="(t,index) in titles" :key="index" :style="{color : t.color}" @click="$router.push({path:t.path})">{{t.text}}</v-btn>
      <v-spacer/>
    </v-app-bar>
  </v-card>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['titles']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
