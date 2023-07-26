<script setup>
import { ref } from 'vue';
import { getStorage, uploadBytes, uploadBytesResumable, ref as storageReference, getDownloadURL } from 'firebase/storage'
import { useStoreAuth } from '../../stores/storeAuth';
import { storeToRefs } from 'pinia';

const storeAuth = useStoreAuth()
const { userData } = storeToRefs(storeAuth)

const message = ref('')
const newImage = ref([])

const uploadTask = ref(null)


/*
  Upload New Image
*/
function handleChange(e) {
    const storage = getStorage()
    const file = e.target.files[0]
    const storageRef = storageReference(storage, 'images/'+ file.name)

    try {
      uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
        message.value = 'Image Uploaded';
      });
    } catch (error) {
      message.value = 'Image Upload Failed'
    }

    // uploadTask.value = uploadBytesResumable(storageRef, e.target.files[0])
    // uploadTask.value.on('state_changed', (snapshot) => {
     
    //     }, 
    //     (error) => {
    //       message.value = 'Upload Failed'
    //     },
    //     () => {
    //       // Upload completed successfully, now we can get the download URL
    //       getDownloadURL(uploadTask.value.snapshot.ref).then((downloadURL) => {
    //         message.value = 'Image Uploaded';
    //       });
    //     }
        
    //     )
  
  }


  // function handleChange(e) {
  //   const storage = getStorage()
  //   const file = e.target.files[0]
  //   const storageRef = storageReference(storage, 'images/'+ file.name)
  //   uploadTask.value = uploadBytesResumable(storageRef, e.target.files[0])
  //   uploadTask.value.on('state_changed', (snapshot) => {
  //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //     progress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     message.value = 'Image Uploaded'
  //     switch (snapshot.state) {
  //       case 'paused':
  //         console.log('Upload is paused');
  //         break;
  //       case 'running':
  //         console.log('Upload is running');
  //         break;
  //         }
  //       }, 
  //       (error) => {
  //         message.value = 'Upload Failed'
  //       },
  //       () => {
  //         // Upload completed successfully, now we can get the download URL
  //         getDownloadURL(uploadTask.value.snapshot.ref).then((downloadURL) => {
  //           console.log('File available at', downloadURL);
  //         });
  //       }
        
  //       )
  
  //   paused.value = false

  // }

  // function pause() {
  //   if(paused.value == false) {
  //     uploadTask.value.pause
  //     paused.value = true
  //   }
  //   else {
  //     uploadTask.value.resume 
  //     paused.value = false
  //   }
    
  // }


</script>

<template>

  <div class="file is-small">
    <label class="file-label">
      <input @change="handleChange" class="file-input" type="file" name="resume">
      <span class="file-cta">
        <span class="file-icon">
          <i class="fas fa-upload"></i>
        </span>
        <span class="file-label">
          upload photo
        </span>
      </span>
    </label>
    <span class="message">{{ message }}</span>
  </div>

  <!-- <div>
  <input type="file" @change="handleChange">
  <button>
    <i v-if="paused" class="fa-solid fa-pause"></i>
    <i v-else class="fa-solid fa-play"></i>
  </button>
  </div> -->


</template>



<style lang="scss" scoped>

// .admin_section {
//   display: flex;
//   width: 100%;
//   justify-content: flex-end;
//   max-width: 650px;
// }

.file {
  font-size: .6em;
  margin-bottom: 2rem;
}

.message {
  margin-left: 1rem;
  font-size: 1.1em;
  color: rgb(104, 205, 104);
}

</style>