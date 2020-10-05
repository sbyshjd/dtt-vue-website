<template>
  <div class="home container">
    <div class="mt-3 mb-3 text-center">
      Sort By Name
      <button @click="e => sortByName('ascending')">Up</button>
      <button @click="e => sortByName('descending')">Down</button>
    </div>
    <div class="row">
      <RecipeCard v-for="recipe in recipes" :key="recipe.idMeal" v-bind="recipe"></RecipeCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipesDataService from '../services/recipesDataService';
import RecipeCard from '../components/RecipeCard.vue';

@Component({
  name: 'Home',
  components: {
    RecipeCard,
  },
})
export default class Home extends Vue {
  private recipes: any[] = [];

  retrieveRecipes() {
    const service: RecipesDataService = new RecipesDataService();
    service.getAll().then((res: any) => {
      const recipesArray = res.meals.slice(0, 10);
      this.recipes = recipesArray;
      console.log(this.recipes);
    });
  }

  sortByName(type: string) {
    const sortedRecipes: any[] = [...this.recipes].sort((recipeA: any, recipeB: any): number => {
      const nameA: string = recipeA.strMeal.toLowerCase();
      const nameB: string = recipeB.strMeal.toLowerCase();
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

  mounted() {
    this.retrieveRecipes();
  }
}
</script>
