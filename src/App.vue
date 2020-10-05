<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/random">Random</router-link>
      <!-- <router-link to='/detail/:id'></router-link> -->
    </div>
    <router-view :key="$route.fullPath" />
    <div id="footer">site map</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
