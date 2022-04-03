<template>
  <v-card>
    <v-img :src="HomeBackground">
      <v-card class="pa-1" color="rgb(50, 50, 50, 0.6)" >
        <v-card-title primary-title class="h1 ma-10 justify-center">Home</v-card-title>
        <p class="maintxt">Welcome to Brother Sanctus Church. Here you can create the most monstruous Plagues ever known</p>
        <p class="maintxt">Go to the Library to browse the collection of Brother Sanctus</p>
        <p class="maintxt">Go to the Lab to imagine new Plagues</p>
      </v-card>
    </v-img>
  </v-card>
</template>

<script>
import HomeBackground from '../assets/Home.png'
export default {
  data : () => {
    return {
      HomeBackground : HomeBackground
    }
  },
  name: 'Home'
}
</script>

<style scoped>
</style>
