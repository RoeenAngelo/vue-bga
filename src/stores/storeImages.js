import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { deleteDoc, doc, getDocs, onSnapshot } from 'firebase/firestore'
import { getStorage, ref as storageRef, getDownloadURL, listAll } from "firebase/storage";
import { dbImagesRef } from '../firebase'
import { async } from '@firebase/util'


export const useStoreImages = defineStore('storePhotos', () => {
  const storage = getStorage();
  const allImages = ref([]);
  const message = ref("");

  /*
    Fetch Images
  */
   
   async function getImages() {
      try {
        const storageRefList = await listAll(storageRef(storage, 'images'));
        const urls = await Promise.all(
          storageRefList.items.map((itemRef) => getDownloadURL(itemRef))
        );
        console.log(urls)
        allImages.value = urls;
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    onMounted(getImages)
   

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
