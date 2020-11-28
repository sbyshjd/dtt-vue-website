<template>
  <div class="random">
    <button @click="retrieveRecipe">Another Random Recipe</button>
    <recipe-content v-bind="recipe"></recipe-content>
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

  public retrieveRecipe() {
    const service = new RecipesDataService();
    service.getRandom().then((res: any) => {
      const randomRecipe = res.meals[0];
      this.recipe = randomRecipe;
    });
  }

  created() {
    this.retrieveRecipe();
  }
}
</script>
<style lang="scss">
  .random {
    padding-left: 20px;
    padding-right: 20px;
    & button {
      color: white;
      background-color: #4d4dff;
      border: none;
      padding: 10px 20px;
      margin-top: 20px;
      border-radius: 5px;
      cursor: pointer;
      outline: none;
    }
    & button:hover {
      background-color: #3655b3;
    }
  }
</style>
