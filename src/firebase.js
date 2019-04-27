import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZzMOv6gkF_H2bz_-tCQnVM-62dAat4aU",
  authDomain: "vue-sample-y.firebaseapp.com",
  databaseURL: "https://vue-sample-y.firebaseio.com",
  projectId: "vue-sample-y",
  storageBucket: "vue-sample-y.appspot.com",
  messagingSenderId: "488176549692"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
