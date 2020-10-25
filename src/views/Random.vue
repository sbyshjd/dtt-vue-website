<template>
  <div class="random container">
    <recipe-content v-bind="recipe"></recipe-content>
    <button class="btn btn-primary" @click="retrieveRecipe">Another Random Recipe</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecipesDataService from '../services/recipesDataService';
import RecipeContent from '../components/RecipeContent.vue';

@Component({
  name: 'Random',
  components: {
    'recipe-content': RecipeContent,
  },
})
export default class Random extends Vue {
  private recipe = {};

  retrieveRecipe() {
    const service = new RecipesDataService();
    service.getRandom().then((res: any) => {
      const randomRecipe = res.meals[0];
      this.recipe = randomRecipe;
    });
  }

  mounted() {
    this.retrieveRecipe();
  }
}
</script>
