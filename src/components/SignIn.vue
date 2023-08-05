<script setup>
import { useStoreAuth } from '@/stores/storeAuth.js'
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, ref } from 'vue';

import googleBtn from "@/assets/images/google-btn.png"

const storeAuth = useStoreAuth()
const { errorMessage, showSignInModal, userData } = storeToRefs(storeAuth)
const { signUp, signInWithGoogle, logIn, logOut, toggleModal } = storeAuth

const formData = ref({
  email: '',
  password: '',
})

/*
	Keyboard Control (press enter to sign in)
  or place @keydown.enter="login(formData.email, formData.password) in the input tags"
*/

function handleKeyboard(e) {

if (e.key === 'Enter') logIn(formData.value.email, formData.value.password)
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
  })

onUnmounted(() => {
document.removeEventListener('keyup', handleKeyboard)
})
</script>


<template>
  <button
    v-if="!userData"
    @click="toggleModal"
    class="sign_in_btn"
  >
    Sign in
  </button>
  <button
    v-else
    @click="logOut"
    class="sign_in_btn"
  >
    Sign out
  </button>
  <div
    v-if="showSignInModal"
    class="modal"
  >
    <div class="modal_content">
      <span
      @click="toggleModal"
        class="close_modal"
      >
        &#10060;
      </span>
      <p class="modal_text">Please login to continue</p>
      <span class="error_message">{{ errorMessage }}</span>
      <form>
        <div class="form_group">
          <label for="email">Email</label>
          <input
            v-model="formData.email"
            id="email"
            placeholder="enter email"
            type="email"
          >
        </div>
        <div class="form_group">
          <label for="password">Password</label>
          <input
            v-model="formData.password"
            id="password"
            placeholder="enter password"
            type="password"
          >
        </div>
        <div class="sign-in-up-buttons-container">
          <button
          @click.prevent="logIn(formData.email, formData.password)"
          type="button"
          class="sign-in"
        >
          Sign in
        </button>
        <button
          @click.prevent="signUp(formData.email, formData.password)"
          type="button"
        >
          Sign up
        </button>
        </div>

        <div>
          <button
            @click.prevent="signInWithGoogle"
            class="sign-in-google"
          >
            <img :src="googleBtn" alt="">
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
}

.modal_content {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 5px;
  text-shadow: none;
  width: 80vw;
  padding: 1rem;
  color: rgb(76, 76, 76);

  .sign-in-google {
    margin-top: 10px;
    width: 100%;
    border: none;

    img {
      height: 50px;
      padding: 0;
      margin: 0;
      border-radius: 13px
    };

  }
  .sign-in-up-buttons-container {
    margin-top: 10px;
  }
  .sign-in {
    margin-right: 1rem;
    background-color: rgb(163, 204, 163);
  }

  button:hover {
      transform: scale(1.05);
    }
}

.close_modal {
  align-self: flex-end;
  padding: .5rem;

  &:hover {
    cursor: pointer;
  }
}

.modal_text {
  align-self: center;
}

.error_message {
  color: rgb(255, 104, 104);
  margin-left: 1rem;
}

.sign_in_btn {
    align-self: flex-end;
    color: white;
    border: none;
    font-size: .7em;

    &:hover {
      color: rgb(164, 132, 132);
    }
  }



button {
  background: none;
  border: 0.5px solid rgb(202, 202, 202);
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

// form {
//   padding: 0 1rem;
//   border-radius: 0.3rem;
// }

.form_group {
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid rgb(202, 202, 202);
}

.form_group:last-of-type {
  border-bottom: none;
}

label {
  flex: 1;
  padding-right: 5px;
  padding-left: 0;
  text-align: left;
}

input, textarea {
  flex: 2;
  border: 0.5px solid rgb(202, 202, 202);
  border-radius: 0.3rem;
  padding: 0.6rem;
  font-family: inherit;
  color: inherit;
}
@media (min-width: 900px) {
  .modal_content {
    width: 50vw;
  }
}


</style>