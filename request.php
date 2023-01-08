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

$servername = "localhost:3307";
$username = "root"; 
$password = ""; 
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
        
        $count=mysqli_num_rows($result);
        if( $_SESSION["username"] == $username  && $_SESSION["password"] == $password) {
            
         echo $_SESSION["Accessability"];
        
        // header("Location: profile.php");

         
        }

        else{
            echo  " username or password is not valid";
        }
        $conn->close();
        }

       
    ?>

</body>
</html>