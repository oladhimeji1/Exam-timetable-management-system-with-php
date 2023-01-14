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
                        <label for="daytime">Day / Date</label><br>
                        <input type="text" class="user-input" placeholder="E.g. Monday / 23-01-2023" id="daytime"><br><br>
                        <label for="venue">Venue</label> <br>
                        <input type="text" class="user-input" placeholder="Enter venue" id="venue"><br><br>
                        
                    </div>
                    <div>
                    <label for="firstperiod">First Period</label> <br>
                        <input type="text" class="user-input" placeholder="Enter cours code for first period" id="firstperiod"><br><br>
                        <label for="supervisor">Supervisor</label> <br>
                        <input type="text" class="user-input" placeholder="Enter supervisor name" id="supervisor"><br><br>
                    </div>
                    <div>
                        <label for="secondperiod">Second Period</label> <br>
                        <input type="text" class="user-input" placeholder="Enter cours code for second period" id="secondperiod"><br><br><br>
                        
                        <button id="btn-next" class="btn">Submit</button>
                    </div>

<<<<<<< HEAD
=======
                </div> -->

                <div class="inner-content">
                    <div></div>
                    <div>
                        <label for="dayx">day</label>
                        <input type="text" id="dayx"><br><br>
                        <label for="datex">date</label>
                        <input type="date" id="datex"><br><br>
                        <label for="timex">time</label>
                        <input type="text" id="timex"><br><br>
                        <label for="course">course</label>
                        <input type="text" id="course"><br><br>
                        <label for="venue">venue</label>
                        <input type="text" id="venue"><br><br>
                        <label for="supervisor">supervisor</label>
                        <input type="text" id="supervisor">
                    </div>
                    <!-- <div>
                        <select name="fri2" class="user-input" id="fri2">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="friven2" class="user-input" id="friven2">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="frisup2" class="user-input" id="frisup2">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="fri3" class="user-input" id="fri3">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="friven3" class="user-input" id="friven3">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="frisup3" class="user-input" id="frisup3">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="fri4" class="user-input" id="fri4">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="friven4" class="user-input" id="friven4">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="frisup4" class="user-input" id="frisup4">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div> -->
>>>>>>> 106bbca12ffe966d0c6786214370974b76c1c5aa
                </div>

            <!-- <button id="btn-next" class="btn btn-next">Submit</button> -->
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