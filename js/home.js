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
        window.location.assign('../index.html')
    }
});
