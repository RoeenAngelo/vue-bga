<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import MobileNavbar from './components/MobileNavbar.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
    <div id="wrapper">
      <Header class="header"/>
      <!-- <MobileNavbar /> -->
      <Navbar />
      <RouterView />
      <Footer />
    </div>
   
</template>

<style>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
@import 'bulma/css/bulma.min.css';


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



</style>
