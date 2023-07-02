<template>
  <my-header></my-header>
  <main class="bg-s2 header-margin padding-to-footer">
    <section class="container g-0">
      <h1 class="mb-4">Suas Reviews</h1>
      <div v-if="isLoading" class="row">
        <router-link :to="`/review?id=${review.id}`" v-for="review in reviews" class="col-12 col-lg-6 mb-4 custom-link" :key="review.id">
          <review-card :review="review"></review-card>
        </router-link>
        <pagination :items-per-page="8" :total-items="totItems" @change-page="changePage"></pagination>
      </div>
      <div v-else class="d-flex justify-content-center align-items-center p-4">
        Parece que você não adicionou nada ainda ):
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
import Pagination from "@/components/pagination/Pagination.vue";

const reviews = ref<SimpleReviewResponse[]>([])
const isLoading = ref(false)
const totItems = ref<Number>(0)

onMounted(async () => {
  await getReviews(1)
  isLoading.value = Boolean(reviews.value?.length)
})

async function changePage(page: number) {
  await getReviews(page)
}

async function getReviews(page: number) {
  const reviewResponse =  await ReviewService.getByUser(useUserStore().user.id, page)
  if (reviewResponse) {
    reviews.value = reviewResponse.items
    totItems.value = reviewResponse.pagination.total
  }
}

</script>