<template>
  <div>
    <table>
      <tr><td>Name</td><td>Code</td><td>% Mortality</td></tr>
      <tr v-for="(v,index) in viruses" :key="index"><td>{{v.name}}</td><td>{{v.code}}</td><td>{{v.mortalite}}</td><td> <button @click="addbasket(v)">Clone virus for the lab</button></td></tr>
    </table>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    
    name: 'Articles',
    computed:{
      ...mapState(['viruses'])
    },
    methods:{
      ...mapMutations(['addbasket']),
     
    }
  }
</script>

<style scoped>
</style>
