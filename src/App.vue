<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Assignment4</router-link>|
      <router-link to="/assignment6">Assignment6</router-link>
    </div>
    <router-view />
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

#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  font-weight: 200;
}
</style>
