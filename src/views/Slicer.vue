<template>
  <v-card  color="grey"
           class="mt-10 ma-auto"
           max-width="70%">
    <v-card-title primary-title class="justify-center h4">Slicer</v-card-title>
    <v-simple-table class="grey darken-2">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-center">
            Plagues
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <CheckedList :fields="['name','code']" :entries="samples" @chosen-changed="chosenViruses = $event" />
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <label for="cut">part length: </label><input id="cut" v-model.number="cutFactor"><v-btn :disabled="chosenViruses.length==0" @click="cut({chosenViruses,cutFactor})">Cut</v-btn>
    <label for="mute">nb mutations: </label><input id="mute" v-model.number="nbMutation"><v-btn :disabled="chosenViruses.length==0" @click="mutation({chosenViruses,nbMutation})">Mutation</v-btn>
    <hr/>
    <v-btn @click="$router.push({path:'/labo/mix'})">Go to mixer</v-btn>
  </v-card>
</template>

<script>
  import CheckedList from '../components/CheckedList.vue'
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'Slicer',
    data : () => {
      return {
        chosenViruses:[],
        cutFactor: 5,
        nbMutation : 10,
      }
    },
    components: {
      CheckedList
    },
    computed:{
      ...mapState(['samples', 'parts'])
    },
    methods: {
      ...mapMutations(['cut','mutation']),
    }
  }
</script>

<style scoped>
</style>
