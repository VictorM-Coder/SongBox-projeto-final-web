<template>
  <div class="d-flex justify-content-between rating-bar">
    <i v-for="item in [0, 1, 2, 3, 4]" :key="item"  @mouseenter="handleMouseEnter($event, item)"
       @mouseleave="resetStars"
       @click="setRate"
       :class="`bi ${getStarType(ratingOver-item)}`"
    ></i>
  </div>

</template>

<script lang="ts" setup>
import {ref} from "vue";

const ratingOver  = ref<number>(0)
let rating = 0

const emit = defineEmits(['rated'])

const handleMouseEnter = (event: MouseEvent, min: number) => {
  const componentElement = event.target as HTMLElement;

  if (componentElement) {
    const componentRect = componentElement.getBoundingClientRect();
    const mousePositionX = event.clientX;

    if (mousePositionX > componentRect.left) {
      ratingOver.value = min + 1
    } else {
      ratingOver.value = min + 0.5
    }
  }
};

function setRate(){
  rating = ratingOver.value
  emit('rated')
}

function resetStars(){
  ratingOver.value = rating
}

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