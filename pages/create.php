<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/create.css">
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
    <script src="../js/jquery.js"></script>
</head>
<body>
    <div class="container">
        <div id="flight" class="content flight">

            <div class="inner-content">
                
                
                <label for="dayx">Day</label> <br>
                <input type="text" placeholder="E.g. Monday" class="user-input" id="dayx"><br><br>
                <label for="datex">Date</label> <br>
                <input type="date" class="user-input" id="datex"><br><br>
                
                
                <label for="timex">Time</label> <br>
                <input type="text" placeholder="E.g. 8:00 AM - 10:00 AM" class="user-input" id="timex"><br><br>
                <label for="course">Course</label> <br>
                <input type="text" placeholder="E.g. COM212" class="user-input" id="course"><br><br>
                
            
                <label for="venue">Venue</label> <br>
                <input type="text" placeholder="E.g. BLOCK G" class="user-input" id="venue"><br><br>
                <label for="supervisor">Supervisor</label> <br>
                <input type="text" placeholder="E.g. Mr. Ola" class="user-input" id="supervisor">
                
                <div class="btn-cont">
                    <button id="btn-next" class="btn btn-next">Submit</button>
                </div>
            </div>

            <div class="inner-content">
                
                <h2>Note</h2>
                <p><li>Ensure all fields are filled before trying to submit as <span style='color: red'>all fields are required</span> </li></p>
                <p><li>Time should be filled exactly like <span style='color: red'>8:00 am - 10:00 am</span</li></p>
                <p><li>Clicking the submit button means you've added  <span style='color: red'>a course to the timetable</span</li></p>
                
            </div>

           
        </div>

        <div class="loadery">
            <div class="loaderx">
                <div class="loader"></div>
            <p>Loading, pleass wait...</p>
            </div>
        </div>
    </div>

    <script src="../js/create.js"></script>
    <script src="../js/login.js"></script>

</body>
</html>