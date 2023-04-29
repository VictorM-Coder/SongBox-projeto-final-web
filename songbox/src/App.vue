<script setup lang="ts">

import MyHeader from "@/components/header/MyHeader.vue";
import StartNow from "@/components/home/StartNow.vue";
</script>

<template>
  <div>
    <MyHeader></MyHeader>
    <start-now></start-now>
  </div>
</template>

<style scoped>
div {
  background: radial-gradient(50% 50% at 50% 50%, rgb(198 201 242 / 12%) 0%, rgba(16, 16, 18, 0) 100%);
}
</style>
