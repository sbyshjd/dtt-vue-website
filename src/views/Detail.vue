<template>
  <div class="detail container">
    <recipe-content v-bind="detailRecipe"></recipe-content>
    <hr/>
    <h3>Similar Recipes</h3>
    <div class="row">
      <RecipeCard v-for="recipe in similarRecipes" :key="recipe.id" v-bind="recipe"></RecipeCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipesDataService from '../services/recipesDataService';
import RecipeCard from '../components/RecipeCard.vue';
import RecipeContent from '../components/RecipeContent.vue';

@Component({
  name: 'Detail',
  components: {
    RecipeCard,
    RecipeContent,
  },
})
export default class Detail extends Vue {
  private detailRecipe: object= {};

  private similarRecipes: any[]= [];

  private id: string = this.$route.params.id;

  getDetailInformation(id: string) {
    const server = new RecipesDataService();
    server.getInfoById(id)
      .then((res: any) => {
        const meal = res.meals[0];
        this.detailRecipe = meal;
        return meal;
      })
      .then((res: any) => server.getSimilar(res.strArea, res.strCategory))
      .then((res: any) => {
        const results = res.meals
          .filter((meal: any) => meal.idMeal.toString() !== id);
        const meals = results.splice(Math.floor(Math.random() * (results.length - 3)), 3);
        this.similarRecipes = meals;
      });
  }

  mounted() {
    this.getDetailInformation(this.$route.params.id);
  }
}
</script>
