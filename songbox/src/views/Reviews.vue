<template>
  <my-header></my-header>
  <main class="bg-s2 header-margin padding-to-footer">
    <section class="container g-0">
      <div v-if="isLoading" class="row">
        <div v-for="review in reviews" class="col-12 col-lg-6 mb-4" :key="review.id">
          <review-card :review="review"></review-card>
        </div>
      </div>
    </section>
  </main>
  <my-footer></my-footer>
</template>
<script setup lang="ts">
import MyHeader from "@/components/header/MyHeader.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
import ReviewCard from "@/components/review-card/ReviewCard.vue";
import {onMounted, ref} from "vue";
import {ReviewService} from "@/services/review/ReviewService";
import type {ReviewResponse} from "@/services/review/response/ReviewResponse";

const reviews = ref<ReviewResponse[]>()
const isLoading = ref(false)

onMounted(async () => {
  reviews.value = await ReviewService.get()
  isLoading.value = Boolean(reviews.value?.length)
  console.log(isLoading)
})

</script>