
<script setup>

import pnrWinners from "@/assets/images/pnr/pnr-winners.jpg"
import mastersWinner from "@/assets/images/BGA-masters/BGA-winner-justiin.JPEG"
import pejaWinners from "@/assets/images/peja/peja-winners.JPEG"
import wsogWinner from "@/assets/images/wsog/IMG_5410.JPEG"
import llopenWinner from "@/assets/images/LL/LL-winners.jpg"

const tournaments = [
  { event: 'PnR', winner: 'Pat and Sam', img: pnrWinners},
  { event: 'Masters', winner: 'Justin', img: mastersWinner },
  { event: 'PEJA', winner: 'Lakers in 4', img: pejaWinners },
  { event: 'WSOG', winner: 'Chris', img: wsogWinner },
  { event: 'LL Open', winner: 'Team Pi', img: llopenWinner },
]


</script>


<template>
  <section class="section-container">
    <h3>Results</h3>
    <div v-for="(tournament, index) in tournaments" key="index" class="results">
      <img :src="tournament.img"/>
      <p class="event">~ {{ tournament.event }} Champion/s ~</p>
      <p class="winner">{{ tournament.winner }}</p>
    </div>			
  </section>
</template>


<style lang="scss" scoped>

img {
  width: 80%;
  border-radius: 5px;
  box-shadow: 0px 2px 7px 2px rgba(0,0,0,0.75);
}

.event {
  padding: 10px;
  font-weight: 500;
  font-size: 1em;
}

.winner {
  font-size: .8em;
}
.results {
  display: flex;
  flex-direction: column;;
  align-items: center;
  margin-bottom: 70px;
}



</style>
