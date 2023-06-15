<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import MobileNavbar from './components/MobileNavbar.vue';
</script>

<template>
    <div id="wrapper">
      <Header />
      <MobileNavbar />
      <RouterView />
    </div>
   
</template>

<style scoped>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

#wrapper {
  display: flex;
  flex-direction: column;
  width: 64em;
  max-width: calc(100% - 4em);
  margin: auto;
}

#nav-header {
  position: sticky;
  top: 0;
}





</style>
