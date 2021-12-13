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

  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   
   //End code
   });});}
getData();

  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
  }
