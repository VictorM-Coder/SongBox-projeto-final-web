<template>
  <div class="position-fixed container-fluid z-index-always-top" :class="{'bg-black': isOnTop}">
    <header class="container">
      <div class="d-flex row justify-content-between align-content-center">
        <div class="col-3 d-flex align-items-center">
          <i class="logo">
            <img src="@/assets/logo-songbox.svg" alt="logo  songbox">
          </i>
        </div>

        <nav class="col-8 col-lg-6 d-flex justify-content-end justify-content-lg-center">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Playlists</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resenhas</a>
            </li>
          </ul>
        </nav>

        <div class="col-1 col-lg-3 d-flex justify-content-end align-items-center">
          <span>
            <i class="bi bi-person"></i>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

const isOnTop = ref(false)

function handleScroll() {
  isOnTop.value = window.scrollY > 100;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<style scoped>

header {
  padding: 16px 0;
}
.z-index-always-top{
  z-index: 1020;
}
.logo:hover{
  cursor: pointer;
}

.bg-black {
  background-color: var(--b-primary-color);
  transition: background-color 0.2s ease-out;
}
</style>
