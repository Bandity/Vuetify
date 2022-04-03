<template>
  <v-card  color="grey"
           class="mt-10 ma-auto"
           max-width="70%">
    <v-card-title primary-title class="justify-center h4">Mixer</v-card-title>
    <v-simple-table class="grey darken-2">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-center">
            Parts
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <CheckedList
              :fields="['code']"
              :entries="parts"
              @chosen-changed="chosenParts = $event"
            />
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn :disabled="chosenParts.length == 0" @click="mix(chosenParts)">Mixing</v-btn>

    <hr />
    <v-btn @click="$router.push({ path: '/labo/slice' })">Go to slicer</v-btn>

    <hr />
    <p v-if="newVirus != null">
      New Plague: <v-text-field label="Type the name of your new Plague" v-model="newVirus.name" ></v-text-field> {{ newVirus.code }}
      {{ newVirus.mortalite }}
      <v-btn @click="sendToLibrary">Send to library</v-btn>
    </p>
  </v-card>
</template>

<script>
import CheckedList from "../components/CheckedList.vue";
import {mapState, mapMutations} from "vuex";

export default {
  name: "Mixer",
  data: () => {
    return {
      chosenParts: [],
    };
  },
  components: {
    CheckedList,
  },
  computed:{
    ...mapState(['parts',"newVirus"])
  },
  methods: {
    ...mapMutations(['mix','sendToLibrary']),
  },
};
</script>

<style scoped>
</style>
