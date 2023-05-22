<template>
  <my-header></my-header>
  <div class="bg-radial">
    <start-now></start-now>
  </div>
  <em-alta></em-alta>
  <my-footer></my-footer>
</template>

<script setup lang="ts">
import StartNow from "@/components/home/StartNow.vue";
import EmAlta from "@/components/home/MusicBar.vue";
import MyHeader from "@/components/header/MyHeader.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
</script>
