import { Accounts } from './accounts.js';

const button = document.getElementById('myButton');
const id = document.getElementById('stid');

button.addEventListener('click', function() {
  if (required()) { // call the form validator function
    const idvalue = id.value;
    localStorage.setItem('result', idvalue);
    window.location.href = "mansour.html";
  }
});

function required() {
  const account = new Accounts();


  var empt = document.forms["form1"]["stid"].value;
  var empt2 = document.forms["form1"]["shaked"].value;
  const element2 = document.getElementById("cont2");
  const element = document.getElementById("cont3");

  if (empt === "" && empt2 === "") {
    element.classList.remove("shake");
    element2.classList.remove("shake");
    element.classList.add("shake");
    element2.classList.add("shake");
    return false;
  }
  if (empt === "") {
    element.classList.remove("shake");
    element.classList.add("shake");
    return false;
  }
  if (empt2 === "") {
    element2.classList.remove("shake");
    element2.classList.add("shake");
    return false;
  }
  
  switch (empt) {
    case account.studentAccounts.alimustafa.username:
      if(empt2 === account.studentAccounts.alimustafa.password)
        return true;
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");
        return false;
      }
    
    case account.studentAccounts.mhdalimans.username:
      if(empt2 === account.studentAccounts.mhdalimans.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

      
    case account.studentAccounts.nourtaha.username:
      if(empt2 === account.studentAccounts.nourtaha.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

    case account.studentAccounts.farahsherry.username:
      if(empt2 === account.studentAccounts.farahsherry.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

    case account.studentAccounts.ayasaker.username:
      if(empt2 === account.studentAccounts.ayasaker.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

    case account.studentAccounts.alisaker.username:
      if(empt2 === account.studentAccounts.alisaker.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }

    case account.studentAccounts.abedsafadi.username:
      if(empt2 === account.studentAccounts.abedsafadi.password) {
        return true;
      }
      else {
        element2.classList.remove("shake");
        element2.classList.add("shake");  
        return false;
      }


    default:
      element.classList.add("shake");
      return false;
  }
}
