<template>
  <div class="container">
    <div class="row mb-20">
      <div class="d-flex justify-content-between align-items-end">
        <h2>Em Alta</h2>
        <button class="btn-show">Mostrar tudo</button>
      </div>
    </div>
    <div class="d-flex justify-content-between flex-wrap padding-to-footer">
      <music-card :music="music"></music-card>
      <music-card :music="music"></music-card>
      <music-card :music="music"></music-card>
      <music-card :music="music"></music-card>
    </div>
  </div>
</template>

<script>
import MusicCard from "@/components/music-card/MusicCard.vue";
import {Music} from "@/model/Music";
import {Artist} from "@/model/Artist";

export default {
  name: "EmAlta",
  components: {MusicCard},
  data() {
    return {
      music: new Music(1, "Thunder", new Artist(1, "Imagine Dragons"), 2, 4.5, new Date(), "lirics", "src/assets/capa.jpg")
    }
  },
}
</script>


<style scoped>

h2 {
  margin: 0;
}
</style>