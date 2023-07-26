<script setup>
import NewImage from './admin/NewImage.vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useStoreImages } from '../stores/storeImages';

const storeImages = useStoreImages()
const { allImages, message } = storeToRefs(storeImages)



</script>



<template>
  <section class="section-container">
    <h3>Gallery</h3>
    <NewImage class="upload" />
    <div
      class="images-container"
    >
    <img
      v-for="image in allImages"
      :key="image"
      :src="image"
      alt="Firebase Image"
    />
    </div>
  </section>
</template>


<style lang="scss" scoped>

.images-container {
  display: flex;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  width: 300px;
  height: 250px;
  padding: 5px;
  object-fit: cover;
  object-position: center;

  &:hover {
    cursor: pointer;
    // opacity: .5;
    transition: .5s;
    width: 400px;
    height: 350px;
  }
}

.upload {
  align-self: center;
  justify-content: center;
}

</style>