import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { ref } from 'vue';
import { doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db, dbUsersRef } from '../firebase';
import { async, isAdmin } from '@firebase/util';



export const useStoreAuth = defineStore('storeAuth', () => {

  const auth = getAuth();
  const errorMessage = ref('')
  const showSignInModal = ref(false)
  const userData = ref(null)
  const userIsAdmin = ref(false)
  const toggleAdminMessage = ref('')
  const selectedUser = ref(null)


  /*
    Find user
  */
    async function findUser(userEmail) {
      try {
        toggleAdminMessage.value = ''
        if(!userIsAdmin)  return
        const queryData = query(dbUsersRef, where('email', '==', userEmail))
        const user = await getDocs(queryData)
        const userObject = {
          id: user.docs[0].id,
          email: user.docs[0].data().email,
          isAdmin: user.docs[0].data().isAdmin,
        }
        selectedUser.value = userObject
      } 
      catch (error) {
      selectedUser.value = null
      toggleAdminMessage.value = 'No user found with that email'
      }
    }

  /*
    Check if user is admin
  */
    async function checkAdminRole() {
      if(userData.value?.uid) {
        const docRef = doc(dbUsersRef, userData.value.uid)
        const user = await getDoc(docRef)
        if(user.exists() && user.data().isAdmin) {
          userIsAdmin.value = true
        }
        else {
          userIsAdmin.value = false
        }
      }
    }

  /*
    Toggle Admin function
  */
    async function toggleAdmin() {
      try {
        if(!userIsAdmin.value) return
        const docRef = doc(db, 'users', selectedUser.value.id)
        await updateDoc(docRef, {
          isAdmin: !selectedUser.value.isAdmin
        })
        findUser(selectedUser.value.email)
      } 
      catch (error) {
        console.log(error)
      }
    }

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
        // console.log(userData.value)
        checkAdminRole()
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
    findUser,
    selectedUser,
    toggleAdminMessage,
    toggleAdmin
  }
})
