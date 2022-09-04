// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDCI4-4JgDAQzMY0QyKUbED8yrdfC2eQIQ",
      authDomain: "paradise-island-2-bb0f3.firebaseapp.com",
      databaseURL: "https://paradise-island-2-bb0f3-default-rtdb.firebaseio.com",
      projectId: "paradise-island-2-bb0f3",
      storageBucket: "paradise-island-2-bb0f3.appspot.com",
      messagingSenderId: "130906629536",
      appId: "1:130906629536:web:ca8c9b6aad99004d0c30c5"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome: "+user_name;
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
            
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_room.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("room_name: "+Room_names);
row="<div class='room_name'id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
//End code
     });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";
}



