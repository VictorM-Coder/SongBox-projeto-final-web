<template>
  <div class="container card-music s-border-radius">
    <div class="row">
      <div class="img-card col-6">
        <img class="img-fluid s-border-radius"  :src="useUploadFile(props.review.music.cover.url)" alt="capa do álbum">
      </div>

      <div class="col-6">
        <div class="d-flex flex-column">
          <h3>{{ props.review.title }}</h3>
          <div class="d-flex align-items-center">
            <span class="me-2">Usuário:</span>
            <rating-bar :rating="props.review.rate"/>
          </div>
        </div>
        <div class="d-flex text-card mt-3">
          <p class="mb-0">{{ props.review.music.title }}</p>
        </div>
        <p class="artist-text mb-2">{{ props.review.music.artist.name }}</p>
        <p class="description-text">
          {{ props.review.review}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useUploadFile} from "@/utils/useUploadURL";
import RatingBar from "@/components/rating-bar/RatingBar.vue";
import type {ReviewResponse} from "@/services/review/response/ReviewResponse";

const props = defineProps({
  review: {
    type: Object as () => ReviewResponse
  }
})

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

.description-text {
  color: var(--b3-primary-color);
}
</style>