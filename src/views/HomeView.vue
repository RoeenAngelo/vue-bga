<script setup>
  import { ref } from 'vue';
  import Header from '../components/Header.vue';
  import Navbar from '../components/Navbar.vue';
  import MobileNavbar from '../components/MobileNavbar.vue';
  import { library } from '@fortawesome/fontawesome-svg-core'
import Leaderboard from '../components/Leaderboard.vue';

</script>

<script>
export default {
    data: () => {
        return {
            mobileView: true,
            showNav: false
        };
    },
    components: { Leaderboard }
}
</script>

<template>
  <main id="wrapper">
    <Header></Header>
    <MobileNavbar class="nav-header" />
    <!-- <Navbar /> -->
    <Leaderboard />
    
  </main>
</template>

<style lang="scss" scoped>

#wrapper {
  display: flex;
  flex-direction: column;
  width: 64em;
  max-width: calc(100% - 4em);
  margin: auto;
  // background-color: white;
  position: relative;
}

#nav-header {
  position: sticky;
  top: 0;
}


</style>