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
    
    // const _data = {
    //     username: username,
    //     password: password
    // }

    // fetch('http://localhost:3000/login', {
    //     method: 'POST',
    //     body: JSON.stringify(_data),
    //     headers: {'Content-type': 'application/json; charset=utf-8'}
    // })
    // .then(response => response.json())
    // // .then(response => response.text())
    // .then(data => {
    //     console.log(data)
    //     if(data == ![]){
    //         $('.msgbox').slideDown(500);
    //         $('.msgbox').delay(3000);
    //         $('.msgbox').slideUp(500);
    //     }else{
    //         $('.loadery').show(500)
    //         $('.loadery').delay(2000)
    //         $('.loadery').hide(500, ()=>{
    //             window.location.assign('./pages/home.html')
    //         })
    //     }
    // })
    // .catch(err => console.log(err));

    
});


// login Ajax
function LoginServer(){
    let password= document.getElementById('password').value;
    let username = document.getElementById('username').value;
    console.log(password);
    console.log(username);
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(err) {

<<<<<<< HEAD
        if (this.readyState == 4 && this.status == 200){
=======
        if (this.readyState == 0){
            console.log('Not initialised')
        } else if(this.readyState == 1){
            console.log('Conn established')
        }else if(this.readyState == 2){
            console.log('req received')
        }else if(this.readyState == 3){
            console.log('req processed')
        } else if (this.readyState == 4 && this.status == 200){
>>>>>>> 10cb51cb5dcedf30f397eb60affdad98927624a7

         str = xhttp.responseText;
         str = str.replace(/<\/?[^>]+>/gi, '');
         str = $.trim(str.replace('Ajax',''));
         str = $.trim(str.replace('Document',''));
         
         console.log(str);
         // checking usertype {
<<<<<<< HEAD
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
=======
         if(str=="False"){
            window.location.assign('./pages/home.php')
            console.log('user');
         }
         else if (str=="True"){
            window.location.assign('./pages/create.php')
>>>>>>> 10cb51cb5dcedf30f397eb60affdad98927624a7
            console.log("admin")
         }
         else{
            console.log('you are not a student')
         }
         //}
        //  accessLevel = str;
        //  console.log(phone);
         } else {
            console.log('Not Sent');
        }
    }
      xhttp.open("Get", "request.php?opr=Loginx" + "&password=" + password + "&username=" +username, true);
      xhttp.send();
    
   

   
<<<<<<< HEAD
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
   else{
    loadTimeTable4();
   }
    //loadTimeTable1();
}
// function loadTimeTable1(){

//     var xhttp = new XMLHttpRequest();
        
//     xhttp.onreadystatechange = function() {
        
//         if (this.readyState == 4 && this.status == 200){

//             str = xhttp.responseText;
//             str = str.replace(/<\/?[^>]+>/gi, '');
//             str = str.trim(str.replace('Ajax',''));
//             str = $.trim(str.replace('Document',''));

//             console.log(str);
//             // console.log(xhttp.responseText);
//             // document.getElementsByClassName('noRec').innerHTML = '';
//             document.getElementById("tab").innerHTML = "<tr><th>Day/Date</th><th>8:30-10:30</th><th>11:00-1:00</th></tr>" + xhttp.responseText;
//         } else {

//         }
//     };

// xhttp.open("Get", "http://localhost:122/Exam-timetable-management-system-with-php/request.php?opr=loadTimeTable1", true);
// xhttp.send();

// }
=======
}
>>>>>>> 10cb51cb5dcedf30f397eb60affdad98927624a7
