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
    document.getElementById("user_name").innerHTML = "Hello " + user_name + "!";

function addroom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding chat room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "indexchat.html";
}
function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row ;

  //End code
  });});}
getData();

function redirectToRoomName(name) 
{
  console.log(name);
  localStorage.setItem("room_name",name)
  window.location = "indexchat.html";
}


function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
