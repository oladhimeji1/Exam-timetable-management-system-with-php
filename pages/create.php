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
                
                <!-- <div> -->
                <div>
                    <label for="dayx">Day</label> <br>
                    <input type="text" placeholder="E.g. Monday" class="user-input" id="dayx"><br><br>
                    <label for="datex">Date</label> <br>
                    <input type="date" class="user-input" id="datex"><br><br>
                </div>
                <div>
                    <label for="timex">Time</label> <br>
                    <input type="text" placeholder="E.g. 8:00 AM - 10:00 AM" class="user-input" id="timex"><br><br>
                    <label for="course">Course</label> <br>
                    <input type="text" placeholder="E.g. COM212" class="user-input" id="course"><br><br>
                </div>
                <div>
                <label for="venue">Venue</label> <br>
                    <input type="text" placeholder="E.g. BLOCK G" class="user-input" id="venue"><br><br>
                    <label for="supervisor">Supervisor</label> <br>
                    <input type="text" placeholder="E.g. Mr. Ola" class="user-input" id="supervisor">
                  
                </div>

            </div>

            <button id="btn-next" class="btn btn-next">Submit</button>
        </div>

         

        <div class="content-prev" id="contprev">
            <i class="fa fa-times btn-times"></i>
            <p><b>Monday:</b> <span id="monday"></span></p>
            <p><b>Tuesday:</b> <span id="tuesday"></span></p>
            <p><b>Wednesday:</b> <span id="wednesday"></span></p>
            <p><b>Thursday:</b> <span id="thursday"></span></p>
            <p><b>Friday:</b> <span id="friday"></span></p>
            

            <small>Please ensure your details are correct before proceed to submit</small>
            <button id="submitx" class="btn btn-book">Proceed</button>
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