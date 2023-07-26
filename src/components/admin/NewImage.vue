<script setup>
import { ref, watch } from 'vue';
import { getStorage, uploadBytes, uploadBytesResumable, ref as storageReference, getDownloadURL } from 'firebase/storage'
import { useStoreAuth } from '../../stores/storeAuth';
import { storeToRefs } from 'pinia';

const storeAuth = useStoreAuth()
const { userData } = storeToRefs(storeAuth)

const message = ref('')
const signInMessage =ref('')

watch(userData, () => {
    signInMessage.value = ''
  })
/*
  Upload New Image
*/



function handleChange(e) {
    const storage = getStorage()
    const file = e.target.files[0]
    const storageRef = storageReference(storage, 'images/'+ file.name)

    try {
      if(userData.value){
        uploadBytes(storageRef, e.target.files[0]).then((snapshot) => {
        message.value = 'Image Uploaded';
      });
      } else{
        signInMessage.value = 'Please sign in to upload an image.'
      }

    } catch (error) {
      message.value = 'Image Upload Failed'
    }

  }





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
    <span v-if="signInMessage" class="sign-in-message">{{ signInMessage }}</span>
  </div>

</template>



<style lang="scss" scoped>

.file {
  font-size: .6em;
  margin-bottom: 2rem;
}

.message {
  margin-left: 1rem;
  font-size: 1.1em;
  color: rgb(104, 205, 104);
}

.sign-in-message {
  color: red;
}

</style>