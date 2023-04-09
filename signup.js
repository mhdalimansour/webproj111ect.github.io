
/* function for shaking pass at error in saving pass */
function compare(){
  //value of pass
  let val1 = document.getElementById("pass").value;
  
  //value of save pass
  let val2 = document.getElementById("savepass").value;
  
  //comparing passwords (if they are the same it returns 0)
  const  res = val1.localeCompare(val2);
  
  //id of the div to be shaked at error
  const element2 = document.getElementById("cont");
  
  //regular expression 
  var paswd=  /^(?=.*[0-9])(?=.*[?!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!?@#$%^&*]{7,15}$/;
  
  //length of pass
  var length = val1.length;
  
  //check if passwords are not the same(res!=0)
  if(res)
  {
      //add shake class to the div due to error
      element2.classList.add("shake");
      
      //add massage due to type of error
      document.getElementById("demo").innerHTML = 'Passwords are not the same';
  }
  else //if pass are the same(res==0)
  {
      //check if pass is short or tall(range must be btw 7 and 15)
      if(length<7 || length >15) 
      {
          //add shake to the div due to error
          element2.classList.add("shake3");
          
          //add massage due to type of error
          document.getElementById("demo").innerHTML = 'Password must be between 7 and 15 characters';
          
          return 1;//no need to continue
      }
      if(val1.match(paswd))//check if pass is strong(match returns array of matches)
      {
          //pass is strong so mission accomplished,go to the next page
          window.location.replace("mansour.html");
      }
      else   //check if pass is week(match returns null if no matching btw the input and the regexp)
      {
          //pass is week,shake
          element2.classList.add("shake2");
          
          //add massage due to type of error
          document.getElementById("demo").innerHTML = 'Password must include letters,numbers and a special character';
      }
  }
}
