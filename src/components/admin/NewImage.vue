<script setup>
import { ref } from 'vue';
import { getStorage } from 'firebase/firestore'
import { dbImagesRef } from '@/firebase'
import { useStoreAuth } from '../../stores/storeAuth';
import { storeToRefs } from 'pinia';

const storeAuth = useStoreAuth()
const { userData } = storeToRefs(storeAuth)
const storage = getStorage()



const message = ref('')
const newImage = ref([])

/*
  Upload New Image
*/
  async function upload(e) {
    try {
      if(!userData.value) return
      let file = e.target.files[0]
      const storageRef = db.storage().ref('images/'+ file.name)
      await storageRef.put(file)
      message.value = `Image ${newImage.value.name} has been uploaded`
    } 
    catch (error) {
      message.value = "There was an error uploading the image..."
    }

  }



</script>

<template>
  <section class="admin_section">
      <div class="file is-small">
        <label class="file-label">
          <input @change="upload" v-on="newImage" class="file-input" type="file" name="resume">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              upload an image
            </span>
          </span>
        </label>
      </div>
      <!-- <form
      >

        <div class="form_group">
          <button
            @click.prevent="add"
          >
            Add
          </button>
          <span>{{ message }}</span>
        </div>
      </form> -->
  </section>
</template>



<style lang="scss" scoped>

.admin_section {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  max-width: 650px;
}

.file {
  font-size: .6em;
}

</style>