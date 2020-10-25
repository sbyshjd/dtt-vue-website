<template>
  <div class="footer">
      Copyright@2020 Boyuan Shi
      <a class="footer__link" href="https://github.com/sbyshjd" target="_blank">GitHub</a>
      <a class="footer__link" href="https://www.boyuanshiweb.com/" target="_blank">BoyuanShi Website</a>
      <a class="footer__link" href="https://www.linkedin.com/in/boyuan-shi/" target="_blank">LinkedIn</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>
<style lang="scss">
.footer {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: grey;
  height: 50px;
  &__link {
    text-decoration: none;
    color: white;
  }
}
</style>
