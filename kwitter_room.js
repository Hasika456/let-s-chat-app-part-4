const firebaseConfig = {
    apiKey: "AIzaSyDYfTK25g0hLHcmK2Tr-9EvII2XNYzHVf4",
    authDomain: "let-s-chat-app-ea7d7.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-ea7d7-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-ea7d7",
    storageBucket: "let-s-chat-app-ea7d7.appspot.com",
    messagingSenderId: "88784532343",
    appId: "1:88784532343:web:aebcbf3edf607b616e2772"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  document.getElementById("user_name").innerHTML="Welcome   " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name-" + room_name);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML=row;
   //End code
   });});}
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
    localStorage.setItem("room_name", room_name);
  
}

function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("Room Name", room_name);
  window.location= "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location("index.html");
}
