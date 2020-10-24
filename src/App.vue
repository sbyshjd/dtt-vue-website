<template>
  <div id="app">
    <NavBar/>
    <router-view :key="$route.fullPath" />
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './views/NavBar.vue';
import Footer from './views/Footer.vue';

@Component({
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
