<template>
  <div v-if="props.review">
    <div class="bg-s1">
      <div class="container g-0">
        <div class="row padding-4em">
          <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="img-card">
              <img class="img-fluid s-border-radius shadow-default"  :src="useUploadFile(props.review.music.cover.url)" alt="capa do álbum">
            </div>
          </div>
          <div class="col-12 col-md-6 px-4 px-md-0 d-flex align-items-end mt-4 mt-md-0">
            <div>
              <div class="d-flex align-items-center">
                <span>Rated by: {{ props.review.author.username }} in {{ props.review.postDate }}</span>
              </div>
              <div>
                <RatingBar :rating="props.review.rate"></RatingBar>
              </div>
              <h1 class="mb-2 text-break">{{ props.review.title }}</h1>
              <span class="music-data d-flex align-items-center">
                <span>{{ props.review.music.title }}</span>
                <i class="bi bi-circle-fill divider"></i>
                <span> {{ props.review.music.artist.name }}</span>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-s0 padding-to-footer">
      <div class="container g-0">
        <div class="action-bar">
          <button class="btn-crud me-4" @click="showMusicModal">Editar</button>
          <button @click="deleteReview" class="btn-crud-secondary">Remover</button>
        </div>
        <h2>Review</h2>
        <p class="lyrics-text text-break">
          {{ props.review.review }}
        </p>
      </div>
    </div>

    <review-form :review-update="review" :is-update="true" ref="modalInstance" id="reviewModal" :music="props.review.music" @music-added="closeModal"></review-form>
  </div>
</template>

<script setup lang="ts">
import {Modal} from "bootstrap";
import {useUploadFile} from "@/utils/useUploadURL";
import RatingBar from "@/components/rating-bar/RatingBar.vue";
import ReviewForm from "@/components/forms/ReviewForm.vue";
import {useUserStore} from "@/stores/userStore";
import router from "@/router";
import type {CompleteReviewResponse} from "@/services/review/response/CompleteReviewResponse";
import {ReviewService} from "@/services/review/ReviewService";


let modalInstance: Modal;


const props = defineProps({
  review: {
    type: Object as () => CompleteReviewResponse
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

async function deleteReview() {
  if (props.review){
    await ReviewService.delete(props.review.id)
    await router.push('/reviews')
  }
}

function closeModal() {
  modalInstance.hide();
}

</script>

<style scoped>
@import "src/styles/PageDescription.css";
</style>