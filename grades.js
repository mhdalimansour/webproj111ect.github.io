const res= localStorage.getItem('result');

function update(names ) {
  var table,tr,td,i,k,j;
  k=0;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  //loop over the table  and put the grades
  for (i = 1 ; i <6; i++) {   
    for(j=3;j<15;j++) {
      td = tr[i].getElementsByTagName("td")[j];
      
      if(td.innerHTML===" No Lab ") {
        j=j+1;
        td = tr[i].getElementsByTagName("td")[j];
      }
      td.innerHTML=names[k];
      k=k+1;
    }
  }

  for (i = 6 ; i <tr.length; i++) {
    for(j=3;j<14;j++) {
      td = tr[i].getElementsByTagName("td")[j];
      td.innerHTML=names[k];
      k=k+1;
    }   
  }
}


import { Accounts } from "../../Mansour/jsMM/accounts.js";

const account = new Accounts();


//change grades accoring to the name of the account's owner

function grades() {
  var txtValue = res;
      
      if (txtValue=== account.studentAccounts.nourtaha.username) {
        update(["Failed","12/2/2023",1,3,2,1,1,4,1,2,15,"F","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
      if (txtValue=== account.studentAccounts.farahsherry.username ) {
        update(["Passed","12/2/2023",1,3,2,1,1,4,1,40,50,"D","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Passed","15/2/2023",	4,5,5,18,5,10,40,90,"A","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
      if (txtValue=== account.studentAccounts.alimustafa.username) {
        update(["Failed","12/2/2023",0,0,0,0,0,0,0,0,0,"F","Failed","12/2/2023",0,0,0,0,0,0,0,0,0,"F","Failed","13/2/2023",0,0,0,0,0,0,0,0,0,"F","Failed","13/2/2023",0,0,0,0,0,0,0,0,0,"F","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"B-","Failed","14/2/2023",0,0,0,0,0,0,0,0,"F","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",0,5,5,5,0,10,40,80,"B+"]);
      }
      if (txtValue=== account.studentAccounts.ayasaker.username) {
        update(["Passed","12/2/2023",5,5,2,1,1,10,1,40,88,"B+","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
      if (txtValue=== account.studentAccounts.mhdalimans.username) {
        update(["Failed","12/2/2023",1,3,2,0,0,4,0,0,10,"F","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Failed","15/2/2023",	4,4,3,9,5,10,5,60,"F"]);
      }
      if (txtValue=== account.studentAccounts.alisaker.username) {
        update(["Passed","12/2/2023",1,3,2,1,1,1,1,2,11,"F","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
      if (txtValue=== account.studentAccounts.abedsafadi.username) {
        update(["Passed","12/2/2023",1,3,2,1,1,1,1,2,11,"F","Passed","12/2/2023",5,5,6,7,4,16,33,5,81,"B","Passed","13/2/2023",	5,5,7,9,5,13,30,5,79,"B-","Passed","13/2/2023",	5,5,7,9,5,13,20,5,70,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,74,"C","Passed","14/2/2023",	4,4,3,9,5,10,5,84,"B","Failed","15/2/2023",	4,0,0,0,5,0,0,9,"F","Passed","15/2/2023",	4,4,3,9,5,10,5,60,"D"]);
      }
}          
window.onload=grades();



//calculate the grades and show it on the button of the table 

function total(){
  var  table, tr, i,td,txtValue;
  var sum=0;
  var totalcredits=0;

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < 6; i++) {
    td = tr[i].getElementsByTagName("td")[13];
    txtValue = parseInt(td.innerHTML);

    if (!isNaN(txtValue)) {
      sum += txtValue*parseInt(tr[i].getElementsByTagName("td")[2].innerHTML);  
      totalcredits+=parseInt(tr[i].getElementsByTagName("td")[2].innerHTML);
    }
  }
  for (i = 6; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[12];
    txtValue = parseInt(td.innerHTML);

    if (!isNaN(txtValue)) {
      sum += txtValue* parseInt(tr[i].getElementsByTagName("td")[2].innerHTML);    
      totalcredits += parseInt(tr[i].getElementsByTagName("td")[2].innerHTML);    
    } 
  }
  sum/=totalcredits;
  sum=sum.toFixed(2);
  if (sum<50){
      par=document.querySelector(".p").textContent = 'Your total grade is '+ sum + ' ' +res+' hard luck ' + ':( !!';
  } else {
    par=document.querySelector(".p").textContent = ' Your total grade is '+ sum + ' Congrats '+ res+'  :) !!';
  }
}
window.onload=total();

window.onload=total();


//upload the grades of the account's owner

