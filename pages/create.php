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
<!--             
            <h2>Create personal timetable</h2>
            <fieldset>
                <legend>Timetable details</legend>
                <div class="inner-content time">
                    <div>8:00 - 9:00</div>
                    <div>9:00 - 10:00</div>
                    <div>10:00 - 11:00</div>
                    <div>12:00 - 1:00</div>
                </div> -->
                <div class="inner-content">
                    <!-- <div><p>Mon</p></div>
                    <div>
                        <select name="mon1" class="user-input" id="mon1">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="monven1" class="user-input" id="monven1">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="monsup1" class="user-input" id="monsup1">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="mon2" class="user-input" id="mon2">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="monven2" class="user-input" id="monven2">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="monsup2" class="user-input" id="monsup2">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="mon3" class="user-input" id="mon3">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="monven3" class="user-input" id="monven3">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="monsup3" class="user-input" id="monsup3">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="mon4" class="user-input" id="mon4">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="monven4" class="user-input" id="monven4">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="monsup4" class="user-input" id="monsup4">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                </div>
                
                <div class="inner-content">
                    <div><p>Tue</p></div>
                    <div>
                        <select name="tue1" class="user-input" id="tue1">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="tueven1" class="user-input" id="tueven1">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="tuesup1" class="user-input" id="tuesup1">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="tue2" class="user-input" id="tue2">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="tueven2" class="user-input" id="tueven2">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="tuesup2" class="user-input" id="tuesup2">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="tue3" class="user-input" id="tue3">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="tueven3" class="user-input" id="tueven3">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="tuesup3" class="user-input" id="tuesup3">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="tue4" class="user-input" id="tue4">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="tueven4" class="user-input" id="tueven4">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="tuesup4" class="user-input" id="tuesup4">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                </div>
                
                <div class="inner-content">
                    <div><p>Wed</p></div>
                    <div>
                        <select name="wed1" class="user-input" id="wed1">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="wedven1" class="user-input" id="wedven1">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="wedsup1" class="user-input" id="wedsup1">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="wed2" class="user-input" id="wed2">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="wedven2" class="user-input" id="wedven2">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="wedsup2" class="user-input" id="wedsup2">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="wed3" class="user-input" id="wed3">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="wedven3" class="user-input" id="wedven3">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="wedsup3" class="user-input" id="wedsup3">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="wed4" class="user-input" id="wed4">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="wedven4" class="user-input" id="wedven4">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="wedsup4" class="user-input" id="wedsup4">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                </div>
                
                <div class="inner-content">
                    <div><p>Thur</p></div>
                    <div>
                        <select name="thur1" class="user-input" id="thur1">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="thurven1" class="user-input" id="thurven1">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="thursup1" class="user-input" id="thursup1">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="thur2" class="user-input" id="thur2">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="thurven2" class="user-input" id="thurven2">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="thursup2" class="user-input" id="thursup2">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="thur3" class="user-input" id="thur3">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="thurven3" class="user-input" id="thurven3">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="thursup3" class="user-input" id="thursup3">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>
                    <div>
                        <select name="thur4" class="user-input" id="thur4">
                            <option value="">-- Code --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="thurven4" class="user-input" id="thurven4">
                            <option value="">-- Venue --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                        <select name="thursup4" class="user-input" id="thursup4">
                            <option value="">-- Supervisor --</option>
                            <option value="COM102">COM102</option>
                            <option value="USA">USA</option>
                            <option value="London">London</option>
                        </select>
                    </div>

                </div> -->

                <div class="inner-content">
                    <div></div>
                    <div>
                        <label for="dayx">day</label>
                        <input type="text" id="dayx"><br><br>
                        <label for="datex">date</label>
                        <input type="date" id="datex"><br><br>
                        <label for="timex">time</label>
                        <input type="time" id="timex"><br><br>
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
                </div>


            </fieldset>

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