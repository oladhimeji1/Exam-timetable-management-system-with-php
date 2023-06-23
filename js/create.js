var startdate, enddate, city, country, destination, ftype;
var fullname, haddress, pid, phone, reason;

var monday = document.getElementById('monday');
var tuesday = document.getElementById('tuesday');
var wednesday = document.getElementById('wednesday');
var thursday = document.getElementById('thursday');
var friday = document.getElementById('friday');
 
var datex = document.getElementById('datex');
var dayx = document.getElementById('dayx');
var timex = document.getElementById('timex');
var course = document.getElementById('course');
var venuex = document.getElementById('venue');
var supervisorx = document.getElementById('supervisor');


var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    loadall();
    // loadRecord();
})

$('#btn-next').click(()=>{
    updateExam();
});

$('.btn-times').click(()=>{
    $('#contprev').hide(500);
    $('#flight').show(500);
});

$('#btn-prev').click(()=>{
    $('#personal').hide(500, ()=>{
        $('#flight').show(500)
    })
})

$('#btn-submit').click(()=>{
    fullname = $('#fullname').val();
    haddress = $('#haddress').val();
    pid = $('#pid').val();
    phone = $('#phone').val();
    reason = $('#reason').val();

    $('#personal').hide(500, ()=>{
        $('#contprev').show(500)
    })

    ful.innerHTML = fullname;
    idp.innerHTML = pid;
    start.innerHTML = startdate;
    end.innerHTML = enddate;
    cityx.innerHTML = city;
    countryx.innerHTML = country;
    daddress.innerHTML = destination;
    addressx.innerHTML = haddress;
    phonex.innerHTML = phone;
    ftypex.innerHTML = ftype;
    msg.innerHTML = reason;

});



$('#submitx').click(()=>{
    $('.loadery'). show(500)

    const _data = {
        username: username,
        fullname: fullname,
        pid: pid,
        startdate: startdate,
        enddate: enddate,
        city: city,
        country: country,
        destination: destination,
        haddress: haddress,
        phone: phone,
        ftype: ftype,
        reason: reason
    }
    // console.log(_data)
    fetch('http://localhost:3000/add-user', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    // .then(response => response.json())
    .then(response => response.text())
    .then(datax => console.log(datax))
    .catch(err => console.log(err));

    setTimeout(()=>{
        $('.loadery'). hide(500)
    }, 1000);

    $('#contprev').hide(500);
})


// load all rec
function loadall(){

    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = str.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));

            var obj = JSON.parse(str)
            console.log(obj.Sno);
        } else {

        }
    };

// xhttp.open("Get", "http://localhost/timetable/request.php?opr=loadall", true);
xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadall", true);
xhttp.send();

}

function updateExam(){
     
    datex =  datex.value.toUpperCase();
    dayx = dayx.value.toUpperCase();
    timex = timex.value.toUpperCase();
    course = course.value.toUpperCase(); 
    venuex = venuex.value.toUpperCase(); 
    supervisorx = supervisorx.value.toUpperCase(); 
     
    var xhttp = new XMLHttpRequest();
    
    if(!datex && !dayx && !timex && !course && !venuex && !supervisorx){
        alert('Please ensure all fields are filled!')
    } else {
        xhttp.onreadystatechange = function() {
            
            if (this.readyState == 4 && this.status == 200){

                str = xhttp.responseText;
                str = str.replace(/<\/?[^>]+>/gi, '');
                str = str.trim(str.replace('Ajax',''));
                str = $.trim(str.replace('Document',''));

                // console.log(str);
                // alert(str);
            } else {
            console.log('not')
            }
        }

        xhttp.open("Get", "http://localhost/timetable/request.php?opr=updatexam"  + "&datex=" + datex +
        "&dayx=" + dayx + "&timex=" + timex +
        "&course=" + course + "&venuex=" + venuex + "&supervisorx=" + supervisorx, true);

        xhttp.send();

        window.location.reload(true);
    }
}