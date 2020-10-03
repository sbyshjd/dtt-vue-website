<template>
  <div class="home">
    This is the home page of the website
    <div v-for="(recipe, index) in recipes" :key="recipe.id">{{index}}{{recipe.title}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import cuisines from '../services/cuisines';
import RecipesDataService from '../services/recipesDataService';

@Component
export default class Home extends Vue {
  private recipes: any[] = [];

  retrieveRecipes() {
    const cuisine: string = cuisines[Math.floor(Math.random() * cuisines.length)];
    const service: RecipesDataService = new RecipesDataService();
    service.getAll(cuisine).then((res: any) => {
      console.log(cuisine);
      console.log(res);
      this.recipes = res.results;
    });
  }

  mounted() {
    this.retrieveRecipes();
  }
}
</script>
