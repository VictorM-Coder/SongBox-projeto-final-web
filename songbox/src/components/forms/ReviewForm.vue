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
                <div class="inherit">
                  <p class="music-data text-uppercase mb-2">I LISTENED</p>
                  <h2 class="mb-1 text-truncate">{{ props.music.title }}</h2>
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
              <rating-bar-dynamic ref="ratingBar" @rated="setRating" id="rating-bar"></rating-bar-dynamic>
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
              <textarea :rows="rowsCount" v-model="review.review" class="form-control" id="message-text" required></textarea>
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
          <button @click="resetForm" type="button" class="btn-crud-secondary" data-bs-dismiss="modal">Fechar</button>
          <button @click="submitReview" type="button" class="btn-crud">{{ !isUpdate ? 'Adicionar': 'Atualizar'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUploadFile} from "@/utils/useUploadURL";
import {computed, onMounted, ref} from "vue";
// @ts-ignore
import Vue3TagsInput from 'vue3-tags-input';
import RatingBarDynamic from "@/components/rating-bar/RatingBarDynamic.vue";
import type {Review} from "@/model/Review";
import {ReviewService} from "@/services/review/ReviewService";
import {useNotificationStore} from "@/stores/useNotification";
import type {CompleteReviewResponse} from "@/services/review/response/CompleteReviewResponse";
import type {MusicResponse} from "@/services/music/response/MusicResponse";

const rowsCount = computed(() => {
  if (review.value.review){
    const lines = review.value.review.split('\n').length
    if (lines <= 2) return 2
    if (lines >= 20) return 20
    return lines
  }
  return 2
})

const reviewForm = ref<HTMLFormElement>()
const review = ref<Review>({} as Review)
const ratingBar = ref<RatingBarDynamic>()
const props = defineProps({
  music: {
    type: Object as () => MusicResponse
  },
  isUpdate: Boolean,
  reviewUpdate: Object as () => CompleteReviewResponse
})

function handleChangeTag(newTags:string[]) {
  review.value.tags = newTags
}

const resetForm = () => {
  if (props.isUpdate){
    setReviewUpdate()
  } else {
    review.value = {} as Review
    ratingBar.value.resetComponent()
  }
}

const emits = defineEmits([
    'musicAdded', 'musicUpdated'
])

onMounted(() => {
  if (props.isUpdate){
    setReviewUpdate()
  }
})


async function submitReview(event: SubmitEvent) {
  event.preventDefault()
  event.stopPropagation()
  if (reviewForm.value?.checkValidity()) {
    if (props.music?.id ) {
      review.value.music = props.music.id
      review.value.postDate = new Date()
      review.value.rate = review.value.rate?? 0

      if (props.isUpdate){
        await updateReview()
      } else {
        await addReview()
      }
    }
  } else {
    reviewForm.value?.classList.add('was-validated')
  }
}

function setRating(rate: number){
  review.value.rate = rate
}

async function addReview() {
  if (await ReviewService.post(review.value)) {
    useNotificationStore().add('Review adicionada com sucesso')
    emits('musicAdded')
    resetForm()
  }
}

async function updateReview(){
  if (await ReviewService.put(review.value)) {
    useNotificationStore().add('Review atualizada com sucesso')
    emits('musicUpdated')
    resetForm()
  }
}

function setReviewUpdate() {
  if (props.reviewUpdate){
    review.value.id = props.reviewUpdate.id
    review.value.title = props.reviewUpdate.title
    review.value.review = props.reviewUpdate.review
    review.value.rate = props.reviewUpdate.rate
    review.value.music = props.reviewUpdate.music.id
    review.value.tags = []
    for (let tag of props.reviewUpdate.tags){
      review.value.tags.push(tag.tag)
    }
    ratingBar.value.resetComponent(review.value.rate)
  }
}

</script>

<style scoped>
.inherit {
  max-width: inherit;
}
</style>