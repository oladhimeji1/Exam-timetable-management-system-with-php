<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timetable management system | Login page</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.js"></script>
</head>
<body>
    <div class="container">
        <!-- <marquee style="color: rgb(0, 179, 255);" behavior="" direction="">Exam timetable management system by <b>ND 2 students</b></marquee> -->
        
        <div class="load-cont">
            <div class="loadery">
                <div class="loaderx">
                    <div class="loader"></div>
                    <p>Loading, pleass wait...</p>
                </div>
            </div>  
        </div>
        
        
        <div class="msgbox">
            <p class="msgx" id="msgx">Username or password is incorrect, please try again.</p>
        </div>

        <div class="content">
            <div>
            <h1>Login Panel</h1>
                <label for="username">Username</label><br>
                <input name="username" type="text" placeholder="Enter Username" class="user-input" id="username"><br>
                <label for="password">Password</label><br>
                <input name="password" type="password" placeholder="Enter Password" class="user-input" id="password">
                <br>
                <button id="btny" class="btn">Login</button>
            </div>
            
            
        </div>
        
    </div>

    <script src="js/login.js"></script>
</body>
</html>