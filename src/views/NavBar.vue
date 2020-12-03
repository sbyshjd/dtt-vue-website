<template>
  <div>
    <div class="nav" ref="navbar">
      <resize-observer @notify="handleResize" />
      <div class="nav__head">
        <div class="nav__logo"><router-link
          to="/">D/R</router-link></div>
        <button class="nav__btn" @click="isShown=!isShown"><BIconJustify></BIconJustify></button>
      </div>
      <div class="nav__body" v-bind:class="{show: isShown}">
        <div class="nav__div">
          <router-link
          to="/home" class="nav__link">
          Home
          </router-link>
        </div>
        <div class="nav__div">
          <router-link
          to="/random" class="nav__link">
          Random
          </router-link>
        </div>
        <div class="nav__categories">
          <router-link to="/categories" class="nav__categories__btn"
          :disabled="true">
            Categories <BIconCaretDownFill></BIconCaretDownFill></router-link>
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
import { BIcon, BIconCaretDownFill, BIconJustify } from 'bootstrap-vue';
import { Component, Vue } from 'vue-property-decorator';
import 'vue-resize/dist/vue-resize.css';
import { ResizeObserver } from 'vue-resize';

@Component({
  name: 'NavBar',
  components: {
    BIcon,
    BIconJustify,
    BIconCaretDownFill,
    ResizeObserver,
  },
})
export default class NavBar extends Vue {
  private isShown = false;

  private navbarHeight = 0;

  // listening the height of the NavBar and apply it to the navbar-copy div;
  // use the library vue-resize;
  public handleResize({ width, height }: any): void {
    this.navbarHeight = height;
  }
}

</script>
<style lang="scss">
.nav * {
  font-weight: 600;
}
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
  &__logo a {
    color: rgb(70, 70, 70);
    text-decoration: none;
  }
  &__btn {
    border: none;
    font-size: 24px;
    color: rgb(70, 70, 70);
    cursor: pointer;
    outline:none;
  }
  &__body {
    display: flex;
    flex-grow: 4;
    justify-content: space-around;
    align-items: center;
  }
  &__div {
    margin: 10px 0px;
    text-align: center;
  }
  &__link {
    font-size: 16px;
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
      font-size: 16px;
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
      padding: 10px 0px;
      list-style: none;
      &__link {
        text-decoration: none;
        color: white;
      }
      &__link:hover {
        text-decoration: none;
        color: rgb(0, 0, 0);
      }
    }
    &__ul li {
      padding: 5px;
    }
  }
  &__categories:hover ul {
    display: block;
  }
}

.nav-copy {
  height: 75px;
}

.router-link-active {
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
