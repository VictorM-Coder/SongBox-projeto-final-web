<template>
  <div v-if="props.music">
    <div class="bg-s1">
      <div class="container g-0">
        <div class="row padding-4em">
          <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
            <div class="img-card">
              <img class="img-fluid s-border-radius shadow-default"  :src="useUploadFile(props.music.cover.url)" alt="capa do álbum">
            </div>
          </div>
          <div class="col-12 col-md-6 px-4 px-md-0 d-flex align-items-end mt-4 mt-md-0">
            <div>
              <p>Rating</p>
              <RatingBar></RatingBar>
              <h1>{{ props.music.title }}</h1>
              <span class="music-data d-flex align-items-center">
              <span>{{ props.music.artist.name }}</span>
              <i class="bi bi-circle-fill divider"></i>
              <span> {{ props.music.releaseYear }}</span>
              <i class="bi bi-circle-fill divider"></i>
              <span> {{ `${props.music.minutesDuration}:${props.music.secondsDuration}` }} </span>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-s0 padding-to-footer">
      <div class="container g-0">
        <div class="action-bar">
          <button class="btn-crud me-4" @click="showMusicModal"><i class="bi bi-plus-lg"></i> Review</button>
          <button class="btn-crud"><i class="bi bi-plus-lg"></i> Playlist</button>
        </div>
        <h2>Letra</h2>
        <p class="lyrics-text">
          {{ props.music.lyrics }}
        </p>
      </div>
    </div>

    <div ref="reviewModal" class="modal fade modal-lg" id="musicModal" tabindex="-1" aria-labelledby="musicModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-s0">
          <div class="modal-header border-0">
            <div class="container g-0">
              <div class="row">
                <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-center">
                  <div class="img-card">
                    <img class="img-fluid s-border-radius shadow-default"  :src="useUploadFile(props.music.cover.url)" alt="capa do álbum">
                  </div>
                </div>
                <div class="col-12 col-md-6 d-flex align-items-end mt-4 mt-md-0">
                  <div>
                    <p class="music-data text-uppercase mb-2">I LISTENED</p>
                    <h2 class="mb-1">{{ props.music.title }}</h2>
                    <span class="music-data d-flex align-items-center">
                    <span>{{ props.music.artist.name }}</span>
                    <i class="bi bi-circle-fill divider"></i>
                    <span> {{ props.music.releaseYear }}</span>
                    <i class="bi bi-circle-fill divider"></i>
                    <span> {{ `${props.music.minutesDuration}:${props.music.secondsDuration}` }}</span>
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body border-0">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="recipient-name">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Review:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
              <div class="mb-3">
                <label for="tags-input" class="col-form-label">Tags:</label>
                <vue3-tags-input
                    id="tags-input"
                    :tags="tags"
                    placeholder="add tags"
                    @on-tags-changed="handleChangeTag"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer border-0">
            <button type="button" class="btn-crud-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn-crud">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Modal} from "bootstrap";
import {Music} from "@/model/Music";
import {useUploadFile} from "@/utils/useUploadURL";
import {ref} from "vue";
// @ts-ignore
import Vue3TagsInput from 'vue3-tags-input';
import RatingBar from "@/components/rating-bar/RatingBar.vue";

const tag = ''
const tags = ref<string[]>([]);
const reviewModal = ref<Modal>()

const props = defineProps({
  music: Music
})

function showMusicModal(){
  const modalInstance = new Modal(document.getElementById("musicModal") as Element);
  modalInstance.show();
}

function handleChangeTag(newTags:string[]) {
  tags.value = newTags
}

</script>

<style scoped>

h1 {
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.music-data {
  font-size: 1rem;
  color: var(--p0-primary-color);
}

@media (min-width: 576px) {
  h1 {
    font-size: 2em;
  }

}
@media (min-width: 768px) {
  h1 {
    font-size: 3.5em;
  }
}

@media (min-width: 992px) {
  h1 {
    font-size: 3.5em;
  }
}

h2 {
  margin-bottom: 1em;
}

.lyrics-text {
  white-space: pre-line;
  font-size: 1em;
  color: var(--p0-primary-color);
}

.img-card {
  max-width: 16em;
  border-radius: 8px;
}

.action-bar {
  padding: 4em 0;
}

.padding-4em{
  padding-bottom: 4em;
}

.divider {
  font-size: 0.4em;
  margin: 0 12px;
}
</style>