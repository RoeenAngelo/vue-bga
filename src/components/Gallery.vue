<script setup>


</script>
<template>
  <section class="section-container">
    <h3>Gallery</h3>
    <div class="upload">
      <p>Upload a photo</p>
      <div class="file has-name">
      <label class="file-label">
        <input class="file-input" type="file" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose a file…
          </span>
        </span>
      </label>
    </div>
    </div>

    <div class="images-container">
      <img src="src/assets/images/BGA-masters/BGA1.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA2.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA3.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA4.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA5.JPEG" alt="">
      <img src="src/assets/images/BGA-masters/BGA6.JPEG" alt="">
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
  width: 350px;
  height: 250px;
  padding: 5px;
  object-fit: cover;
  object-position: bottom;

  &:hover {
    cursor: pointer;
    opacity: .5;
    transition: .5s;
    width: 400px;
  }
}

.upload {
  display: flex;
  justify-content: end;
  align-items: center;
}

</style>