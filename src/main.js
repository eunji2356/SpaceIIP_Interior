import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAjpqPbyJjeuk-2nqZGrWdok4Ku01l42gQ",
  authDomain: "space-transfer-f3904.firebaseapp.com",
  databaseURL: "https://space-transfer-f3904.firebaseio.com",
  projectId: "space-transfer-f3904",
  storageBucket: "space-transfer-f3904.appspot.com",
  messagingSenderId: "586031903519",
  appId: "1:586031903519:web:a55c29bc96ff893e28f62a",
  measurementId: "G-YHEKWQWY4N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')