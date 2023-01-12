var startdate, enddate, city, country, destination, ftype;
var fullname, haddress, pid, phone, reason;

var monday = document.getElementById('monday');
var tuesday = document.getElementById('tuesday');
var wednesday = document.getElementById('wednesday');
var thursday = document.getElementById('thursday');
var friday = document.getElementById('friday');
 
var daytime = document.getElementById('daytime');
var firstperiod = document.getElementById('firstperiod');
var secondperiod = document.getElementById('secondperiod');
var venue = document.getElementById('venue');
var supervisor = document.getElementById('supervisor');

var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    loadall();
    // loadRecord();
})

$('#btn-next').click(()=>{
    updateExam();

    // // Monday
    // mon1 = $('#mon1').val();
    // mon2 = $('#mon2').val();
    // mon3 = $('#mon3').val();
    // mon4 = $('#mon4').val();
    // monven1 = $('#monven1').val();
    // monven2 = $('#monven2').val();
    // monven3 = $('#monven3').val();
    // monven4 = $('#monven4').val();
    // monsup1 = $('#monsup1').val();
    // monsup2 = $('#monsup2').val();
    // monsup3 = $('#monsup3').val();
    // monsup4 = $('#monsup4').val();

    // // Tuesday
    // tue1 = $('#tue1').val();
    // tue2 = $('#tue2').val();
    // tue3 = $('#tue3').val();
    // tue4 = $('#tue4').val();
    // tueven1 = $('#tueven1').val();
    // tueven2 = $('#tueven2').val();
    // tueven3 = $('#tueven3').val();
    // tueven4 = $('#tueven4').val();
    // tuesup1 = $('#tuesup1').val();
    // tuesup2 = $('#tuesup2').val();
    // tuesup3 = $('#tuesup3').val();
    // tuesup4 = $('#tuesup4').val();

    // // Tuesday
    // wed1 = $('#wed1').val();
    // wed2 = $('#wed2').val();
    // wed3 = $('#wed3').val();
    // wed4 = $('#wed4').val();
    // wedven1 = $('#wedven1').val();
    // wedven2 = $('#wedven2').val();
    // wedven3 = $('#wedven3').val();
    // wedven4 = $('#wedven4').val();
    // wedsup1 = $('#wedsup1').val();
    // wedsup2 = $('#wedsup2').val();
    // wedsup3 = $('#wedsup3').val();
    // wedsup4 = $('#wedsup4').val();
    

    // // Thursday
    // thur1 = $('#thur1').val();
    // thur2 = $('#thur2').val();
    // thur3 = $('#thur3').val();
    // thur4 = $('#thur4').val();
    // thurven1 = $('#thurven1').val();
    // thurven2 = $('#thurven2').val();
    // thurven3 = $('#thurven3').val();
    // thurven4 = $('#thurven4').val();
    // thursup1 = $('#thursup1').val();
    // thursup2 = $('#thursup2').val();
    // thursup3 = $('#thursup3').val();
    // thursup4 = $('#thursup4').val();

    // // Friday
    // fri1 = $('#fri1').val();
    // fri2 = $('#fri2').val();
    // fri3 = $('#fri3').val();
    // fri4 = $('#fri4').val();
    // friven1 = $('#friven1').val();
    // friven2 = $('#friven2').val();
    // friven3 = $('#friven3').val();
    // friven4 = $('#friven4').val();
    // frisup1 = $('#frisup1').val();
    // frisup2 = $('#frisup2').val();
    // frisup3 = $('#frisup3').val();
    // frisup4 = $('#frisup4').val();
    
    // $('#flight').hide(500, ()=>{
    //     $('#contprev').show(500, ()=>{
    //         monday.innerHTML = `${mon1}/${monven1}/${monsup1}, 
    //         ${mon2}/${monven2}/${monsup2}, 
    //         ${mon3}/${monven3}/${monsup3}, ${mon4}/${monven4}/${monsup4}`
            
    //         tuesday.innerHTML = `${tue1}/${tueven1}/${tuesup1}, 
    //         ${tue2}/${tueven2}/${tuesup2}, 
    //         ${tue3}/${tueven3}/${tuesup3}, ${tue4}/${tueven4}/${tuesup4}`
            
    //         wednesday.innerHTML = `${wed1}/${wedven1}/${wedsup1}, 
    //         ${wed2}/${wedven2}/${wedsup2}, 
    //         ${wed3}/${wedven3}/${wedsup3}, ${wed4}/${wedven4}/${wedsup4}`
            
    //         thursday.innerHTML = `${thur1}/${thurven1}/${thursup1}, 
    //         ${thur2}/${thurven2}/${thursup2}, 
    //         ${thur3}/${thurven3}/${thursup3}, ${thur4}/${thurven4}/${thursup4}`
            
    //         friday.innerHTML = `${fri1}/${friven1}/${frisup1}, 
    //         ${fri2}/${friven2}/${frisup2}, 
    //         ${fri3}/${friven3}/${frisup3}, ${fri4}/${friven4}/${frisup4}`
            
    //     })
    // })
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
            // console.log(xhttp.responseText);
            // document.getElementsByClassName('noRec').innerHTML = '';
            //document.getElementById("tab").innerHTML = "<tr><th>Day/Date</th><th>8:30-10:30</th><th>11:00-1:00</th></tr>" + xhttp.responseText;
        } else {

        }
    };

xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadall", true);
xhttp.send();

}

function updateExam(){
    var daytimex =  daytime.value.toUpperCase();
    var firstperiodx = firstperiod.value.toUpperCase();
    var secondperiodx = secondperiod.value.toUpperCase(); 
    var venuex = venue.value.toUpperCase();
    var supervisorx = supervisor.value.toUpperCase();

    console.log(supervisorx)
    var xhttp = new XMLHttpRequest();
        
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200){

            // str = xhttp.responseText;
            // str = str.replace(/<\/?[^>]+>/gi, '');
            // str = str.trim(str.replace('Ajax',''));
            // str = $.trim(str.replace('Document',''));
            // console.log(str);
            

            // var obj = JSON.parse(str)
            // console.log(obj.Sno);
            // console.log(xhttp.responseText);
            // document.getElementsByClassName('noRec').innerHTML = '';
            //document.getElementById("tab").innerHTML = "<tr><th>Day/Date</th><th>8:30-10:30</th><th>11:00-1:00</th></tr>" + xhttp.responseText;
        } else {

        }
    };

xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=updatexam"  + "&daytimex=" + daytimex +
 "&firstperiodx=" + firstperiodx + "&secondperiodx=" + secondperiodx +
 "&venuex=" + venuex + "&supervisorx=" +supervisorx, true);
xhttp.send();

}