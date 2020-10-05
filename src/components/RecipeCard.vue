<template>
  <div class="recipe-card col-sm-6 col-md-4 pl-2 pr-2 mb-5">
    <div class="card shadow">
    <img class="card-img-top" :src="strMealThumb" alt="food-sample">
    <div class="card-body">
      <p class="card-title">{{strMeal}}</p>
      <router-link :to="`/detail/${idMeal}`" class="btn btn-primary">Read More</router-link>
    </div>
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
