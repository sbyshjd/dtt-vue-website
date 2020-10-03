<template>
  <div class="home">
    This is the home page of the website
    <div v-for="(recipe, index) in recipes" :key="recipe.id">
      {{ index }}{{ recipe.title }}{{ recipe.healthScore }}
    <img :src="recipe.image" alt="food-sample">
    </div>
    <button @click="e => sortByName('ascending')">Sort By Name</button>
    <button @click="e => sortByName('descending')">Sort By Name(descending)</button>
    <button @click="e => sortByHealthScore('ascending')">Sort By HealthScore</button>
    <button @click="e => sortByHealthScore('descending')">
      Sort By HealthScore(descending)
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipesDataService from '../services/recipesDataService';

@Component
export default class Home extends Vue {
  private recipes: any[] = [];

  retrieveRecipes() {
    const service: RecipesDataService = new RecipesDataService();
    service.getAll().then((res: any) => {
      console.log(res);
      const recipesArray = res.recipes.filter((recipe: any) => recipe.image).slice(0, 10);
      this.recipes = recipesArray;
    });
  }

  sortByName(type: string) {
    const sortedRecipes: any[] = [...this.recipes].sort((recipeA: any, recipeB: any): number => {
      const nameA: string = recipeA.title.toLowerCase();
      const nameB: string = recipeB.title.toLowerCase();
      if (type === 'ascending') {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    });

    this.recipes = sortedRecipes;
  }

  sortByHealthScore(type: string) {
    const sortedRecipes: any[] = [...this.recipes].sort((recipeA: any, recipeB: any): number => {
      const healthA: number = recipeA.healthScore;
      const healthB: number = recipeB.healthScore;
      if (type === 'ascending') {
        if (healthA < healthB) return -1;
        if (healthA > healthB) return 1;
        return 0;
      }
      if (healthA < healthB) return 1;
      if (healthA > healthB) return -1;
      return 0;
    });

    this.recipes = sortedRecipes;
  }

  mounted() {
    this.retrieveRecipes();
  }
}
</script>
