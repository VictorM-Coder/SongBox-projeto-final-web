<template>
  <footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <i class="logo">
            <img src="@/assets/logo-songbox.svg">
          </i>
        </div>

        <nav class="col-4">
          <h5>LINKS ÚTEIS</h5>
          <ul>
            <li>
              <a href="#">Playlists</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Resenhas</a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  bottom: 0;
  background-color: var(--b-primary-color);
  padding: 4em 0;
}

ul {
  list-style: none;
  padding: 0;
}

</style>