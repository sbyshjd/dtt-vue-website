<template>
  <div class="detail">
    <recipe-content v-bind="detailRecipe"></recipe-content>
    <hr/>
    <h3>Similar Recipes</h3>
    <div class="wrapper">
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

  public getDetailInformation(id: string) {
    const server = new RecipesDataService();
    server.getInfoById(id)
      .then((res: any) => {
        const meal = res.meals[0];
        this.detailRecipe = meal;
        return meal;
      })
      .then((res: any) => server.getSimilar(res.strArea, res.strCategory))
      // to filter out the same recipe from the similar recipes we get from the API
      .then((res: any) => {
        const results = res.meals
          .filter((meal: any) => meal.idMeal.toString() !== id);
        // we need 3 similar recipes and the results we get maybe larger than 3
        // so we pick a random position of the array and get the 3 items after it.
        // and apply the result to the similarRecipes
        const meals = results.splice(Math.floor(Math.random() * (results.length - 3)), 3);
        this.similarRecipes = meals;
      });
  }

  mounted() {
    this.getDetailInformation(this.$route.params.id);
  }
}
</script>
<style lang="scss">
  .detail {
    padding-left: 20px;
    padding-right: 20px;
    & hr {
      border: none;
      border-top: 1px solid rgb(156, 156, 156);
      margin: 20px 0px;
    }
    & h3 {
      margin-bottom: 10px;
    }
  }
</style>
