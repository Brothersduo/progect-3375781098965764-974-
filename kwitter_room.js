function logOut()
{
    
  localStorage.removeItem("User_name");
  localStorage.removeItem("room_name");
  window.location("index.html");
}


 
User_name = localStorage.getItem("User_name");
     room_name = localStorage.getItem("room_name");

     function addRoom()
     {
         room_name = document.getElementById("room_name").value;
         
         firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name :)"
         });
     
         localStorage.setItem("room_name", room_name);
     
         window.location = "Textroom.html";
     }