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
         if(str=="False"){
            window.location.assign('./pages/home.php')
            console.log('user');
         }
         else if (str=="True"){
            window.location.assign('./pages/create.php')
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
    
   

   
}