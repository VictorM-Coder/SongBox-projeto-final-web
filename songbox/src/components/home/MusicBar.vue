<template>
  <div class="container g-0">
    <div class="row mb-20">
      <div class="d-flex justify-content-between align-items-end">
        <h2>Em Alta</h2>
        <button class="btn-show">Mostrar tudo</button>
      </div>
    </div>
    <div class="container-fluid g-0 padding-to-footer">
      <div class="row">
<!--        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-0">-->
<!--          <music-card :music="music"></music-card>-->
<!--        </div>-->
<!--        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-0">-->
<!--          <music-card :music="music"></music-card>-->
<!--        </div>-->
<!--        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-0">-->
<!--          <music-card :music="music"></music-card>-->
<!--        </div>-->
<!--        <div class="col-6 col-md-4 col-lg-3 mb-4 mb-lg-0">-->
<!--          <music-card :music="music"></music-card>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MusicCard from "@/components/music-card/MusicCard.vue";
import type {Music} from "@/model/Music";
import {Artist} from "@/model/Artist";
import {MusicService} from "@/services/music/MusicService";

export default {
  name: "EmAlta",
  // components: { MusicCard },
  props: {
    musics: [],
  },
  async mounted() {
    await MusicService.get().then(value => console.log(value)).catch(reason => console.log(reason))
  }
}
</script>


<style scoped>

h2 {
  margin: 0;
}
</style>