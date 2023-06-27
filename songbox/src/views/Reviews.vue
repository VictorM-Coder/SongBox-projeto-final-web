<template>
  <my-header></my-header>
  <main class="bg-s2 header-margin padding-to-footer">
    <section class="container g-0">
      <h1 class="mb-4">Suas Reviews</h1>
      <div v-if="isLoading" class="row">
        <router-link :to="`/review?id=${review.id}`" v-for="review in reviews" class="col-12 col-lg-6 mb-4 custom-link" :key="review.id">
          <review-card :review="review"></review-card>
        </router-link>
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
import type {SimpleReviewResponse} from "@/services/review/response/response";
import {useUserStore} from "@/stores/userStore";

const reviews = ref<SimpleReviewResponse[]>()
const isLoading = ref(false)

onMounted(async () => {
  reviews.value = await ReviewService.getByUser(useUserStore().user.id)
  isLoading.value = Boolean(reviews.value?.length)
})

</script>