<template>
  <div class="container">
    <h1 class="mb-4">Adicionar música</h1>
    <MusicForm @add-music="addMusic"></MusicForm>

    <div class="container mt-5">
      <h1>Músicas</h1>
      <table class="table">
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
          <td>{{ music.title }}</td>
          <td>{{ music.artist.name }}</td>
          <td>
            <div class="d-flex justify-content-around">
              <button @click="removeMusic(music.id)" class="btn btn-danger d-flex justify-content-center align-items-center">
                <i class="bi bi-x-circle"></i>
              </button>
              <button @click="updateMusic(music.id, music)" class="btn btn-primary d-flex justify-content-center align-items-center">
                <i class="bi bi-pencil-square"></i>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {Music} from "@/model/Music";
import {MusicService} from "@/services/music/MusicService";
import {useUploadFile} from "@/utils/useUploadURL";
import MusicForm from "@/components/forms/MusicForm.vue";

const musics = ref<Music[]>()
const musicSelected = ref<Music>({} as Music)

onMounted(async () => {
  musics.value = await MusicService.get();
})

async function removeMusic(id: number) {
  await MusicService.delete(id)
}

async function addMusic(music: Music, cover: File) {
  await MusicService.post(music, cover)
}
function updateMusic(music: Music, id: number) {

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

td img {
  max-width: 200px;
}
</style>