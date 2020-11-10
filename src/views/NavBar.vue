<template>
  <div>
    <div class="nav">
      <div class="nav__div">
        <router-link
        to="/" class="nav__link"
        v-bind:class="{ active: isHome}">
        Home
        </router-link>
      </div>
      <div class="nav__div">
        <router-link
        to="/random" class="nav__link"
        v-bind:class="{ active: isRandom}">
        Random
        </router-link>
      </div>
      <div class="nav__categories">
        <button class="nav__categories__btn" v-bind:class="{ active: isCategories}">
          Categories <BIconCaretDownFill></BIconCaretDownFill></button>
        <ul class="nav__categories__ul">
          <li><router-link to="/categories/beef" class="nav__categories__ul__link">
          Beef</router-link></li>
          <li><router-link to="/categories/chicken" class="nav__categories__ul__link">
          Chicken</router-link></li>
          <li><router-link to="/categories/pork" class="nav__categories__ul__link">
          Pork</router-link></li>
          <li><router-link to="/categories/bacon" class="nav__categories__ul__link">
          Bacon</router-link></li>
        </ul>
      </div>
    </div>
    <div class="nav-copy"></div>
  </div>
</template>

<script lang="ts">
import { BIcon, BIconCaretDownFill } from 'bootstrap-vue';
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'NavBar',
  components: {
    BIcon,
    BIconCaretDownFill,
  },
})
export default class NavBar extends Vue {
  private path = this.$route.name;

  private isHome = false;

  private isRandom = false;

  private isCategories = false;

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(newVal: any) {
    this.path = newVal.name;
    if (this.path === 'Home') {
      this.isHome = true;
      this.isRandom = false;
      this.isCategories = false;
    }
    if (this.path === 'Random') {
      this.isRandom = true;
      this.isHome = false;
      this.isCategories = false;
    }
    if (this.path === 'Categories') {
      this.isRandom = false;
      this.isHome = false;
      this.isCategories = true;
    }
  }
}
</script>
<style lang="scss">
.nav {
  position: fixed;
  height: 75px;
  width: 100%;
  background-color: rgb(240, 240, 240);
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__div {
    text-align: center;
  }
  &__link {
    text-decoration: none;
    color: rgb(150, 150, 150);
  }
  &__link:hover {
    text-decoration: none;
    color: rgb(120, 120, 120);
  }
  &__categories {
    position: relative;
    cursor: pointer;
    text-align: center;
    &__btn {
      padding: 0;
      border: none;
      background: none;
      color: rgb(150, 150, 150);
    }
    &__btn:hover {
      color: rgb(120, 120, 120);
    }
    &__ul {
      border-radius: 5px;
      width: 100%;
      display: none;
      position: absolute;
      background-color: rgb(220, 220, 220);
      padding-left: 0;
      list-style: none;
      &__link {
        color: white;
      }
      &__link:hover {
        text-decoration: none;
        color: rgb(0, 0, 0);
      }
    }
  }
  &__categories:hover ul {
    display: block;
  }
}

.nav-copy {
  height: 75px;
}

.active {
  color: black;
}

@media screen and (max-width: 560px) {
  .nav {
    display: block;
  }
}
</style>
