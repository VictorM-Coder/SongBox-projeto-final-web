<template>
  <my-header></my-header>
  <main class="bg-s1 header-margin">
    <display-music :music="music" ></display-music>
  </main>
  <my-footer></my-footer>
</template>


<script setup lang="ts">
import DisplayMusic from "@/components/music/MusicDisplay.vue";
import MyHeader from "@/components/header/MyHeader.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
import {onMounted, ref} from "vue";
import { useRoute } from "vue-router"
import {Music} from "@/model/Music";
import {MusicService} from "@/services/music/MusicService";

const music = ref<Music>()

onMounted(async () => {
  music.value = await MusicService.getById(Number(useRoute().query.id))
})

</script>