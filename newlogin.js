// by Ali Mustafa
window.onload(alert("Hi Dr\nUsername : abedsafadi\nPassword : drabedisthebest"))

/* function for pass eye */

function toggle(y) {
  //id of pass input to check if it is written in pass type or not  
  var x = document.getElementById("name");    

  //id of eye icon to change during toggle
  var z = document.getElementById("passeye");     
  
  //if input is hidden(password type)
  if (x.type === "password") {
  
    //toggle it to unhidden(text type)
    x.type = "text"; 
  
    //toggle eye icon
    z.name="eye-off-outline";
  
  //if input is unhidden(text type)
  } else {
  
    //toggle it to hidden(pass type)
    x.type = "password";
  
    //toggle eye icon
    z.name="eye-outline";
  }
}
