<template>
  <div id="app">
    <NavBar :titles="titles" />
    <keep-alive>
    <router-view name="locCentral"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'App',
    data : () => {
      return {
        titles : [ { text: "Home", color:"black", path:"/home"}, { text: "Lab", color:"blue", path:"/labo/slice"}, { text: "Library", color:"red", path:"/library/view"} ],
        currentMenu : 0,
      }
    },
    computed:{
      ...mapState(['samples', 'parts','basket','viruses'])
    },
    components: {
      NavBar
    },
    methods: {
      ...mapMutations(['receiveVirus'])
      /*receiveVirus : function(viruses) {
        viruses.forEach(v => this.samples.push(v));
      }*/
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
