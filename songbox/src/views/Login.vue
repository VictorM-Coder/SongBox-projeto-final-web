<template>
  <main class="container-fluid g-0">
    <div class="row g-0">
      <div class="d-none d-md-block col-md-6 col-xl-8">
        <img src="src/assets/login-img.jpg" class="img-fluid">
      </div>
      <div class="col-12  col-md-6 col-xl-4">
        <login-form></login-form>
      </div>
    </div>
  </main>
</template>

<script>
import {AuthService} from "@/services/auth/AuthService";
import {onMounted} from "vue";
import data from "bootstrap/js/src/dom/data";
import LoginForm from "@/components/forms/LoginForm.vue";
export default {
  components: {LoginForm},
  mounted() {
    AuthService.signIn({identifier:'adm', password:'123456'}).then(data => {
      // console.log(data.jwt)
    })
  }
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