<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Airline booking system | User dashboard</title>
    <link rel="stylesheet" href="../css/home.css">
    <script src="../js/jquery.js"></script>
    <link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
</head>
<body>
    <!-- <div class="loadery">
        <div class="loaderx">
            <div class="loader"></div>
        <p>Loading, pleass wait...</p>
        </div>
    </div> -->
    <div class="xxx">
    <nav>
        <ul>
            <img src="img/Mike.jpg" alt="School logo" class="school-logo">
            <h2>Welcome, <span id="username">Oladimeji nn</span></h2>
            <h2></h2>
            
            <h2>Examination timetable mannagemnt system</h2>
            <button id="logout" title="Logout"><i class="fa fa-sign-out"></i></button>
        </ul>
    </nav>
    <div class="sidebar">

        <p class="sidebar-item" id="viewrec">
            <i class="fa fa-info-circle"></i> 
            Examination
        </p><hr>

        <!-- <p id="reg" class="sidebar-item">
            <i class="fa fa-user-plus"></i> 
            Create
        </p><hr> -->
        
        
        <p id="mytime" class="sidebar-item">
            <i class="fa fa-info-circle"></i> 
            My timetable
        </p><hr> 
        <div class="sub-menue" id="sub-class">
            <li id="view">View</li><hr>
            <li id="create">Create</li><hr>
        </div>
    </div>
    <iframe src="create.php" frameborder="0" class="frame" id="frame"></iframe>
    </div>
    

    <script src="../js/home.js"></script>
</body>
</html>