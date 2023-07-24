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
   
    onMounted(async () => {
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
    });
   
   
    // async function getImages() {
    //   try {
    //     message.value = "";
    //     allImages.value = []
    //     getDownloadURL(ref(storage, 'images/stars.jpg'))
    //     .then((url) => {
    //       // `url` is the download URL for 'images/stars.jpg'
      
    //       // This can be downloaded directly:
    //       const xhr = new XMLHttpRequest();
    //       xhr.responseType = 'blob';
    //       xhr.onload = (event) => {
    //         const blob = xhr.response;
    //       };
    //       xhr.open('GET', url);
    //       xhr.send();
      
    //       // Or inserted into an <img> element
    //       const img = document.getElementById('myimg');
    //       img.setAttribute('src', url);
    //     })
    //   } catch (error) {
    //     message.value =
    //       "There was an error fetching images, please reload the page";
    //   }
    // }
    // onMounted(getImages);



    // async function getImages() {
    //   try {
    //     message.value = "";
    //     onSnapshot(dbImagesRef,(docs) => {
    //       allImages.value = []
    //       docs.forEach((doc) => {
    //           const image = {
    //             id: doc.id,
    //             ...doc.data(),
    //           };
    //           allImages.value.push(image);
    //         });
  
    //     })
    //   } catch (error) {
    //     message.value =
    //       "There was an error fetching images, please reload the page";
    //   }
    // }
    // onMounted(getImages);
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
