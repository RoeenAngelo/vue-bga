import { defineStore } from 'pinia'
import { getAuth, 
          createUserWithEmailAndPassword, 
          signInWithEmailAndPassword, 
          signOut, 
          onAuthStateChanged,
          GoogleAuthProvider,
          signInWithPopup } from "firebase/auth";
import { ref } from 'vue';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { async, isAdmin } from '@firebase/util';



export const useStoreAuth = defineStore('storeAuth', () => {

  const auth = getAuth();
  const errorMessage = ref('')
  const showSignInModal = ref(false)
  const userData = ref(null)
  const userIsAdmin = ref(false)



  /*
    Sign Up
  */
    async function signUp(email, password) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth, 
          email, 
          password
        )
        const userObject = {
          createdAt: new Date(),
          email: user.email,
          isAdmin: false
        }
        const newDoc = doc(db, "users", user.uid)
        await setDoc(newDoc, userObject)

        errorMessage.value = ''
        showSignInModal.value = false
      } 
      catch (error) {
        switch(error.code){
          case "auth/email-already-in-use": errorMessage.value = "Email already exists."
            break;
          case "auth/weak-password":  errorMessage.value = "Password should be at least 6 characters long.";
            break;
          default: errorMessage.value = "Sorry, there was an unexpected error."
        }
        
      }

    }

  /*
    Sign In
  */ 
    async function logIn(email, password) {
      if(!email) return errorMessage.value = 'Please enter a valid email'
      if(!password) return errorMessage.value = 'Please enter a valid password'
      try {
        await signInWithEmailAndPassword(auth, email, password)
        errorMessage.value = ''
        toggleModal()
      } 
      catch (error) {
        switch(error.code){
          case "auth/wrong-password": errorMessage.value = "Incorrect password"
            break;
          case "auth/user-not-found":  errorMessage.value = "Incorrect email";
            break;
          default: errorMessage.value = "Sorry, there was an unexpected error."
        }
        
      }

    }

  /*
    Sign In Google Auth and create user
  */

    async function signInWithGoogle() {
      const provider = new GoogleAuthProvider()
      try {
        const { user } = await signInWithPopup(getAuth(), provider)
        const userObject = {
          createdAt: new Date(),
          email: user.email,
          isAdmin: false
        }
        const newDoc = doc(db, "users", user.uid)
        await setDoc(newDoc, userObject)
        errorMessage.value=''
        toggleModal()
      } catch (error) {
        
      }
    }     
  

  /*
    Log Out
  */
    function logOut() {
      try {
        signOut(auth)
      } catch (error) {
        errorMessage.value = error.message
      }
    };

  /*
    Toggle Sign In Modal
  */
    function toggleModal() {
      showSignInModal.value = !showSignInModal.value
    }

  /*
    Auth Observer
  */
    onAuthStateChanged(auth, (user) => {
      if(user) {
        userData.value = user

      } 
      else {
        userData.value = null
        userIsAdmin.value = false
      }
    })

  return { 
    signUp,
    logIn,
    logOut,
    userData,
    errorMessage,
    showSignInModal,
    toggleModal,
    userIsAdmin,
    signInWithGoogle,
  }
})
