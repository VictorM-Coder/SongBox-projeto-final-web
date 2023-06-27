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
                <RatingBar :rating="props.music.rate?? 0"></RatingBar>
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

    <review-form ref="modalInstance" id="reviewModal" :music="music" @music-added="closeModal"></review-form>
  </div>
</template>

<script setup lang="ts">
import {Modal} from "bootstrap";
import {useUploadFile} from "@/utils/useUploadURL";
import RatingBar from "@/components/rating-bar/RatingBar.vue";
import ReviewForm from "@/components/forms/ReviewForm.vue";
import {useUserStore} from "@/stores/userStore";
import router from "@/router";
import type {MusicResponse} from "@/services/music/response/MusicResponse";

let modalInstance: Modal;


const props = defineProps({
  music: {
    type: Object as () => MusicResponse
  }
})

function showMusicModal(){
  if (useUserStore().user.username){
    modalInstance = new Modal(document.getElementById("reviewModal") as Element);
    modalInstance.show();
  } else {
    router.push('/login')
  }

}

function closeModal() {
  modalInstance.hide();
}

</script>

<style scoped>
@import "src/styles/PageDescription.css";
</style>