<template>
  <div class="container">
    <MusicForm @updateMusic="putMusic" @add-music="addMusic" ref="musicForm"></MusicForm>

    <div class="container mt-5">
      <h1>Músicas</h1>
      <table class="table text-white">
        <thead>
        <tr>
          <th>Capa</th>
          <th>Nome</th>
          <th>Artista</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="music in musics" :key="music.id">
          <td>
            <img class="img-fluid" alt="capa do álbum" :src="useUploadFile(music.cover.url)">
          </td>
          <td class="text-truncate">{{ music.title }}</td>
          <td class="text-truncate">{{ music.artist.name }}</td>
          <td>
            <div class="d-flex justify-content-around">
              <button @click="removeMusic(music.id)" class="btn btn-danger d-flex justify-content-center align-items-center">
                <i class="bi bi-x-circle"></i>
              </button>
              <button @click="updateMusic(music)" class="btn btn-primary d-flex justify-content-center align-items-center">
                <i class="bi bi-pencil-square"></i>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

      <pagination :items-per-page="8" :total-items="totItems" @change-page="changePage"></pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {Music} from "@/model/Music";
import {MusicService} from "@/services/music/MusicService";
import {useUploadFile} from "@/utils/useUploadURL";
import MusicForm from "@/components/forms/MusicForm.vue";
import {useNotificationStore} from "@/stores/useNotification";
import Pagination from "@/components/pagination/Pagination.vue";

const musics = ref<Music[]>([])
const musicForm = ref<MusicForm>(null)

const totItems = ref<Number>(0)

async function changePage(page: number){
  await getMusics(page)
}

onMounted(async () => {
  await getMusics(1)
})

async function getMusics(page: number){
  const musicsResponse = await MusicService.get(page);
  if(musicsResponse){
    musics.value = musicsResponse.items
    totItems.value = musicsResponse.pagination.total
  }
}

async function removeMusic(id: number) {
  const value = await MusicService.delete(id)
  if (value && musics.value) {
    const index = musics.value.findIndex(music => music.id === id);
    if (index !== -1) {
      musics.value.splice(index, 1);
      useNotificationStore().add('Música removida com sucesso')
    }
  }
}

async function addMusic(music: Music, cover: File) {
  const value  = await MusicService.post(music, cover)
  if (value){
    musics.value?.push(value)
    useNotificationStore().add('Música adicionada com sucesso')
  }
}
function updateMusic(music: Music) {
  musicForm.value.setMusicSelected(music)
}

async function putMusic(music: Music, cover: File){
  const value = await MusicService.put(music, cover)
  if (value) {
    useNotificationStore().add('Música atualizada com sucesso')
  }
}
</script>

<style scoped>
.img-upload {
  width: auto;
  height: 200px;
}

.img-fluid {
  width: 100%;
  height: 100%;
}

td, td img {
  max-width: 200px;
}
</style>