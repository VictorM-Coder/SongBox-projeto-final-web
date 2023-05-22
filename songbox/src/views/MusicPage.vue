<template>
  <my-header></my-header>
  <main class="bg-s1 header-margin">
    <display-music></display-music>
  </main>
  <my-footer></my-footer>
</template>


<script setup lang="ts">
import DisplayMusic from "@/components/music/MusicDisplay.vue";
import MyHeader from "@/components/header/MyHeader.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
</script>