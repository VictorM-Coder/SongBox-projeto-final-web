<template>
  <header class="container ">
    <div class="d-flex justify-content-between align-content-center">
      <div class="col-3 d-flex align-items-center">
        <i class="logo">
          <img src="@/assets/logo-songbox.svg">
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
        perfil
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyHeader',
}
</script>

<style scoped>

header {
  padding: 16px 0;
}

.nav-link{
  font-size: 1em;
  letter-spacing: 0.05em;
  text-align: center;
  color: var(--t1-primary-color);
  font-weight: 700;
}

.nav-link:hover{
  color: var(--p6-primary-color);
}

.logo:hover{
  cursor: pointer;
}
</style>
