<template>
  <form ref="musicForm" class="row g-3 needs-validation" novalidate>
    <div class="col-12 col-md-8">
      <div class="container g-0">
        <div class="row">
          <div class="col-md-4 mt-2">
            <label for="titleInput" class="form-label">Título</label>
            <div class="input-group has-validation">
              <input v-model="musicSelected.title" type="text" class="form-control" id="titleInput" required>
              <div class="invalid-feedback">
                Campo obrigatório.
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <label for="artistInput" class="form-label">Artista</label>
            <select v-model="musicSelected.artist" class="form-select" id="artistInput" required>
              <option selected disabled value="">Selecione...</option>
              <option v-for="artist in artists" :value="artist.id" :key="artist.id">{{artist.name}}</option>

            </select>
            <div class="invalid-feedback">
              Selecione um artista válido.
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <label for="releaseInput" class="form-label">Lançamento</label>
            <div class="input-group has-validation">
              <input v-model="musicSelected.release" type="date" class="form-control" id="releaseInput" required>
              <div class="invalid-feedback">
                Campo obrigatório.
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-2 mt-2">
            <label for="minuteInput" class="form-label">Minutos</label>
            <input v-model="musicSelected.minutes" type="number" min="0" max="60" class="form-control" id="minuteInput" required>
            <div class="invalid-feedback">
              Campo obrigatório.
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-2 mt-2">
            <label for="secondsInput" class="form-label">Segundos</label>
            <input v-model="musicSelected.seconds" type="number" min="0" max="59" class="form-control" id="secondsInput" required>
            <div class="invalid-feedback">
              Campo obrigatório.
            </div>
          </div>
          <div class="col-12 mt-2">
            <label for="lyricsInput" class="form-label">Letra</label>
            <div class="input-group has-validation">
              <textarea v-model="musicSelected.lyrics" class="form-control" id="lyricsInput" required/>
              <div class="invalid-feedback">
                Campo obrigatório.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center">
        <label for="img-input">
            <span v-if="imageUrl">
              <div class="img-upload">
                <img :src="imageUrl" v-if="imageUrl" class="img-fluid" alt="Uploaded Image" />
              </div>
            </span>
          <span v-else>
              <div class="upload-icon">
                <i class="bi bi-upload"></i>
              </div>
            </span>
        </label>
        <input class="d-none" id="img-input" type="file" @change="handleImageUpload" accept="image/*" />

      </div>
    </div>
    <div class="col-12 mt-4">
      <button @click="addMusic" class="btn btn-crud" type="submit">Submit form</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {Music} from "@/model/Music";
import {Artist} from "@/model/Artist";
import {ArtistService} from "@/services/artist/ArtistService";

const imageUrl = ref<string | null>(null);
const musicSelected = ref<Music>({} as Music)
const musicForm = ref<HTMLFormElement>()
const artists = ref<Artist[]>()

onMounted(async () => {
  artists.value = await ArtistService.get()
})

async function addMusic(event: SubmitEvent) {
  event.preventDefault()
  event.stopPropagation()
  if (musicForm.value?.checkValidity()) {
    //const user = await AuthService.signIn()
    console.log(musicSelected.value)
  } else {
    musicForm.value?.classList.add('was-validated')
  }
}

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      imageUrl.value = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
};
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

.upload-icon {
  font-size: 6em;
  border: solid white 1px;
  padding: 12px 32px;
  border-radius: 8px;
}
</style>