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
    console.log(password);
    console.log(username);
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(err) {


        console.log('dsssssssss');
        if (this.readyState == 0){
            console.log('Not initialised')
        } else if(this.readyState == 1){
            console.log('Conn established')
        }else if(this.readyState == 2){
            console.log('req received')
        }else if(this.readyState == 3){
            console.log('req processed')
        } else if (this.readyState == 4 && this.status == 200){


         str = xhttp.responseText;
         str = str.replace(/<\/?[^>]+>/gi, '');
         str = $.trim(str.replace('Ajax',''));
         str = $.trim(str.replace('Document',''));
         
         console.log(str);
         // checking usertype {
         if(str=="student"){
            sessionStorage.setItem('str', str);
            
            window.location.assign('./pages/home.php')
            
            console.log('student');
         }
         else if (str=="lecturer"){
            sessionStorage.setItem('str', str);
            window.location.assign('./pages/home.php')
            console.log("lecturer")
         }
         else if (str=="admin"){
            sessionStorage.setItem('str', str);
            window.location.assign('./pages/home.php')

         
         }
        //  accessLevel = str;
        //  console.log(phone);
         } else {
            console.log('Not Sent');
        }
    };
    xhttp.open("Get", "request.php?opr=Loginx" + "&password=" + password + "&username=" +username, true);
    xhttp.send();
}

window.onload= function(){
   var str2= sessionStorage.getItem('str');
   console.log(str2)
   if(str2=="student"){
    loadTimeTable1();
    
   }
   else if (str2=="lecturer"){
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



