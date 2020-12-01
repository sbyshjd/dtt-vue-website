<template>
  <div class="recipe-content">
    <h3>{{ strMeal }}</h3>
    <div class="recipe-content__wrapper">
      <img :src="strMealThumb"
        alt="food-sample"
        class="recipe-content__image"/>
      <div class="recipe-content__words">
        <h5>Area: <i>{{ strArea }}</i></h5>
        <h5>Categoty: <i>{{ strCategory }}</i></h5>
        <h5>Main Ingredients: <i>{{ strTags }}</i></h5>
      </div>
    </div>
    <ul>
    <li v-for="(str, index) in instructionsArr" :key="index">{{ str }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RecipeContent extends Vue {
  @Prop(String)
  strMeal!: string;

  @Prop(String)
  strMealThumb!: string;

  @Prop(String)
  idMeal!: string;

  @Prop(String)
  strArea!: string;

  @Prop(String)
  strCategory!: string;

  @Prop(String)
  strInstructions!: string;

  @Prop(String)
  strTags!: string;

  get instructionsArr() {
    let arr: string[] = [];
    if (this.strInstructions) {
      arr = this.strInstructions.split('.');
      arr.pop();
    }
    return arr;
  }
}
</script>
<style lang="scss" scoped>
  .recipe-content {
    width:100%;
    & h3 {
      margin: 20px 0px;
    }
    & h5 {
      margin: 10px 0px;
    }
    &__image {
      width:100%;
      border-radius: 10px;
    }
    &__words {
      align-self: end;
    }
    & ul {
      margin-top: 10px;
      color: rgb(120, 120, 120);
      list-style-position: inside;
    }
    &__wrapper {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-gap: 40px;
    }

    @media screen and (max-width: 1024px) {
      .recipe-content {
        &__wrapper {
          display: block;
        }
      }
    }
  }
</style>
