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
        <form id="form-login" novalidate ref="formLogin">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">LOGIN:</label>
            <input required v-model="nameValue" type="text" class="form-control" id="recipient-name">
            <div class="invalid-feedback">
              Nome inválido.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="col-form-label">SENHA:</label>
            <input required v-model="passwordValue" type="password" class="form-control" id="password">
            <div class="invalid-feedback">
              Senha inválida.
            </div>
          </div>
        </form>
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
          <button form="form-login" type="submit" @click="login" class="btn-crud">entrar</button>
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
const errorField = ref<HTMLDivElement>()
const formLogin = ref<HTMLFormElement>()

function showPassword(){
  const password = document.querySelector('#password')
  let type = '';
  if (password) {
    type = password
        .getAttribute('type') === 'password' ?
        'text' : 'password';
  }

  password?.setAttribute('type', type);
}
async function login(event: Event) {
  event.preventDefault()
  event.stopPropagation()

  if (formLogin.value?.checkValidity()) {
    const user = await AuthService.signIn({identifier: nameValue.value, password: passwordValue.value})
  }else {
    formLogin.value?.classList.add('was-validated')
  }
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