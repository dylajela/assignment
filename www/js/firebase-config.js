
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAac1M37udZZNf82xXeLksXgfiZkqDzaU8",
    authDomain: "calmthemind-279e0.firebaseapp.com",
    projectId: "calmthemind-279e0",
    storageBucket: "calmthemind-279e0.appspot.com",
    messagingSenderId: "902376162396",
    appId: "1:902376162396:web:679f30a267270a966e5299"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  import {getDataBase, ref, set, child, update, remove}
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

  const db = getDataBase();

  var namebox = document.getElementById("NameBox");
  var rollbox = document.getElementById("RollBox");
  var secbox = document.getElementById("SecBox");
  var genbox = document.getElementById("GenBox");

  var insBtn = document.getElementById("Insbtn");
  var selBtn = document.getElementById("Selbtn");
  var updBtn = document.getElementById("Updbtn");
  var delBtn = document.getElementById("Delbtn");

