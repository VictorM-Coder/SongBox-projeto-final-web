<template>
  <div class="d-flex justify-content-between">
    <i :class="`bi ${getStarType(ratingOver)}`"></i>
    <i :class="`bi ${getStarType(ratingOver-1)}`"></i>
    <i :class="`bi ${getStarType(ratingOver-2)}`"></i>
    <i :class="`bi ${getStarType(ratingOver-3)}`"></i>
    <i :class="`bi ${getStarType(ratingOver-4)}`"></i>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const ratingOver  = ref<number>(0)
const props = defineProps<{
  rating: number
}>()

function getStarType(value: number){
  if (value == 0.5) return 'bi-star-half'
  if (value >= 1) return 'bi-star-fill'
  return 'bi-star'
}

</script>
<style scoped>
i {
  font-size: 32px;
}
</style>