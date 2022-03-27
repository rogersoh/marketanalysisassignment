<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Assignment 4</router-link> |
      <router-link to="/Assignment5"> Assignment 5</router-link> |
      <router-link to="/Assignment6"> Assignment 6</router-link> |
      <router-link to="/Project"> Project</router-link> |
      <router-link to="/Capstone"> Project Capstone</router-link> |
      <router-link to="/Covid"> Covid-19</router-link> |
      <router-link to="/ConsumerItemPrice"> Consumer Item Price</router-link>
    </div>
    <router-view />
    <div class="row justify-content-center">
      <div class="col-lg-6 mt-3">
        <p>Content done by Roger Soh<br /></p>
        <a href="mailto:data_analytics@lmogg.com?"> Send Feedback </a>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Gugi&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

$primary: rgb(15, 148, 231);
@import "node_modules/bootstrap/scss/bootstrap";

:root {
  /* Override Variables */
  --gray-dark: #404040;

  /* Page Variables */
  --color-text: var(--gray-dark);
  --font-family-gugi: Gugi, serif;
}

.family-gugi {
  font-family: var(--font-family-gugi);
}

.brand-color {
  background-color: #e70;
}

.text-brand-color {
  color: #e70;
}

.btn-brand {
  color: white;
  background: #e70;
}

/* pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
}
 */
#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  font-weight: 200;
}
</style>
