<template>
  <div>
    <music-card :music="music"></music-card>
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