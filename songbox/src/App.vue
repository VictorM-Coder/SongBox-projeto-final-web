<script setup lang="ts">

import MyHeader from "@/components/header/MyHeader.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
</script>

<template>
  <MyHeader></MyHeader>
  <router-view></router-view>
  <MyFooter></MyFooter>
</template>


<style scoped>
</style>