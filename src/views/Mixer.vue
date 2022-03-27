<template>
  <div>
    <table border="0">
      <tr>
        <td><h1>Parts</h1></td>
      </tr>
      <tr>
        <td>
          <CheckedList
            :fields="['code']"
            :entries="parts"
            @chosen-changed="chosenParts = $event"
          />
        </td>
      </tr>
    </table>
    <button :disabled="chosenParts.length == 0" @click="mix(chosenParts)">Mixing</button>

    <hr />
    <button @click="$router.push({ path: '/labo/slice' })">Go to slicer</button>

    <hr />
    <p v-if="newVirus != null">
      New virus: <input v-model="newVirus.name" /> {{ newVirus.code }}
      {{ newVirus.mortalite }}
      <button @click="sendToLibrary">Send to library</button>
    </p>
  </div>
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
