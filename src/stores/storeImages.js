import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { getStorage, ref as storageRef, getDownloadURL, listAll } from "firebase/storage";


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
        allImages.value = urls;
      } catch (error) {
        message.value = 'Error fetching images';
      }
    };

    onMounted(getImages)
   

  return { 
    allImages, 
    message }
})
