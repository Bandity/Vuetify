<template>
  <div>
    <h2>In my basket :</h2>
    <table >
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr v-for="(v,index) in basket" :key="index">
        <td>{{v.name}}</td><td>{{v.code}}</td><td>{{v.mortalite}}</td>
      </tr>
    </table>
    <button @click="sendToLab">Send to the lab</button>
  </div>
</template>

<script>

  import {Virus} from "../model";
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'Basket',
    computed:{
      ...mapState(['basket'])
    },
    methods: {
      ...mapMutations(['sendToLab']),
    },
  }
</script>

<style scoped>
</style>
