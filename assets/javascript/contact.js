// javascript for the contact page using firebase

var config = {
    apiKey: "AIzaSyDEbwvYvBS6Gf2ThzIz5qwjLw4WDRr1S0o",
    authDomain: "portfolio-6f838.firebaseapp.com",
    databaseURL: "https://portfolio-6f838.firebaseio.com",
    projectId: "portfolio-6f838",
    storageBucket: "portfolio-6f838.appspot.com",
    messagingSenderId: "734399691310"
  };
  firebase.initializeApp(config);


  var database= firebase.database();


  $("#contact-form").submit(function(event){
    event.preventDefault();
        var name= $("#name").val().trim();
        var email = $("#email").val().trim();
        var comments = $("#message").val().trim();
        var date=Date();



        var newPost= {    
            comments: comments,
            email: email,
            name: name,
            date:date
        };

        database.ref().push(newPost);
       
        alert("Thank you " + name + " for submitting! I promise to respond in a timely matter")
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");

  });

  database.ref().on("child_added", function(childSnapShot, prevChildKey){
      var name = childSnapShot.val().name;
      var email = childSnapShot.val().email;
      var comments = childSnapShot.val().comments;
      var date = childSnapShot.val().date;



    

      $(".display-messages").append("<tr><td><br>" + name + "<br>" + email + "<br>" + comments + "<br>" + date + "<br><br></tr></td>");
  });

