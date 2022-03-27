<template>
  <div>
    <h1>Labo</h1>
    <table border="1">
      <tr>
        <td>
          <keep-alive include="Mixer">
            <router-view name="locSubCentral"></router-view>
          </keep-alive>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'Labo',
    data : () => {
      return {
      }
    },
   computed:{
      ...mapState(['samples', 'parts']),
    }
  }
</script>

<style scoped>
</style>
