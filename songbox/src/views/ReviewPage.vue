<template>
  <my-header></my-header>
  <main class="bg-s1 header-margin">
    <review-display :review="review"/>
  </main>
  <my-footer></my-footer>
</template>
<script setup lang="ts">
import MyHeader from "@/components/header/MyHeader.vue";
import MyFooter from "@/components/footer/MyFooter.vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {ReviewService} from "@/services/review/ReviewService";
import ReviewDisplay from "@/components/review/ReviewDisplay.vue";
import type {CompleteReviewResponse} from "@/services/review/response/CompleteReviewResponse";

const review = ref<CompleteReviewResponse>()

onMounted(async () => {
  review.value = await ReviewService.getById(Number(useRoute().query.id))
})

</script>