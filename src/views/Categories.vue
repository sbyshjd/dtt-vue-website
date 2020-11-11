<template>
  <div class="categories">
    <div class="categories__header">
      These are popular recipes of <strong>{{ingredient}}</strong>
    </div>
    <div class="wapper">
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
<style lang="scss">
  .categories {
    padding-left: 20px;
    padding-right: 20px;
    &__header {
      margin: 20px;
      text-align: center;
    }
  }
</style>
