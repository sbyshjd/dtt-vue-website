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
      <div class="nav__categories">
        <button class="nav__categories__btn" v-bind:class="{ active: isCategories}">
          Categories</button><BIconCaretDown></BIconCaretDown>
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
import { BIcon, BIconCaretDown } from 'bootstrap-vue';
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'NavBar',
  components: {
    BIcon,
    BIconCaretDown,
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
  }
  &__categories {
    position: relative;
    cursor: pointer;
    text-align: center;
    &__btn {
      padding: 0;
      border: none;
      background: none;
      color: white;
    }
    &__ul {
      width: 100%;
      display: none;
      position: absolute;
      background-color: rgb(185, 185, 185);
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
  font-weight: bolder;
}
</style>
