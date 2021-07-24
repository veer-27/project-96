var firebaseConfig = {
    apiKey: "AIzaSyCWbmi6LehFLrTq3owZW5YLihTY7DsBDY0",
    authDomain: "chating-18bef.firebaseapp.com",
    databaseURL: "https://chating-18bef-default-rtdb.firebaseio.com",
    projectId: "chating-18bef",
    storageBucket: "chating-18bef.appspot.com",
    messagingSenderId: "1060579045795",
    appId: "1:1060579045795:web:57cd7f41661af42aa72a16"
  };

function addUser() {
    User_name = document.getElementById("user_name").value;
localStorage.setItem("User name",User_name);
window.location="index2.html";
}