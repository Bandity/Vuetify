<template>
  <v-app id="app" class="overflow-hidden">
    <NavBar :titles="titles" />
    <keep-alive>
    <router-view name="locCentral"></router-view>
    </keep-alive>
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  export default {
    name: 'App',
    data : () => {
      return {
        titles : [ { text: "Home", color:"lightgrey", path:"/home"}, { text: "Lab", color:"lightblue", path:"/labo/slice"}, { text: "Library", color:"lightpink", path:"/library/view"} ],
        currentMenu : 0,
      }
    },
    computed:{
    },
    components: {
      NavBar
    },
    methods: {
    }
  }
</script>

<style>
  .v-btn{
    font-weight: bold;
  }

  @font-face {
    font-family: "Boxy-Bold";
    src: local("Boxy-Bold"),   url(./assets/Boxy-Bold.ttf) format("truetype");}

  .h1 {
    font-family: "Boxy-Bold";
    font-size: 6rem;
  }

  .h2 {
    font-family: "Boxy-Bold";
    font-size: 3.75rem;
  }

  .maintxt{
    font-family: "Boxy-Bold";
    font-size: 2rem;
  }
  #app {
    font-family: "Boxy-Bold";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
