<script setup>
import NewImage from './admin/NewImage.vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useStoreImages } from '../stores/storeImages';

const storeImages = useStoreImages()
const { allImages, message } = storeToRefs(storeImages)
const { deleteImage } = storeImages



</script>
<template>
  <section class="section-container">
    <h3>Gallery</h3>
    <NewImage class="upload" />
    <!-- <div
      v-for="image in allImages"
      :key="image"
      class="images-container"
    > -->
      <!-- <div>
        <img :src="image" alt="Firebase Image" />
      </div> -->

    <!-- </div> -->
    <div v-for="image in allImages"
      :key="image"  class="img-gallery">
      <img :src="image" alt="Firebase Image" />
      <!-- <img src="src/assets/images/BGA-masters/BGA1.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA2.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA3.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA4.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA5.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA6.JPEG" alt=""> -->
    </div>
  </section>
</template>


<style lang="scss" scoped>

.img-gallery {
  width: 80%;
  margin: 100px auto 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;

  img {
    width: 50%;
  }
}



// .images-container {
//   display: flex;
//   max-width: 1200px;
//   width: 100%;
//   flex-wrap: wrap;
//   justify-content: center;
// }

// img {
//   width: 350px;
//   height: 350px;
//   padding: 5px;
//   object-fit: cover;
//   object-position: center;

//   &:hover {
//     cursor: pointer;
//     opacity: .5;
//     transition: .5s;
//     width: 400px;
//   }
// }

// .images-container {
//   display: flex;
//   max-width: 1200px;
//   width: 100%;
//   flex-wrap: wrap;
//   justify-content: center;
// }

// img {
//   width: 350px;
//   height: 250px;
//   padding: 5px;
//   object-fit: cover;
//   object-position: bottom;

//   &:hover {
//     cursor: pointer;
//     opacity: .5;
//     transition: .5s;
//     width: 400px;
//   }
// }

.upload {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

</style>