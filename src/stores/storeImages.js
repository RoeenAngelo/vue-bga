import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { deleteDoc, doc, getDocs, onSnapshot } from 'firebase/firestore'
import { dbImagesRef } from '../firebase'
import { async } from '@firebase/util'

export const useStoreImages = defineStore('storePhotos', () => {

  const allImages = ref([]);
  const message = ref("");

  /*
    Fetch Images
  */
    async function getImages() {
      try {
        message.value = "";
        onSnapshot(dbImagesRef,(docs) => {
          allImages.value = []
          docs.forEach((doc) => {
              const image = {
                id: doc.id,
                ...doc.data(),
              };
              allImages.value.push(image);
            });
  
        })
      } catch (error) {
        message.value =
          "There was an error fetching images, please reload the page";
      }
    }
    onMounted(getImages);
  /*
    Delete Pizza
  */
    async function deleteImage(id) {
      try {
        message.value = "";
        const image = doc(dbImagesRef, id);
        await deleteDoc(image);
      } catch (error) {
        message.value = "There was an error deleting the image, please try again";
      }
    }

  return { 
    allImages, 
    deleteImage, 
    message }
})
