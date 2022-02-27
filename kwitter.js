function adduser()
{
    user_name = document.getElementById("User_name").value;

    localStorage.setItem("User_name", User_name);

        window.location = "kwitter_room.html";
}
 var firebaseConfig = {
    apiKey: "AIzaSyA9mJlZ8AjHfUAI_eWzdq8ZFYeYwRuoT8s",
    authDomain: "class-project-5052d.firebaseapp.com",
    projectId: "class-project-5052d",
    storageBucket: "class-project-5052d.appspot.com",
    messagingSenderId: "213324553625",
    appId: "1:213324553625:web:cf21544dcff9b3a74e0708"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
