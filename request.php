<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
// connection to database

$servername = "localhost:3306";
$username = "root"; 
$password = "afo@@1234M#4"; 
$dbname = "examhall_db";


$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//login();
    $state = $_REQUEST['opr'];
// switching request case

    switch($state){
        case 'Loginx':
            login();
            break;
        case 'loadTimeTable1':
            load_exam1();
            break;
        case 'loadTimeTable3':
            load_exam2();
            break;
        case 'loadTimeTable4':
            load_exam3();
            break;
        case 'loadTimeTable2':
            load_class1();
            break;
        case 'loadall':
            load_all();
            break;
        case 'updatexam':
            Update_exam();
            break;
        
    }
// login in function
    function login(){
        $username =  $_REQUEST['username'];
        $password = $_REQUEST['password'];
        $total = "mike";
        $sql = "SELECT  * FROM logintablex WHERE username='" .$username . "' and password = '". $password."'";
        global $conn;
        $result = mysqli_query($conn,$sql);
        $row  = mysqli_fetch_array($result);
        
        $_SESSION["username"] = $row['username'];
        $_SESSION["password"] = $row['password'];
        $_SESSION["Accessability"] = $row['Accessability'];
        $_SESSION["usertype"] = $row['usertype'];
        
        $count=mysqli_num_rows($result);
        if( $_SESSION["username"] == $username  && $_SESSION["password"] == $password) {
            
         echo $_SESSION["usertype"];
        
        // header("Location: profile.php");

         
        }

        else{
            echo  " username or password is not valid";
        }
        $conn->close();
        }

        function load_exam1(){
            // $sql="SELECT * FROM `examtimetable`";            
            // global $conn;
            // $result = mysqli_query($conn,$sql);
            // $row  = mysqli_fetch_array($result);

            // while($row = mysqli_fetch_array($result)) {
            //     echo "<tr>";
            //     // echo "<td>" . $row['Sno'] . "</td>";
            //     echo "<td>" . $row['Daytime'] . "</td>";
            //     echo "<td>" . $row['FirstPeriod'] . "</td>";
            //     echo "<td>" . $row['SecondPeriod'] . "</td>";
            //     echo "</tr>"; 
            // }
            // $conn->close();
            global $conn;
            $sql = "SELECT * FROM examtimetable";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    // echo "id: " . $row["Daytime"]. " - Name: " . $row["FirstPeriod"]. " " . $row["SecondPeriod"]. "<br>";
                    echo "<tr>";
                // echo "<td>" . $row['Sno'] . "</td>";
                    echo "<td>" . $row['Daytime'] . "</td>";
                    echo "<td>" . $row['FirstPeriod'] . "</td>";
                    echo "<td>" . $row['SecondPeriod'] . "</td>";
                    echo "<td>" . $row['Venue'] . "</td>";
                    echo "</tr>"; 
                }
            } else {
                echo "0 results";
            }
            $conn->close();

            }

            function load_exam2(){
                global $conn;
                $sql = "SELECT * FROM examtimetable";
                $result = $conn->query($sql);
    
                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        // echo "id: " . $row["Daytime"]. " - Name: " . $row["FirstPeriod"]. " " . $row["SecondPeriod"]. "<br>";
                        echo "<tr>";
                    // echo "<td>" . $row['Sno'] . "</td>";
                        echo "<td>" . $row['Daytime'] . "</td>";
                        echo "<td>" . $row['FirstPeriod'] . "</td>";
                        echo "<td>" . $row['SecondPeriod'] . "</td>";
                        echo "<td>" . $row['Venue'] . "</td>";
                        echo "<td>" . $row['Supervisor'] . "</td>";
                        echo "</tr>"; 
                    }
                } else {
                    echo "0 results";
                }
                $conn->close();
    
                }

                function load_exam3(){
                    global $conn;
                    $sql = "SELECT * FROM examtimetable";
                    $result = $conn->query($sql);
        
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            // echo "id: " . $row["Daytime"]. " - Name: " . $row["FirstPeriod"]. " " . $row["SecondPeriod"]. "<br>";
                            echo "<tr>";
                            echo "<td>" . $row['a'] . "</td>";
                            echo "<td>" . $row['Daytime'] . "</td>";
                            echo "<td>" . $row['FirstPeriod'] . "</td>";
                            echo "<td>" . $row['SecondPeriod'] . "</td>";
                            echo "<td>" . $row['Venue'] . "</td>";
                            echo "<td>" . $row['Supervisor'] . "</td>";
                            echo "</tr>"; 
                        }
                    } else {
                        echo "0 results";
                    }
                    $conn->close();
        
                    }

        function load_class1(){
            global $conn;
            $sql = "SELECT * FROM computer_science_class";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    // echo "id: " . $row["Daytime"]. " - Name: " . $row["FirstPeriod"]. " " . $row["SecondPeriod"]. "<br>";
                    echo "<tr>";
                // echo "<td>" . $row['Sno'] . "</td>";
                    echo "<td>" . $row['Daytime'] . "</td>";
                    echo "<td>" . $row['FirstPeriod'] . "</td>";
                    echo "<td>" . $row['SecondPeriod'] . "</td>";
                    echo "<td>" . $row['ThirdPeriod'] . "</td>";
                    echo "<td>" . $row['FourthPeriod'] . "</td>";
                    echo "</tr>"; 
                }
            } else {
                echo "0 results";
            }
            $conn->close();
        }

        function load_all(){
            global $conn;
            $sql = "SELECT * FROM examtimetable";
            $result = $conn->query($sql);
            $json_array = array();
            if ($result->num_rows > 0) {
                // output data of each row
               
                while($row = $result->fetch_assoc()) {
                    // echo "id: " . $row["Daytime"]. " - Name: " . $row["FirstPeriod"]. " " . $row["SecondPeriod"]. "<br>";
                    $json_array[]=$row;
                // echo "<td>" . $row['Sno'] . "</td>";
                    // echo "{"."""daytime""".": """ . $row["Daytime"].""",";
                    // echo """FirstPeriod""".":""" .$row["FirstPeriod"].""",";
                    // echo """SecondPeriod""".":""" .$row["SecondPeriod"];
                    // echo """},";
                        // echoecho '"FirstPeriod":' . ""$row['FirstPeriod']"";
                    // echo '"SecondPeriod"' . ""$row['SecondPeriod']"}" ;
                     
                }
                // echo "]";
                echo json_encode($json_array);
            } else {
                echo "0 results";
            }
            $conn->close();
        }

        function Update_exam(){
            $daytimex =  $_REQUEST['daytimex'];
            $firstperiodx = $_REQUEST['firstperiodx'];
            $secondperiodx =  $_REQUEST['secondperiodx'];
            $venuex = $_REQUEST['venuex'];
            $supervisorx = $_REQUEST['supervisorx'];
            global $conn;
        
            $result = $conn->query($sql);
        
            
            $sql = "INSERT INTO examtimetable (Daytime, FirstPeriod, SecondPeriod, Venue, Supervisor)
            VALUES ('$daytimex','$firstperiodx','$secondperiodx ', '$venuex', '$supervisorx')";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();
        }
    ?> 


</body>
</html>