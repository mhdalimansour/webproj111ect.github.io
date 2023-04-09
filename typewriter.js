// Get the result from the input page
const res = localStorage.getItem('result');
var i = 0;
var txt;


// "Database" , to match the the username from thr input to an already made "account" 
//and display the first name of the user

import { Accounts } from "./accounts.js";
const acc = new Accounts();

switch (res) {
  case acc.studentAccounts.mhdalimans.username:
    txt = 'Welcome ' + acc.studentAccounts.mhdalimans.firstName + '!!';
    break;

  case acc.studentAccounts.nourtaha.username:
    txt = 'Welcome ' + acc.studentAccounts.nourtaha.firstName + '!!';
    break;
  
  case acc.studentAccounts.farahsherry.username:
    txt = 'Welcome ' + acc.studentAccounts.farahsherry.firstName + '!!';
    break;

  case acc.studentAccounts.alimustafa.username:
    txt = 'Welcome ' + acc.studentAccounts.alimustafa.firstName + '!!';
    break;

  case acc.studentAccounts.ayasaker.username:
    txt = 'Welcome ' + acc.studentAccounts.ayasaker.firstName + '!!';
    break;

  case acc.studentAccounts.alisaker.username:
    txt = 'Welcome ' + acc.studentAccounts.alisaker.firstName + '!!';
    break;

  case acc.studentAccounts.abedsafadi.username:
    txt = 'Welcome ' + 'Dr.' + acc.studentAccounts.abedsafadi.firstName + '!!';
    break;

  default:
    txt = 'Welcome Guest!'
    break;
}  

//the animation speed;
var speed = 100;

//Main idea: as long as i is less than the length of the string given , it displays 1 character at a time
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}   
// Call the function when the page loads
window.onload = typeWriter();
