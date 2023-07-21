<script setup>


</script>
<template>
  <section class="results-container">
    <h3>Gallery</h3>
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

  h4, h5 {
    padding: 10px;
  }
}

</style>