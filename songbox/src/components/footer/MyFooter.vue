<template>
  <footer class="container-fluid footer navbar-fixed-bottom">
    <div class="container g-0">
      <div class="row g-0">
        <div class="col-4">
          <i class="logo">
            <img src="@/assets/logo-songbox.svg" alt="logo songbox">
          </i>
        </div>

        <div class="col-8 col-md-4 order-md-last">
          <div class="d-flex justify-content-end">
            <a href="https://github.com/VictorM-Coder" target="_blank" class="m-12 d-flex">
              <i class="bi bi-github icon-song link-social"></i>
            </a>
            <a href="https://www.instagram.com/iam_victor.martins/" target="_blank" class="m-12 d-flex">
              <i class="bi bi-instagram icon-song link-social"></i>
            </a>
            <a href="https://www.linkedin.com/in/victor-martins-230864233/" target="_blank" class="m-12 d-flex">
              <i class="bi bi-linkedin icon-song link-social"></i>
            </a>
          </div>
        </div>

        <nav class="col-4 mt-4 mt-md-0">
          <h5>LINKS ÚTEIS</h5>
          <ul>
            <li>
              <router-link class=""  to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/reviews">Resenhas</router-link>
            </li>
          </ul>
        </nav>

      </div>
      <div class="row"><p>SongBox © Alguns direitos reservados</p></div>
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

h5 {
  margin-bottom: 1em;
}

li {
  margin-bottom: 0.8em;
}

a {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-decoration: none;
}

p {
  margin-top: 4em;
  margin-bottom: 0;
  font-family: 'Roboto', sans-serif;
}

.link-social {
  background-color: var(--b1-primary-color);
  padding: 12px;
  border-radius: 50%;
  line-height: 0;
}

.m-12{
  margin-left: 1em;
}

</style>