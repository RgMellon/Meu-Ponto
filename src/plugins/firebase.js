import { initializeApp } from 'firebase';
import VueFire from 'vuefire';

var app = initializeApp({
    apiKey: "AIzaSyDWRr3rmhSwazoTrcFWTQly1IB0XEteTs0",
    authDomain: "ponto-b2ba2.firebaseapp.com",
    databaseURL: "https://ponto-b2ba2.firebaseio.com",
    projectId: "ponto-b2ba2",
    storageBucket: "ponto-b2ba2.appspot.com",
    messagingSenderId: "782809280201"
});

export default ({ Vue }) => {
  Vue.use(VueFire);
  Vue.prototype.$firebase = app.database();
}
