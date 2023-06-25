<template>
  <my-header></my-header>
  <div class="bg-radial">
    <start-now></start-now>
  </div>
  <music-bar v-if="musics" :musics="musics"></music-bar>
  <my-footer></my-footer>
</template>

<script setup lang="ts">
import StartNow from "@/components/home/StartNow.vue";
import MusicBar from "@/components/home/MusicBar.vue";
import MyHeader from "@/components/header/MyHeader.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
import {MusicService} from "@/services/music/MusicService";
import {onMounted, ref} from "vue";
import {Artist} from "@/model/Artist";

const musics = ref<{
  id: number
  title:string
  artist:Artist
  minutesDuration: number
  secondsDuration: number
  grade:number
  releaseYear: number
  lyrics:string
  cover: {
    url: string
  }
}[]>()

onMounted(async () => {
  musics.value = await MusicService.get()
})

</script>
