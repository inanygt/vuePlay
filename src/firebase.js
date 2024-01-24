// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
  apiKey: "AIzaSyBN-b5VzVTjaiK6rngeHMEeHw3OW1o580o",
  authDomain: "quickey-e42dc.firebaseapp.com",
  projectId: "quickey-e42dc",
  storageBucket: "quickey-e42dc.appspot.com",
  messagingSenderId: "266094963165",
  appId: "1:266094963165:web:9c65e61734b0d0e9012e34",
  measurementId: "G-VG586FP4PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const usersCollection = db.collection('users')

// Create user
export const createUser = user => {
   return usersCollection.add(user)
}

// Get user 
export const getUser = async id => {
   const user = await usersCollection.doc(id).get()
   return user.exists ? user.data() : null
}

// Update user
export const updateUser = (id, user) => {
   return usersCollection.doc(id).update(user)
}

// Delete user
export const deleteUser = id => {
   return usersCollection.doc(id).delete()
}

// composition hook
export const useLoadUsers = () => {
   const users = ref([])
   const close = usersCollection.onSnapshot((snapshot) => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
   })
   onUnmounted(close)
   return users
}