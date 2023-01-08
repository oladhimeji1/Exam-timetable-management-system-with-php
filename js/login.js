var username, password, fullname, username, email, psw, rpsw, phone;
var msgx = document.getElementById('msgx');

$('#btny').click(()=>{
    username = $('#username').val();
    password = $('#password').val();

    sessionStorage.setItem('username', username);
    $('.loadery').fadeIn(300)
    $('.loadery').delay(2000)
    $('.loadery').fadeOut(300, ()=>{
        window.location.assign('./pages/home.php')
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