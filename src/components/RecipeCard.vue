<template>
  <div class="recipe-card">
    <img class="recipe-card__image" :src="strMealThumb" alt="recipe-sample">
    <div class="recipe-card__body">
      <p class="recipe-card__title">{{strMeal}}</p>
      <button class="recipe-card__btn">
        <router-link :to="`/detail/${idMeal}`" class="recipe-card__link">Read More</router-link>
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RecipeCard extends Vue {
    @Prop(String)
    strMeal!: string;

    @Prop(String)
    strMealThumb!: string;

    @Prop(String)
    idMeal!: string;
}
</script>
<style lang="scss">
  .recipe-card {
    width:100%;
    border-radius: 10px;
    border: 1px solid rgb(209, 209, 209);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    &__image {
      width:100%;
      border-radius: 10px 10px 0px 0px;
    }
    &__body {
      padding: 30px;
    }
    &__title {
      margin-bottom: 15px;
      font-weight: 500;
    }
    &__btn {
      border: none;
      background-color:#4d4dff;
      padding: 10px;
      border-radius: 5px;
    }
    &__btn:hover {
      background-color:#3655b3;
    }
    &__link {
      text-decoration: none;
      color: white;
    }
    &__link:hover {
      text-decoration: none;
      color: white;
    }
  }
</style>
