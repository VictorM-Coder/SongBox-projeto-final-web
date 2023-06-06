<template>
  <div class="p-4 h-100">
    <div class="d-flex justify-content-end">
      <i class="logo">
        <img src="@/assets/logo-songbox.svg">
      </i>
    </div>
    <div class="login-group">
      <h2>Bem vindo de volta</h2>
      <form>
        <div class="mb-3">
          <label for="recipient-name" class="col-form-label">LOGIN:</label>
          <input v-model="nameValue" type="text" class="form-control" id="recipient-name">
        </div>
        <div class="mb-3">
          <label for="password" class="col-form-label">SENHA:</label>
          <input v-model="passwordValue" type="password" class="form-control" id="password">
        </div>
        <div class="mb-4 d-flex justify-content-between">
          <div class="form-check">
            <input @click="showPassword" class="form-check-input" type="checkbox" value="" id="checkShowPassword">
            <label class="form-check-label" for="checkShowPassword">
              Mostrar senha
            </label>
          </div>
          <a href="">Esqueci minha senha</a>
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn-crud-secondary">Criar conta</button>
          <button type="submit" @click="login" class="btn-crud">entrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {AuthService} from "@/services/auth/AuthService";
import {ref} from "vue";

const nameValue = ref('')
const passwordValue = ref('')

function showPassword(){
  const password = document.querySelector('#password');
  let type = '';
  if (password) {
    type = password
        .getAttribute('type') === 'password' ?
        'text' : 'password';
  }

  password?.setAttribute('type', type);
}
async function login(event: Event) {
  event.preventDefault();
  const user = await AuthService.signIn({identifier: nameValue.value, password: passwordValue.value})
}
</script>

<style scoped>
.login-group {
  margin-top: 40%;
}

.btn-crud-secondary, .btn-crud {
  width: 190px;
}
</style>