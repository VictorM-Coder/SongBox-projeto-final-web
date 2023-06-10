<template>
  <my-header></my-header>
  <main class="header-margin padding-to-footer">
    <AdminForm></AdminForm>
  </main>
  <my-footer></my-footer>
</template>

<script setup lang="ts">
import MyHeader from "@/components/header/MyHeader.vue";
import DisplayMusic from "@/components/music/MusicDisplay.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
import AdminForm from "@/components/forms/AdminForm.vue";
</script>