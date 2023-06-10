<template>
  <div class="container">
    <form class="row g-3 needs-validation" novalidate>
      <div class="col-12 col-md-8">
        <div class="container g-0">
          <div class="row">
            <div class="col-md-4 mt-2">
              <label for="titleInput" class="form-label">Título</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="titleInput" required>
                <div class="invalid-feedback">
                  Campo obrigatório.
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-2">
              <label for="artistInput" class="form-label">Artista</label>
              <select class="form-select" id="artistInput" required>
                <option selected disabled value="">Selecione...</option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">
                Selecione um artista válido.
              </div>
            </div>
            <div class="col-md-4 mt-2">
              <label for="releaseInput" class="form-label">Lançamento</label>
              <div class="input-group has-validation">
                <input type="date" class="form-control" id="releaseInput" required>
                <div class="invalid-feedback">
                  Campo obrigatório.
                </div>
              </div>
            </div>
            <div class="col-md-2 mt-2">
              <label for="minuteInput" class="form-label">Minutos</label>
              <input type="number" min="0" max="60" class="form-control" id="minuteInput" required>
              <div class="invalid-feedback">
                Campo obrigatório.
              </div>
            </div>
            <div class="col-md-2 mt-2">
              <label for="secondsInput" class="form-label">Segundos</label>
              <input type="number" min="0" max="59" class="form-control" id="secondsInput" required>
              <div class="invalid-feedback">
                Campo obrigatório.
              </div>
            </div>
            <div class="col-12 mt-2">
              <label for="lyricsInput" class="form-label">Letra</label>
              <div class="input-group has-validation">
                <textarea class="form-control" id="lyricsInput" required/>
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
        <button class="btn btn-crud" type="submit">Submit form</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const imageUrl = ref<string | null>(null);

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