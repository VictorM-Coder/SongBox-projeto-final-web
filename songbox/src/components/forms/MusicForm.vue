<template>
  <h1 class="mb-4">{{ isUpdate?  'Atualizar música' :'Adicionar música' }}</h1>
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
            <select :value="(musicSelected.artist)? musicSelected.artist.id: 1"
                    @change="changeArtist"
                    class="form-select" id="artistInput" required
            >
              <option selected disabled>Selecione...</option>
              <option v-for="artist in artists" :value="artist.id" :key="artist.id">{{artist.name}}</option>

            </select>
            <div class="invalid-feedback">
              Selecione um artista válido.
            </div>
          </div>
          <div class="col-md-4 mt-2">
            <label for="releaseInput" class="form-label">Lançamento</label>
            <div class="input-group has-validation">
              <input v-model="musicSelected.releaseYear" type="number" min="1900" max="2023" class="form-control" id="releaseInput" required>
              <div class="invalid-feedback">
                Campo obrigatório.
              </div>
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-2 mt-2">
            <label for="minuteInput" class="form-label">Minutos</label>
            <input v-model="musicSelected.minutesDuration" type="number" min="0" max="60" class="form-control" id="minuteInput" required>
            <div class="invalid-feedback">
              Campo obrigatório.
            </div>
          </div>
          <div class="col-6 col-md-3 col-lg-2 mt-2">
            <label for="secondsInput" class="form-label">Segundos</label>
            <input v-model="musicSelected.secondsDuration" type="number" min="0" max="59" class="form-control" id="secondsInput" required>
            <div class="invalid-feedback">
              Campo obrigatório.
            </div>
          </div>
          <div class="col-12 mt-2">
            <label for="lyricsInput" class="form-label">Letra</label>
            <div class="input-group has-validation">
              <textarea :rows="rowsCount" v-model="musicSelected.lyrics" class="form-control" id="lyricsInput" required/>
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
              <span class="img-upload">
                <img ref="imgComponent" :src="imageUrl" v-if="imageUrl" class="img-fluid" alt="Uploaded Image" />
              </span>
            </span>
          <span v-else>
              <span class="upload-icon">
                <i class="bi bi-upload"></i>
              </span>
            </span>
        </label>
        <input class="d-none" id="img-input" type="file" @change="handleImageUpload" accept="image/*" />

      </div>
    </div>
    <div class="col-12 mt-4">
      <button @click="submitMusic" class="btn btn-crud" type="submit">{{ isUpdate?  'Atualizar música' : 'Adicionar música' }}</button>
      <button v-if="isUpdate" type="reset" @click="resetForm" class="btn-crud-secondary ms-4">Reiniciar forms</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue';
import {Music} from "@/model/Music";
import {Artist} from "@/model/Artist";
import {ArtistService} from "@/services/artist/ArtistService";
import {useUploadFile} from "@/utils/useUploadURL";
import {useNotificationStore} from "@/stores/useNotification";

const imageUrl = ref<string | null>(null);
const cover = ref<File>()
const musicSelected = ref<Music>({} as Music)
const musicForm = ref<HTMLFormElement>()
const artists = ref<Artist[]>()
const imgComponent = ref<HTMLInputElement>()
let isUpdate: boolean = false

const rowsCount = computed(() => {
  if (musicSelected.value.lyrics){
    const lines = musicSelected.value.lyrics.split('\n').length
    if (lines <= 2) return 2
    if (lines >= 20) return 20
    return lines
  }
  return 2
})

const setMusicSelected = async (music: Music) => {
  isUpdate = true
  musicSelected.value = music
  imageUrl.value = useUploadFile(music.cover.url)
  const file = await convertURLtoFile(imageUrl.value, music.cover.url)
  if (file) {
    cover.value = file
  }
}

defineExpose({
  setMusicSelected,
})

onMounted(async () => {
  artists.value = await ArtistService.get()
  musicSelected.value.artist = artists.value[0]
})

const emits = defineEmits(['addMusic', 'updateMusic'])

async function submitMusic(event: SubmitEvent) {
  event.preventDefault()
  event.stopPropagation()
  if (musicForm.value?.checkValidity()) {
    if (cover.value){
      if (isUpdate){
        emits('updateMusic', musicSelected.value, cover.value)
      }else {
        emits('addMusic', musicSelected.value, cover.value)
      }
    } else {
      useNotificationStore().error('ERRO: É necessário adicionar uma imagem!')
    }
  } else {
    musicForm.value?.classList.add('was-validated')
  }
}

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  changeImage(target.files?.[0])
};

function changeImage(file: File | undefined){
  cover.value = file;

  if (cover.value) {
    const reader = new FileReader();

    reader.onload = () => {
      imageUrl.value = reader.result as string;
    };

    reader.readAsDataURL(cover.value);
  }
}

function changeArtist(event: Event){
  const target = event.target as HTMLSelectElement;
  const selectedValue = target.value;
  musicSelected.value.artist = artists.value?.find(artist => artist.id == Number(selectedValue)) as Artist
}

async function convertURLtoFile(url: string, fileName: string): Promise<File | null> {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: response.headers.get('content-type') || 'application/octet-stream' });

    return new File([blob], fileName);
  } catch (error) {
    console.error('Erro ao converter a URL para File:', error);
    return null;
  }
}

function resetForm(){
  isUpdate = false
  musicSelected.value = {} as Music
  imageUrl.value = null
  cover.value = undefined
  if (artists.value) musicSelected.value.artist = artists.value[0]
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

.upload-icon {
  font-size: 6em;
  border: solid white 1px;
  padding: 12px 32px;
  border-radius: 8px;
}
</style>