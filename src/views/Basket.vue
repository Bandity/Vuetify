<template>
  <v-card
      color="grey"
      class="mt-10 ma-auto"
      max-width="50%">
    <v-card-title primary-title class="justify-center">In my basket :</v-card-title>
    <v-data-table
        dense
        :headers="headers"
        :items="basket"
        item-key="name"
        class="grey darken-2 elevation-5"
    />
    <v-btn @click="sendToLab">Send to the lab</v-btn>
  </v-card>
</template>

<script>

  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'Basket',
    data : () => {
      return {
        headers: [
          {width: '100px', text: 'Name', value: 'name'},
          { width: '100px',text: 'Code', value: 'code' },
          { width: '100px',text: '% Mortality', value: 'mortalite'}],
      }
    },
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
