<template>
  <div>
    <h1>Labo</h1>
    <table border="0">
      <tr>
        <td><h1>Viruses</h1></td>
      </tr>
      <tr>
        <td>
          <CheckedList :fields="['name','code']" :entries="samples" @chosen-changed="chosenViruses = $event" />
        </td>
      </tr>
    </table>
    <label for="cut">part length: </label><input id="cut" v-model.number="cutFactor"><button :disabled="chosenViruses.length==0" @click="cut({chosenViruses,cutFactor})">Cut</button>
    <label for="mute">nb mutations: </label><input id="mute" v-model.number="nbMutation"><button :disabled="chosenViruses.length==0" @click="mutation({chosenViruses,nbMutation})">Mutation</button>
    <hr/>
    <button @click="$router.push({path:'/labo/mix'})">Go to mixer</button>
  </div>
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
