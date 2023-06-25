<template>
  <my-header></my-header>
  <div class="bg-radial">
    <start-now></start-now>
  </div>
  <music-bar v-if="musics" :musics="musics" @change-page="changePage" :tot-items="totItems"></music-bar>
  <my-footer></my-footer>
</template>

<script setup lang="ts">
import StartNow from "@/components/home/StartNow.vue";
import MusicBar from "@/components/home/MusicBar.vue";
import MyHeader from "@/components/header/MyHeader.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
import {MusicService} from "@/services/music/MusicService";
import {onMounted, ref} from "vue";
import {Music} from "@/model/Music";

const musics = ref<Music[]>()
const totItems = ref<Number>(0)

onMounted(async () => {
  await getMusics(1)
})

async function changePage(page: number) {
  await getMusics(page)
}

async function getMusics(page: number) {
  const musicResponse = await MusicService.get(page)
  if (musicResponse) {
    musics.value = musicResponse.items
    totItems.value = musicResponse.pagination.total
  }
}

</script>
