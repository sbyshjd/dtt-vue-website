<template>
  <div class="recipe-card">
    <img :src="strMealThumb" alt="food-sample">
    <h3>{{strMeal}}</h3>
    <router-link :to="`/detail/${idMeal}`">Read More</router-link>
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
