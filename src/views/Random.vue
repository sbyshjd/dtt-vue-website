<template>
  <div class="random">
    This is the random page of the website
    <button>Another Random Recipe</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Random extends Vue {}
</script>
