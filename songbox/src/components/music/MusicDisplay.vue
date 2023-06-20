<template>
  <div v-if="props.music">
    <div class="bg-s1">
      <div class="container g-0">
        <div class="row padding-4em">
          <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="img-card">
              <img class="img-fluid s-border-radius shadow-default"  :src="useUploadFile(props.music.cover.url)" alt="capa do álbum">
            </div>
          </div>
          <div class="col-12 col-md-6 px-4 px-md-0 d-flex align-items-end mt-4 mt-md-0">
            <div>
              <div class="d-flex align-items-center mb-2">
                <label class="d-flex align-items-center me-2 lh-1">RATING:</label>
                <RatingBar rating="4.5"></RatingBar>
              </div>
              <h1>{{ props.music.title }}</h1>
              <span class="music-data d-flex align-items-center">
              <span>{{ props.music.artist.name }}</span>
              <i class="bi bi-circle-fill divider"></i>
              <span> {{ props.music.releaseYear }}</span>
              <i class="bi bi-circle-fill divider"></i>
              <span> {{ `${props.music.minutesDuration}:${props.music.secondsDuration}` }} </span>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-s0 padding-to-footer">
      <div class="container g-0">
        <div class="action-bar">
          <button class="btn-crud me-4" @click="showMusicModal"><i class="bi bi-plus-lg"></i> Review</button>
          <button class="btn-crud"><i class="bi bi-plus-lg"></i> Playlist</button>
        </div>
        <h2>Letra</h2>
        <p class="lyrics-text">
          {{ props.music.lyrics }}
        </p>
      </div>
    </div>

    <review-form id="musicModal" ref="reviewModal" :music="music"></review-form>
  </div>
</template>

<script setup lang="ts">
import {Modal} from "bootstrap";
import {Music} from "@/model/Music";
import {useUploadFile} from "@/utils/useUploadURL";
import {onMounted, ref} from "vue";
import RatingBar from "@/components/rating-bar/RatingBar.vue";
import ReviewForm from "@/components/forms/ReviewForm.vue";

const reviewModal = ref<ReviewForm>()

const props = defineProps({
  music: Music
})

onMounted(() => {
  document.getElementById("musicModal")?.addEventListener('hidden.bs.modal', () => {
    reviewModal.value.resetForm()
  })
})

function showMusicModal(){
  const modalInstance = new Modal(document.getElementById("musicModal") as Element);
  modalInstance.show();
}

</script>

<style scoped>

h1 {
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.01em;
}

@media (min-width: 576px) {
  h1 {
    font-size: 2em;
  }

}
@media (min-width: 768px) {
  h1 {
    font-size: 3.5em;
  }
}

@media (min-width: 992px) {
  h1 {
    font-size: 3.5em;
  }
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

.action-bar {
  padding: 4em 0;
}

.padding-4em{
  padding-bottom: 4em;
}
</style>