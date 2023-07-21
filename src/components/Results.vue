
<script setup>
import { ref } from 'vue';

import pnrWinners from "@/assets/images/pnr/pnr-winners.jpg"
import mastersWinner from "@/assets/images/BGA-masters/BGA-winner-justiin.JPEG"
import pejaWinners from "@/assets/images/peja/peja-winners.JPEG"

const tournaments = ref([
  { event: 'PnR', winner: 'Pat and Sam', img: pnrWinners},
  { event: 'Masters', winner: 'Justin', img: mastersWinner },
  { event: 'PEJA', winner: 'Lakers in 4', img: pejaWinners },
  { event: 'WSOG', winner: 'Chris', img: "@/assets/images/pnr/pnr-winners.jpg" },
])


</script>


<template>
  <section class="results-container">
    <h3>Results</h3>
    <div v-for="(tournament, index) in tournaments" key="index" class="results">
      <img :src="`${tournament.img}`"/>
      <h4>{{ tournament.event }} Winner/s :</h4>
      <h5>{{ tournament.winner }}</h5>
    </div>			
  </section>
</template>



<style lang="scss" scoped>

img {
  width: 80%;
  border-radius: 5px;
}

.results-container {
    
    width: 100%;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 8px 8px;
    padding-bottom: 100px;

    >h3 { 
        padding: 50px;
        text-align: center;
        font-size: 1.4em;

    }
}

.results {
  display: flex;
  flex-direction: column;;
  align-items: center;
  margin-bottom: 70px;

  h4, h5 {
    padding: 10px;
  }
}


/* Add your CSS styles for the results section here. */


</style>
