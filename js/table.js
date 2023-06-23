var username;
var ola

$(document).ready(()=>{
    // loadTimeTable4();
    loadTimeTable2();
    todaydatex();

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

            document.getElementById("tab").innerHTML = "<tr><th>Date</th><th>Day</th><th>Time</th><th>Course</th><th>Venue</th></tr>" + xhttp.responseText;
            $('.loadery').fadeOut(500)
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
    
    $('.loadery').fadeIn(500)
    $('.loadery').delay(1000)
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));
            
            document.getElementById("tab2").innerHTML = "<tr><th>Day</th><th>8:30 - 10:30</th><th>10:30 - 12:30</th><th>12:30 - 1:30</th><th>1:30 - 3:30</th></tr>" + xhttp.responseText;
            $('.loadery').fadeOut(500)
        } else {

        }
    };

// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable2", true);
xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadTimeTable2", true);
xhttp.send();

}



function loadTimeTable3(){
    // console.log('call1');
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            document.getElementById("tab").innerHTML = "<tr><th>Date</th><th>Day</th><th>Time</th><th>Course</th><th>Venue</th><th>Supervisor</th></tr>" + xhttp.responseText;
            $('.loadery').fadeOut(500)
        } else {

        }
    };

// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable3", true);
xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadTimeTable3", true);
xhttp.send();

}

function loadTimeTable4(){
    
    var xhttp = new XMLHttpRequest();
    
    $('.loadery').fadeIn(500)
    $('.loadery').delay(1000)

    xhttp.onreadystatechange = function() {
    
        if (this.readyState == 4 && this.status == 200){
            
            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));
            
            document.getElementById("tab").innerHTML ="<tr><th>Date</th><th>Day</th><th>Time</th><th>Course</th><th>Venue</th><th>Supervisor</th></tr>" + xhttp.responseText;
            
            $('.loadery').fadeOut(500)
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
            // console.log('call2');
        } else {

        }
    };

// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=cleartable", true);
xhttp.open("Get", "http://localhost/timetable/request.php?opr=cleartable", true);
xhttp.send();


});


function todaydatex() {
   
    var x = new Date()
    var ampm = x.getHours() >= 12 ? ' PM' : ' AM';
    var hrs =  x.getHours()
    var mins = x.getMinutes()
    var secs = x.getSeconds()
    // alert('dhddhd');
    if(hrs > 12){
      hrs = hrs - 12;
    }

    if(mins < 10){
      mins = '0' + mins
    }

    if(secs < 10){
      secs = '0' + secs
    }

    var x1 = x.getMonth() + 1+ "-" + x.getDate() + "-" + x.getFullYear();
    var x1 = x.getFullYear() + "-" + x.getMonth()+ 1 + "-" + x.getDate() ; 
    
    //var x2 = hrs + ":" +  mins + ":" +  secs + ":" + ampm;
    //console.log(x2);

    document.getElementById('datex').innerHTML = x1;

    //Display_Clock();
    var todayN = x1;
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            // console.log(str);
            // console.log(xhttp.responseText);
            
          
        //   console(todayN)
            // var stringx = xhttp.responseText;
            // stringx = stringx.toUpperCase();
            document.getElementById("today").innerHTML = xhttp.responseText;
            // console.log('call2');
        } else {

        }
    };

    // xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadtoday" + "&todayN=" +todayN, true);
    xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadtoday" + "&todayN=" + todayN, true);
    xhttp.send();


 }
