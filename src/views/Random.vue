<template>
  <div class="random">
    This is the random page of the website
    <div>
      {{recipe.title}}
      <img :src="recipe.image" alt="food-sample">
    </div>
    <button @click="retrieveRecipe">Another Random Recipe</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipesDataService from '../services/recipesDataService';

@Component
export default class Random extends Vue {
  private recipe = {};

  retrieveRecipe() {
    const service = new RecipesDataService();
    service.getRandom().then((res: any) => {
      const randomRecipe = res.recipes.filter((recipe: any) => recipe.image)[0];
      this.recipe = randomRecipe;
    });
  }

  mounted() {
    this.retrieveRecipe();
  }
}
</script>
