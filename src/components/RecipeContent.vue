<template>
  <div class="recipe-content">
    <h3>{{ strMeal }}</h3>
    <img :src="strMealThumb" alt="food-sample" />
    <h5>Area: <i>{{ strArea }}</i></h5>
    <h5>Categoty: <i>{{ strCategory }}</i></h5>
    <h5>Main Ingredients: <i>{{ strTags }}</i></h5>
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
      console.log(arr);
    }
    return arr;
  }
}
</script>
