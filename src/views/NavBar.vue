<template>
  <div>
    <div class="nav">
      <router-link
      to="/" class="nav__link"
      v-bind:class="{ active: isHome}">
      Home
      </router-link>
      <router-link
      to="/random" class="nav__link"
      v-bind:class="{ active: isRandom}">
      Random
      </router-link>
    </div>
    <div class="nav-copy"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class NavBar extends Vue {
  private path = this.$route.name;

  private isHome = false;

  private isRandom = false;

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.path = newVal.name;
    if (this.path === 'Home') {
      this.isHome = true;
      this.isRandom = false;
    }
    if (this.path === 'Random') {
      this.isRandom = true;
      this.isHome = false;
    }
  }
}
</script>
<style lang="scss">
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
  &__link {
    text-decoration: none;
    color: white;
  }
  &__link:hover {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
}

.nav-copy {
  height: 75px;
}

.active {
  font-weight: bolder;
}
</style>
