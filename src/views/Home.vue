<template>
  <div class="home">
    <div class="home__header">
      Sort By Name
      <button @click="e => sortByName('descending')">
        <b-icon-arrow-down></b-icon-arrow-down>
      </button>
      <button @click="e => sortByName('ascending')">
        <b-icon-arrow-up></b-icon-arrow-up>
      </button>
    </div>
    <transition-group name="flip-list" tag="div" class="wrapper">
      <RecipeCard v-for="recipe in recipes" :key="recipe.idMeal" v-bind="recipe"></RecipeCard>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue';
import { Component, Vue } from 'vue-property-decorator';
import RecipesDataService from '../services/recipesDataService';
import RecipeCard from '../components/RecipeCard.vue';

@Component({
  name: 'Home',
  components: {
    BIcon,
    BIconArrowUp,
    BIconArrowDown,
    RecipeCard,
  },
})
export default class Home extends Vue {
  private recipes: any[] = [];

  public retrieveRecipes() {
    const service: RecipesDataService = new RecipesDataService();
    service.getAll().then((res: any) => {
      const recipesArray = res.meals.slice(0, 10);
      this.recipes = recipesArray;
    });
  }

  public sortByName(type: string) {
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

  created() {
    this.retrieveRecipes();
  }
}
</script>
<style lang="scss">
  .home {
    padding-left: 20px;
    padding-right: 20px;
    &__header {
      margin: 20px;
      text-align: center;
    }
    &__header button {
      margin: 0px 5px;
      padding: 0px 5px;
    }
  }
  .flip-list-move {
  transition: transform 1s;
  }
</style>
