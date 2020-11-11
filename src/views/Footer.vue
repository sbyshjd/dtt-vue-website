<template>
  <div class="footer">
      <p class="footer__item"><a class="footer__link" href="https://github.com/sbyshjd" target="_blank">GitHub</a></p>
      <p class="footer__item"><a class="footer__link" href="https://www.boyuanshiweb.com/" target="_blank">BoyuanShi Website</a></p>
      <p class="footer__item"><a class="footer__link" href="https://www.linkedin.com/in/boyuan-shi/" target="_blank">LinkedIn</a></p>
      <p class="footer__item">Copyright@2020 Boyuan Shi</p>
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
  background-color: rgb(240, 240, 240);
  &__item {
    font-size: 14px;
    padding: 15px 10px;
    text-align: center;
    color: rgb(165, 165, 165);
  }
  &__link {
    text-decoration: none;
    color: rgb(70, 70, 70);
  }
}

@media screen and (max-width: 560px) {
  .footer {
    display: block;
  }
}
</style>
