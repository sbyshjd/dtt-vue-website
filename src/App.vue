<template>
  <div id="app">
    <NavBar/>
      <Suspense>
        <p class="fallback" slot="fallback">loading</p>
    <!-- <transition mode="out-in"> -->
        <router-view :key="$route.fullPath" />
      <!-- </transition> -->
      </Suspense>
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
.fallback {
  width: 100%;
  height: 110vh;
  background: rgba(0, 0, 0, 0.5);
  font-size: 50px;
  color: #fff;
}
</style>
