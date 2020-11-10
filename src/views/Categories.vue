<template>
  <div class="categories container">
    <div class="mt-3 mb-3 text-center">
      These are favorite recipes of <strong>{{ingredient}}</strong>
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
  name: 'Categories',
  components: {
    RecipeCard,
  },
})
export default class Home extends Vue {
  private recipes: any[] = [];

  private ingredient: string = this.$route.params.ingredient;

  retrieveRecipes() {
    const service: RecipesDataService = new RecipesDataService();
    service.getByIngredient(this.ingredient).then((res: any) => {
      const recipesArray = res.meals.slice(0, 10);
      this.recipes = recipesArray;
    });
  }

  mounted() {
    this.retrieveRecipes();
  }
}
</script>
