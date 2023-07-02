<template>
  <main class="container-fluid g-0">
    <div class="row g-0">
      <div class="d-none d-md-block col-md-6 col-xl-8">
        <img alt="logo songbox" src="src/assets/login-img.jpg" class="img-fluid">
      </div>
      <div class="col-12  col-md-6 col-xl-4">
        <login-form></login-form>
      </div>
    </div>
  </main>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm.vue";

export default {
  components: {LoginForm},
}
</script>

<style scoped>
main,
.container-fluid,
.row,
.col-6 {
  height: 100vh;
}

.img-fluid {
  height: 100%;
  object-fit: cover;
}
</style>