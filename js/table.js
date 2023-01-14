
var username;
var ola

$(document).ready(()=>{
    // loadTimeTable4();
    loadTimeTable2();

    username = sessionStorage.getItem('username');
    // loadRecord()   
})

// this fuction is called in login.js for student exams
function loadTimeTable1(){

    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            // console.log(str);
            // console.log(xhttp.responseText);
            // document.getElementsByClassName('noRec').innerHTML = '';
            document.getElementById("tab").innerHTML = "<tr><th>Date</th><th>Day</th><th>Time</th><th>Course</th><th>Venue</th></tr>" + xhttp.responseText;
        } else {

        }
    };

xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadTimeTable1", true);
// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable1", true);
xhttp.send();

}


function loadTimeTable2(){
    // console.log('kkkkkkkkkk');
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            // console.log(str);
            // console.log(xhttp.responseText);
            
            document.getElementById("tab2").innerHTML = "<tr><th>Day</th><th>8:30-10:30</th><th>10:30-12:30</th><th>12:30-1:30</th><th>1:30-3:30</th></tr>" + xhttp.responseText;
        } else {

        }
    };

// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable2", true);
xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadTimeTable2", true);
xhttp.send();

}



function loadTimeTable3(){
    console.log('call1');
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            // console.log(str);
            // console.log(xhttp.responseText);
            
            document.getElementById("tab").innerHTML = "<tr><th>Date</th><th>Day</th><th>Time</th><th>Course</th><th>Venue</th><th>Supervisor</th></tr>" + xhttp.responseText;
            console.log('call2');
        } else {

        }
    };

// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable3", true);
xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadTimeTable3", true);
xhttp.send();

}

function loadTimeTable4(){
    console.log('kkkkkkkkkk');
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            // console.log(str);
            // console.log(xhttp.responseText);
            
            document.getElementById("tab").innerHTML ="<tr><th>S/N</th><th>Date</th><th>Day</th><th>Time</th><th>Course</th><th>Venue</th><th>Supervisor</th></tr>" + xhttp.responseText;
        } else {

        }
    };

xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadTimeTable4", true);
// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable4", true);
xhttp.send();

}

$('#truc').click(()=>{
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            // console.log(str);
            // console.log(xhttp.responseText);
            
          
            var stringx = xhttp.responseText;
            stringx = stringx.toUpperCase();
            document.getElementById("tab").innerHTML =stringx.fontsize(10);
            console.log('call2');
        } else {

        }
    };

// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=cleartable", true);
xhttp.open("Get", "http://localhost/timetable/request.php?opr=cleartable", true);
xhttp.send();


});
