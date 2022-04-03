<template>
  <v-card class="mx-15 grey">
    <v-card-title primary-title class="justify-center h4">Plagues</v-card-title>
      <v-simple-table class="grey darken-2 elevation-5">
        <template v-slot:default>
          <thead>
          <tr><th class="text-center h6">Name</th><th class="text-center h6">Code</th><th class="text-center h6">% Mortality</th><th></th></tr>
          </thead>
          <tbody>
          <tr v-for="(v,index) in viruses" :key="index"><td>{{v.name}}</td><td>{{v.code}}</td><td>{{v.mortalite}}</td><td><v-btn @click="addbasket(v)">Clone virus for the lab</v-btn></td></tr>
          </tbody>
        </template>
     </v-simple-table>
  </v-card>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: 'Articles',
    data : () => {
      return {
        headers: [
          {width: '100px', text: 'Name', value: 'name'},
          {width: '100px',text: 'Code', value: 'code' },
          {width: '100px',text: '% Mortality', value: 'mortalite'}],
      }
    },
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
