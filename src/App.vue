<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
.nav {
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  padding: 1.5rem;
  background: #000000;
  color: white;
}

.nav a {
  margin-left: 1rem;
  text-decoration: none;
  color: white;
}
</style>
