<template>
  <v-card>
    <v-img :src="LabBackground">
    <v-card-title class="justify-center ma-5 white--text h2">Labo</v-card-title>
      <keep-alive include="Mixer">
        <router-view name="locSubCentral"></router-view>
      </keep-alive>
    </v-img>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'
import LabBackground from "@/assets/Lab.png";
  export default {
    name: 'Labo',
    data : () => {
      return {
        LabBackground : LabBackground
      }
    },
   computed:{
      ...mapState(['samples', 'parts']),
    }
  }
</script>

<style scoped>
</style>
