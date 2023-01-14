var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    document.getElementById('username').innerHTML = username.toLocaleUpperCase();
    // loadRecord();
})

$('#create').click(()=>{
    document.getElementById('frame').src = '../pages/create.php';
});

$('#view').click(()=>{
    document.getElementById('frame').src = '../pages/tableclass.php';
});

// Click my timetable button
$('#mytime').click(()=>{
    var sec = sessionStorage.getItem('str');
    if(sec=="student" || sec=="lecturer"){
        $('#sub-class').slideToggle(300);
        $('#create').hide();
       }
       else{
        $('#sub-class').slideToggle(300)
       }
    
});
$('#viewrec').click(()=>{
    document.getElementById('frame').src = '../pages/table.php'
    // loadRecord();
})
$('#logout').click(()=>{
    if(confirm('Are you sure you want to logout?')){
        window.location.assign('../index.php')
    }
});

$('#truc').click(()=>{
    if(confirm('Are you sure you wnt to delete the timetable in the databade?')){
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

    xhttp.open("Get", "http://localhost/timetable/request.php?opr=cleartable", true);
    // xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=cleartable", true);
    xhttp.send();
    }else{}
    
});