
const res= localStorage.getItem('result');

//show the whole grades when clicking on + and recollapse it when clicking on -

function toggleColumns() {
  var cells = document.querySelectorAll("#myTable td, #myTable th");
  var plus = document.getElementById('plus');
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains("hide")) {
      cells[i].style.display = cells[i].style.display === "none" ? "table-cell" : "none";
      plus.innerHTML = cells[i].style.display === "none" ? "+" : "-";
    }
  }
}

//loop over the table and search for a subject's code

function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



//change the color of the rows of the failed subjects

function failed(){
  var  table, tr, i,td;
  sum=0;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3].innerHTML;
    if(td==="Failed"){
      tr[i].style.backgroundColor = "var(--failed)";    
    }

  }
}
window.onload=failed();

// var txt;
// txt = 'Welcome ' + res + ' here are your Marks!';
// document.getElementById("capt").innerHTML = txt; 