<template>
  <div id="app">
    <NavBar/>
    <div v-show="$store.state.loading" id='loading-page'></div>
    <transition mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
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

<style lang="scss">
.v-enter,.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,.v-leave-active {
  transition: all 0.2s ease;
}
#loading-page {
  height: 100vh;
  background-color: rgb(255, 255, 255);
}
</style>
