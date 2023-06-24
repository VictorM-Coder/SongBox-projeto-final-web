<template>
  <div class="modal fade modal-lg" tabindex="-1" data-bs-backdrop="static" aria-labelledby="musicModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-s0">
        <div class="modal-header border-0">
          <div class="container g-0">
            <div class="row">
              <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
                <div class="img-card">
                  <img class="img-fluid s-border-radius shadow-default"  :src="useUploadFile(props.music.cover.url)" alt="capa do álbum">
                </div>
              </div>
              <div class="col-12 col-md-6 d-flex align-items-end mt-4 mt-md-0">
                <div>
                  <p class="music-data text-uppercase mb-2">I LISTENED</p>
                  <h2 class="mb-1">{{ props.music.title }}</h2>
                  <span class="music-data d-flex align-items-center">
                      <span>{{ props.music.artist.name }}</span>
                      <i class="bi bi-circle-fill divider"></i>
                      <span> {{ props.music.releaseYear }}</span>
                      <i class="bi bi-circle-fill divider"></i>
                      <span> {{ `${props.music.minutesDuration}:${props.music.secondsDuration}` }}</span>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body border-0">
          <form ref="reviewForm" class="needs-validation" novalidate>
            <div class="mb-3">
              <label for="rating-bar" class="col-form-label">Rating:</label>
              <rating-bar-dynamic @rated="setRating" id="rating-bar"></rating-bar-dynamic>
            </div>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Title:</label>
              <input v-model="review.title" type="text" class="form-control" id="recipient-name" required>
              <div class="invalid-feedback">
                Campo obrigatório.
              </div>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Review:</label>
              <textarea v-model="review.review" class="form-control" id="message-text" required></textarea>
              <div class="invalid-feedback">
                Campo obrigatório.
              </div>
            </div>
            <div class="mb-3">
              <label for="tags-input" class="col-form-label">Tags:</label>
              <vue3-tags-input
                  id="tags-input"
                  :tags="review.tags"
                  placeholder="add tags"
                  @on-tags-changed="handleChangeTag"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer border-0">
          <button @click="resetForm" type="button" class="btn-crud-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="submitReview" type="button" class="btn-crud">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Music} from "@/model/Music";
import {useUploadFile} from "@/utils/useUploadURL";
import {ref} from "vue";
// @ts-ignore
import Vue3TagsInput from 'vue3-tags-input';
import RatingBarDynamic from "@/components/rating-bar/RatingBarDynamic.vue";
import type {Review} from "@/model/Review";
import {ReviewService} from "@/services/review/ReviewService";

const reviewForm = ref<HTMLFormElement>()
const review = ref<Review>({} as Review)
const props = defineProps({
  music: Music
})

function handleChangeTag(newTags:string[]) {
  review.value.tags = newTags
}

const resetForm = () => {
  review.value = {} as Review
}

defineExpose({
  resetForm,
})

async function submitReview(event: SubmitEvent) {
  event.preventDefault()
  event.stopPropagation()
  if (reviewForm.value?.checkValidity()) {
    if (props.music?.id ) {
      review.value.music = props.music.id
      review.value.postDate = new Date()
      review.value.rate = review.value.rate?? 0
      await ReviewService.post(review.value)
    }
  } else {
    reviewForm.value?.classList.add('was-validated')
  }
}

function setRating(rate: number){
  review.value.rate = rate
}

</script>