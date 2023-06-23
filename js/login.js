var username, password, fullname, username, email, psw, rpsw, phone;
var msgx = document.getElementById('msgx');

$('#btny').click(()=>{
    username = $('#username').val();
    password = $('#password').val();

    sessionStorage.setItem('username', username);
    $('.loadery').fadeIn(300)
    $('.loadery').delay(2000)
    $('.loadery').fadeOut(300, ()=>{
        LoginServer();  // calling ajax
        // window.location.assign('./pages/home.php')

    })
    
});


// login Ajax
function LoginServer(){
    let password= document.getElementById('password').value;
    let username = document.getElementById('username').value;
    // console.log(password);
    // console.log(username);
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(err) {

        if (this.readyState == 4 && this.status == 200){

            str = xhttp.responseText;
            str = str.replace(/<\/?[^>]+>/gi, '');
            str = $.trim(str.replace('Ajax',''));
            str = $.trim(str.replace('Document',''));
            
            if(str=="student" || str=="lecturer" || str=="admin"){
                sessionStorage.setItem('str', str);
                window.location.assign('./pages/home.php')
            } else {
                alert('Username or password is incorrect, please try again')
            }
         
        } else {
            console.log('Error reaching the server');
        }
    };
    xhttp.open("Get", "request.php?opr=Loginx" + "&password=" + password + "&username=" +username, true);
    xhttp.send();
}

window.onload= function(){
   var str2= sessionStorage.getItem('str');
//    console.log(str2)
   if(str2=="student"){
    $('#create').hide()
    loadTimeTable1();
    
   }
   else if (str2=="lecturer"){
    $('#create').hide()
    loadTimeTable3();
   
   }
   else if (str2=="admin"){
    $("#truc").show();
    loadTimeTable4();
   
   }
   else{
    // $("#truc").show();
    // loadTimeTable4();

   }
    //loadTimeTable1();
}



