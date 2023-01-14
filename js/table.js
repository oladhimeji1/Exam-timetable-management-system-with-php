
var username;
var ola

$(document).ready(()=>{
    // loadTimeTable4();
    loadTimeTable2();

    username = sessionStorage.getItem('username');
    // loadRecord()   
})

// const api_url = 'http://localhost:3000/loadrec';

// async function getapi(url){
//     username = sessionStorage.getItem('username');

//     const _data = { username: username }
//     console.log(_data)
//     const response = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(_data),
//         headers: {'Content-type': 'application/json; charset=utf-8'}
//     });
//     var data = await response.json();
//     console.log(data);
//     if(response){
//         $('#tab').fadeOut();
//         $('.loadery').fadeIn(100)
//         $('.loadery').delay(2000)
//         $('.loadery').fadeOut(200)
//         $('#tab').fadeIn(300);
//     }
//     show(data);
// }
// getapi(api_url);

// function show(data){
//     let tab = `<tr><th>Passport ID</th>
//     <th>Destination</th><th>Country</th>
//     <th>Flight Schedule</th><th>Return Schedule</th>
//     <th>Flight Time</th><th>Seat Number</th><th>Flight Date</th>
//     <th>Return Date</th><th>Phone</th></tr>`;

//     for(let ol of data){
//         document.getElementById('tab').innerHTML = tab += `<tr><td>${ol.PassportId}</td><td>${ol.Destination}</td><td>${ol.Country}</td><td>${ol.Depdate}</td><td>${ol.Retdate}</td><td>${ol.Username}</td><td>${ol.Fullname}</td><td>${ol.FlightType}</td><td>${ol.Phone}</td><td>${ol.Phone}</td></tr>`
//     }
// }

// examTimeTable for student
// window.onload = function() {
//     // console.log('nana');
//     // loadTimeTable1();
// }

// this fuction is called in login.js for student exams
function loadTimeTable1(){

    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            console.log(str);
            // console.log(xhttp.responseText);
            // document.getElementsByClassName('noRec').innerHTML = '';
            document.getElementById("tab").innerHTML = "<tr><th>Day/Date</th><th>8:30-10:30</th><th>11:00-1:00</th><th>Venue</th></tr>" + xhttp.responseText;
        } else {

        }
    };

xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadTimeTable1", true);
// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable1", true);
xhttp.send();

}


function loadTimeTable2(){
    console.log('kkkkkkkkkk');
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            console.log(str);
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

            console.log(str);
            // console.log(xhttp.responseText);
            
            document.getElementById("tab").innerHTML = "<tr><th>Day/Date</th><th>8:30-10:30</th><th>11:00-1:00</th><th>Venue</th><th>Supervisor</th></tr>" + xhttp.responseText;
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

            console.log(str);
            // console.log(xhttp.responseText);
            
            document.getElementById("tab").innerHTML ="<tr><th>S/N</th><th>Day/Date</th><th>8:30-10:30</th><th>11:00-1:00</th><th>Venue</th><th>Supervisor</th></tr>" + xhttp.responseText;
        } else {

        }
    };

xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadTimeTable4", true);
// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable4", true);
xhttp.send();

}

