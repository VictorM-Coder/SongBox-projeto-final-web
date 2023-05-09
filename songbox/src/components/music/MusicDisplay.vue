<template>
  <div class="bg-s1">
    <div class="container g-0">
      <div class="row padding-4em">
        <div class="col-6 col-md-4 col-lg-3 d-flex">
          <div class="img-card">
            <img class="img-fluid s-border-radius shadow-default"  :src="music.imgLink" alt="capa do álbum">
          </div>
        </div>
        <div class="col-6 d-flex align-items-end">
          <div>
            <p>Rating</p>
            <h1>{{ music.title }}</h1>
            <span class="music-data d-flex align-items-center">
              <span>{{ music.artist.name }}</span>
              <i class="bi bi-circle-fill divider"></i>
              <span> {{ music.release.getFullYear() }}</span>
              <i class="bi bi-circle-fill divider"></i>
              <span> {{ music.duration }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-s0 padding-to-footer">
    <div class="container g-0">
      <div class="action-bar">
        <button class="btn-crud me-4"><i class="bi bi-plus-lg"></i> Review</button>
        <button class="btn-crud"><i class="bi bi-plus-lg"></i> Playlist</button>
      </div>
      <h2>Letra</h2>
      <p class="lyrics-text">
        {{ music.lyrics }}
      </p>
    </div>
  </div>
</template>

<script>
import {Music} from "@/model/Music";
import {Artist} from "@/model/Artist";

export default {
  name: 'DisplayMusic',
  data() {
    return {
      music: new Music(1, "Thunder", new Artist(1, "Imagine Dragons"), 2, 4.5, new Date(), "Just a young gun with a quick fuse\n" +
          "I was uptight, wanna let loose\n" +
          "I was dreaming of bigger things and\n" +
          "Wanna leave my own life behind\n" +
          "Not a \"Yes, sir\", not a follower\n" +
          "Fit the box, fit the mold, have a seat\n" +
          "In the foyer, take a number\n" +
          "I was lightning before the thunder (thunder)\n" +
          "Thunder, thunder, thun-\n" +
          "Thunder, th-th-thunder, thunder\n" +
          "Thunder, thunder, thun-\n" +
          "Thunder, th-th-thunder, thunder\n" +
          "Thunder, feel the thunder (thun-, thun-)\n" +
          "Lightning then the thunder (th-th-thunder, thunder)\n" +
          "Thunder, feel the thunder (thun-, thun-)\n" +
          "Lightning then the thunder, thunder (th-th-thunder, thunder)\n" +
          "Thunder\n" +
          "Thunder\n" +
          "Kids were laughing in my classes\n" +
          "While I was scheming for the masses\n" +
          "Who do you think you are?\n" +
          "Dreaming 'bout being a big star\n" +
          "They say, \"You're basic\", they say, \"You're easy\"\n" +
          "You're always riding in the backseat\n" +
          "Now I'm smiling from the stage while\n" +
          "You were clapping in the nosebleeds\n" +
          "Thunder, thunder, thun-\n" +
          "Thunder, th-th-thunder, thunder\n" +
          "Thunder, thunder, thun-\n" +
          "Thunder, th-th-thunder, thunder\n" +
          "Thunder, feel the thunder (thun-, thun-)\n" +
          "Lightning then the thunder (th-th-thunder, thunder)\n" +
          "Thunder, feel the thunder (thun-, thun-)\n" +
          "Lightning then the thunder, thunder (th-th-thunder, thunder)\n" +
          "Thunder, feel the thunder\n" +
          "Lightning then the thunder, thunder\n" +
          "Thunder, feel the thunder (thun-, thun-)\n" +
          "Lightning then the thunder, thunder (th-th-thunder, thunder)\n" +
          "Thunder, feel the thunder (thun-, thun-)\n" +
          "Lightning then the thunder, thunder (th-th-thunder, thunder)\n" +
          "Thunder, feel the thunder (never give up, never give up)\n" +
          "Lightning then the thunder, thunder (never give up, never give up)\n" +
          "Thunder, feel the thunder (never give up, never give up)\n" +
          "Lightning then the thunder, thunder (never give up)\n" +
          "Thunder, thunder, thun-\n" +
          "Thunder, th-th-thunder, thunder\n" +
          "Thunder, thunder, thun-\n" +
          "Thunder, th-th-thunder, thunder\n" +
          "thunder, thunder, thun-\n" +
          "Thunder, th-th-thunder, thunder\n" +
          "(Whoa-oh-oh) thunder, thunder, thun-\n" +
          "Thunder, th-th-thunder, thunder", "src/assets/capa.jpg")
    }
  }
}
</script>

<style scoped>

h1 {
  font-size: 6em;
  font-weight: 600;
  letter-spacing: 0.01em;
}

h2 {
  margin-bottom: 1em;
}

.lyrics-text {
  white-space: pre-line;
  font-size: 1em;
  color: var(--p0-primary-color);
}

.img-card {
  max-width: 16em;
  border-radius: 8px;
}

.music-data {
  font-size: 1.3em;
  color: var(--p0-primary-color);
}

.action-bar {
  padding: 4em 0;
}

.padding-4em{
  padding-bottom: 4em;
}

.divider {
  font-size: 0.4em;
  margin: 0 12px;
}
</style>