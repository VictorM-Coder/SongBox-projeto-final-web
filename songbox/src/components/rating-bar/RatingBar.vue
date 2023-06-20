<template>
  <div class="d-flex justify-content-between">
    <i :class="`bi ${getStarType(rating)}`"></i>
    <i :class="`bi ${getStarType(rating-1)}`"></i>
    <i :class="`bi ${getStarType(rating-2)}`"></i>
    <i :class="`bi ${getStarType(rating-3)}`"></i>
    <i :class="`bi ${getStarType(rating-4)}`"></i>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
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