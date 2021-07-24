var firebaseConfig = {
    apiKey: "AIzaSyCWbmi6LehFLrTq3owZW5YLihTY7DsBDY0",
    authDomain: "chating-18bef.firebaseapp.com",
    databaseURL: "https://chating-18bef-default-rtdb.firebaseio.com",
    projectId: "chating-18bef",
    storageBucket: "chating-18bef.appspot.com",
    messagingSenderId: "1060579045795",
    appId: "1:1060579045795:web:57cd7f41661af42aa72a16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0 
          });
          document.getElementById("msg").value = "";
    }