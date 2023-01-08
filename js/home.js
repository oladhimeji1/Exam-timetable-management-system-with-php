var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    document.getElementById('username').innerHTML = username
    // loadRecord();
})

$('#create').click(()=>{
    document.getElementById('frame').src = '../pages/create.php';
});

// Click my timetable button
$('#mytime').click(()=>{
    $('#sub-class').slideToggle(300)
});
$('#viewrec').click(()=>{
    document.getElementById('frame').src = '../pages/table.html'
    // loadRecord();
})
$('#logout').click(()=>{
    if(confirm('Are you sure you want to logout?')){
        window.location.assign('../index.html')
    }
});
