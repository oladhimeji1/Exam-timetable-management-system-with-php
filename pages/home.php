<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timetable management system | Dashboard</title>
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
       
        <div class="cont">
            
            <div class="sidebar">

                <img src="../img/kaduna-poly.jpg" alt="">
                <p class="sidebar-item" id="viewrec">
                    <i class="fa fa-table"></i> 
                    Exam Timetable
                </p>
                <p id="view" class="sidebar-item">
                <i class="fa fa-table"></i> Lecture Timetable
                </p>
                <p id="create" class="sidebar-item">
                    <i class="fa fa-edit"></i>
                    Create
                </p>
                <!-- <div class="sub-menue" id="sub-class">
                    
                    <li id="view">Lecture Timetable</li>
                    <li id="create"><i class="fa fa-edit"></i> Create Exam Timetable</li>
                </div> -->
            </div>
            <nav>
                <ul>
                    <!-- <img src="img/Mike.jpg" alt="School logo" class="school-logo"> -->
                    <h2>Welcome, <span id="username"></span></h2>
                    <h2></h2>
                    
                    <h2>Examination timetable mannagemnt system</h2>
                    <button id="truc" style="display: none;" title="Delete exam timetable in the database"><i class="fa fa-trash"></i></button>
                    <button id="logout" title="Logout"><i class="fa fa-sign-out"></i></button>
                </ul>
            </nav>
        </div>
        <iframe src="table.php" frameborder="0" class="frame" id="frame"></iframe>
    </div>
    

    <script src="../js/home.js"></script>
    <script src="../js/login.js"></script>

</body>
</html>