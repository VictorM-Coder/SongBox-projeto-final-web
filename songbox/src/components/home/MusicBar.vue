<template>
  <div class="container g-0">
    <div class="row mb-20">
      <div class="d-flex justify-content-between align-items-end">
        <h2>Em Alta</h2>
      </div>
    </div>
    <div class="container-fluid g-0 padding-to-footer">
      <div v-if="musicList" class="row">
        <div v-for="music in musicList" :key="music.id" class="col-6 col-md-4 col-lg-3 mb-4">
          <router-link :to="`/music?id=${music.id}`" class="custom-link">
            <music-card :music="music"></music-card>
          </router-link>
        </div>
      </div>
      <pagination :items-per-page="16" :total-items="totItems" @change-page="changePage"></pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import MusicCard from "@/components/music-card/MusicCard.vue";
import {Music} from "@/model/Music";
import Pagination from "@/components/pagination/Pagination.vue";


const musicList = computed(() => props.musics)

const props = defineProps({
  musics: {
    type: Array as () => Music[]
  },
  totItems: Number
})

const emits = defineEmits([
    'changePage'
])

function changePage(page: number) {
  emits("changePage", page)
}

</script>


<style scoped>

h2 {
  margin: 0;
}
</style>