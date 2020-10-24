<template>
  <div>
    <div class="nav">
      <router-link to="/" class="nav__link">FoodReco</router-link>
      <router-link to="/" class="nav__link">Home</router-link>
      <router-link to="/random" class="nav__link">Random</router-link>
    </div>
    <div class="nav-copy"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {}
</script>
<style lang="scss">
$color: red;
.nav {
  position: fixed;
  height: 75px;
  width: 100%;
  background-color: grey;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
}

.nav__link {
  text-decoration: none;
  color: white;
}

.nav-copy {
  height: 75px;
}
</style>
