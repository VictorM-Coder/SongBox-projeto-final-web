<template>
  <nav class="d-flex justify-content-center mt-4">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click="previousPage" aria-label="Página anterior">
          <i class="bi bi-caret-left-fill"></i>
        </a>
      </li>
      <li class="page-item rounded-1" :class="{ active: page === currentPage }" v-for="page in totalPages" :key="page">
        <a class="page-link" href="#" @click="goToPage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" @click="nextPage" aria-label="Próxima página">
          <i class="bi bi-caret-right-fill"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  }
})

const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const emits = defineEmits([
    'changePage'
])

function previousPage () {
  if (currentPage.value > 1) {
    currentPage.value--;
    emitChangePage()
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emitChangePage()
  }
}

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    emitChangePage()
  }
};

function emitChangePage(){
  emits('changePage', currentPage.value)
}
</script>

<style scoped>
.bi {
  vertical-align: 0;
}

.page-link {
  background-color: transparent;
  border: none;
  color: white;
  padding: 8px 16px;
}

.active {
  background-color: var(--p6-primary-color);
}

.page-link:focus{
  outline: none;
  box-shadow: none;
}

.disabled {
  opacity: 0.5;
}


</style>
