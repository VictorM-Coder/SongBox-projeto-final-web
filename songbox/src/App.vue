<script setup lang="ts">

import MyHeader from "@/components/header/MyHeader.vue";
import StartNow from "@/components/home/StartNow.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
import EmAlta from "@/components/home/EmAlta.vue";
</script>

<template>
  <MyHeader></MyHeader>
  <div class="bg-radial">
    <start-now></start-now>
  </div>
  <em-alta></em-alta>
  <MyFooter></MyFooter>
</template>

<style scoped>
.bg-radial {
  background: radial-gradient(50% 50% at 50% 50%, rgb(198 201 242 / 12%) 0%, rgba(16, 16, 18, 0) 100%);
}
</style>
