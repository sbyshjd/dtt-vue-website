<template>
  <div class="detail">
    <h1>This is the detail page</h1>
    <recipe-content v-bind="detailRecipe"></recipe-content>
    <recipe-card v-for="recipe in similarRecipes" :key="recipe.id" v-bind="recipe"></recipe-card>
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
    'recipe-card': RecipeCard,
    'recipe-content': RecipeContent,
  },
})
export default class Detail extends Vue {
  private detailRecipe: object= {};

  private similarRecipes: any[]= [];

  private id: string = this.$route.params.id;

  getDetailInformation(id: string) {
    console.log(id);
    const server = new RecipesDataService();
    server.getInfoById(id)
      .then((res: any) => {
        console.log(res);
        const meal = res.meals[0];
        this.detailRecipe = meal;
        return meal;
      })
      .then((res: any) => server.getSimilar(res.strArea, res.strCategory))
      .then((res: any) => {
        console.log(id);
        const results = res.meals
          .filter((meal: any) => meal.idMeal.toString() !== id);
        console.log(results);
        const meals = results.splice(Math.floor(Math.random() * (results.length - 3)), 3);
        console.log(meals);
        this.similarRecipes = meals;
      });
  }

  mounted() {
    this.getDetailInformation(this.$route.params.id);
  }

  beforeRouteUpdate(to: any, from: any, next: any) {
    console.log('aaaaaaaaaaaa');
    this.getDetailInformation(to.params.id);
    next();
  }
}
</script>
