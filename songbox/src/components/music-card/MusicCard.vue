<template>
  <div class="d-block card-music s-border-radius">
    <div class="img-card">
      <img class="img-fluid s-border-radius"  :src="music.imgLink" alt="capa do álbum">
    </div>
    <div class="d-flex justify-content-between text-card">
      <p>{{ music.title }}</p>
      <span>
          {{ music.grade }}
          <i class="bi bi-star-fill"></i>
        </span>
    </div>
    <p class="artist-text">{{ music.artist.name }}</p>
  </div>
</template>

<script>
import {Music} from "@/model/Music";

export default {
  name: 'MusicCard',
  components: {},
  props: {
    music:Music
  },
}
</script>
<style scoped>
.img-card {
  filter: drop-shadow(0px 0px 12px rgba(16, 16, 18, 0.5));
}

.text-card {
  margin-top: 0.8em;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.02em;
}

p {
  margin: 0;
}

.text-card > p {
  margin-bottom: 0.4em;
}

.card-music {
  background-color: var(--b-card-color);
  padding: 20px;
}

.artist-text {
  font-size: 0.8em;
  color: var(--b3-primary-color);

}
</style>