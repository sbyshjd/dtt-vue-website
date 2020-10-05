<template>
  <div class="recipe-content">
    <h3>{{strMeal}}</h3>
    <img :src="strMealThumb" alt="food-sample">
    <p>{{strArea}}</p>
    <p>{{strCategory}}</p>
    <p>{{strTags}}</p>
    <p>{{strInstructions}}</p>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class RecipeContent extends Vue {
    @Prop(String)
    strMeal!: string;

    @Prop(String)
    strMealThumb!: string;

    @Prop(String)
    idMeal!: string;

    @Prop(String)
    strArea!: string;

    @Prop(String)
    strCategory!: string;

    @Prop(String)
    strInstructions!: string;

    @Prop(String)
    strTags!: string;
}
</script>
