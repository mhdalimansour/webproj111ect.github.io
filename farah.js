
function loadmore() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {  /* Set a <div> element to check if box is  not displayed */
        x.style.display = "block"; /* then display the box */
        document.getElementById("loadmore").innerHTML = "show less"; /* and change load more to show less */
    } else {
        x.style.display = "none";
        document.getElementById("loadmore").innerHTML = "load more";
    }
    var y = document.getElementById("myDIV2");
    if (y.style.display === "none") {
        y.style.display = "block";
        document.getElementById("loadmore").innerHTML = "show less";
    } else {
        y.style.display = "none";
        document.getElementById("loadmore").innerHTML = "load more";
    }

    var z = document.getElementById("myDIV3");
    if (z.style.display === "none") {
        z.style.display = "block";
        document.getElementById("loadmore").innerHTML = "show less";
    } else {
        z.style.display = "none";
        document.getElementById("loadmore").innerHTML = "load more";
    }
}

function openWin1() { /* opening on click ,the preview button, telegram channel for each course */
    window.open("https://t.me/+wxwu5CLl4YZlN2Jk");
}
function openWin2() {
    window.open("https://t.me/+nLEMa0bmpKsxNTA0");
}
function openWin3() {
    window.open("https://t.me/+r6UdVyIaYXk2MDlk");
}
function openWin4() {
    window.open("https://t.me/+fFa_-hfl-Mc3NDM8");
}
function openWin5() {
    window.open("https://t.me/+xEymPKtP8sUwOTNk");
}
function openWin6() {
    window.open("https://t.me/+xNdFWAsotWkwOTI8");
}
function openWin7() {
    window.open("https://t.me/+hluwDGJDnC85NzNk");
}
function openWin8() {
    window.open("https://t.me/+R_ECAwANL-1jY2Y0");
}





var cards = document.querySelectorAll('.card'); /* using jquery to select all the cards */

[...cards].forEach((card) => {
    card.addEventListener('click', function () { /* add an event where on click , the image gonna flip*/
        card.classList.toggle('is-flipped');


    });
});


function filterCourses(type) {
    const courses = document.getElementsByClassName("box");

    for (let i = 0; i < courses.length; i++) { /* looping across the courses */
        const course = courses[i];
        const courseType = course.getAttribute("data-type");

        if (type === "all") { /* if the clicked button is all then display all the boxes */
            course.style.display = "block";
        } else if (type === "mandatory") {  /* if the clicked button is mandatory */
            if (courseType === "mandatory") {/* check data type if mandatory */
                course.style.display = "block"; /* display the corresponding boxes */
                document.querySelector('.load-more .btn').style.display = 'none'; /* then remove load more button */
            } else {
                course.style.display = "none"; /* hide optional courses */
            }
        } else if (type === "optional") { /* if clicked button is  optional */
            if (courseType === "optional") {
                course.style.display = "block"; /* display the corresponding boxes */
                document.querySelector('.load-more .btn').style.display = 'none';/* then remove load more button */
            } else {
                course.style.display = "none"; /*hide mandatory courses */
            }
        }
    }
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filterButtons");
var btns = btnContainer.getElementsByClassName("button-value");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function openPdf() {
    window.open("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiYm47JqJL-AhVsTaQEHVzmBGAQFnoECAoQAQ&url=https%3A%2F%2Fwww.cs.bham.ac.uk%2F~jxb%2FDSA%2Fdsa.pdf&usg=AOvVaw1_rAAPVg4Mt-TNx9qhoSSS");
}














