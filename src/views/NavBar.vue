<template>
  <div>
    <div class="nav" ref="navbar">
      <resize-observer @notify="handleResize" />
      <div class="nav__head">
        <div class="nav__logo">D/R</div>
        <button class="nav__btn" @click="isShown=!isShown">#</button>
      </div>
      <div class="nav__body" v-bind:class="{show: isShown}">
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
            <li><router-link to="/categories/butter" class="nav__categories__ul__link">
            Butter</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav-copy" v-bind:style="{ height: navbarHeight + 'px' }"></div>
  </div>
</template>

<script lang="ts">
import { BIcon, BIconCaretDownFill } from 'bootstrap-vue';
import { Component, Vue, Watch } from 'vue-property-decorator';
import 'vue-resize/dist/vue-resize.css';
import { ResizeObserver } from 'vue-resize';

@Component({
  name: 'NavBar',
  components: {
    BIcon,
    BIconCaretDownFill,
    ResizeObserver,
  },
})
export default class NavBar extends Vue {
  private path = this.$route.name;

  private isHome = false;

  private isRandom = false;

  private isCategories = false;

  private isShown = false;

  private navbarHeight = 0;

  public handleResize({ width, height }: any): void {
    console.log('resized', width, height);
    this.navbarHeight = height;
    console.log(this.navbarHeight);
  }

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
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background-color: rgb(240, 240, 240);
  z-index: 100;
  &__head {
    display: none;
    color: rgb(70, 70, 70);
    font-weight: bolder;
  }
  &__body {
    display: flex;
    flex-grow: 4;
    justify-content: space-around;
    align-items: center;
  }
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
    &__head {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: top;
    }
    &__body {
      display: none;
    }
  }

  .show {
    display: block;
  }

  .nav-copy {
    height: 75px;
  }
}
</style>
