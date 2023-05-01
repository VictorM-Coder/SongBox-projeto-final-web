<script setup lang="ts">

import MyHeader from "@/components/header/MyHeader.vue";
import StartNow from "@/components/home/StartNow.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
</script>

<template>
  <div class="bg-radial">
    <MyHeader></MyHeader>
    <start-now></start-now>
  </div>
  <MyFooter></MyFooter>
</template>

<style scoped>
.bg-radial {
  background: radial-gradient(50% 50% at 50% 50%, rgb(198 201 242 / 12%) 0%, rgba(16, 16, 18, 0) 100%);
}
</style>
