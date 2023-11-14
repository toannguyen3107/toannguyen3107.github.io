<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <?php 
        function checkFirstName() {
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                if (isset($_POST['fname'])) {
                    $fname = $_POST['fname'];
                    $len = strlen($fname);
                    $mess = '';
        
                    if ($len < 2 || $len > 30) {
                        $mess = "<div class=\"text-danger class form-text\" id=\"fnameHelp\">The length of the name must be greater than 2 and less than 30!</div>";
                    }else{
                        $regex = "/^[a-zA-Z]+[' -]{0,1}[a-zA-Z]+/";
                        if (!preg_match($regex, $fname)) {
                            $mess = "<div class=\"text-danger class form-text\" id=\"fnameHelp\">Error</div>";
                        }
                    }
        
                    
        
                    if ($mess !== '') {
                        echo $mess;
                    }
                }
            }
        }
        
    ?>

    <div class="mt-2 mx-auto d-flex flex-column align-items-center justify-content-center w-50 rounded-5 pb-3"
        style="border: 2px solid black; background-color: #eaeaea;">
        <h3 class="ms-3 mt-2" style="font-weight: 600;"><i>Sign Up Account</i></h3>
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" name="signup" class="ms-3" id="signup" method="post">
            <!-- firstname -->
            <div class="form-floating ">
                <input type="text" class="form-control" id="fname" placeholder="Robbert" name="fname" <?php if(isset($_POST['fname'])){
                    echo 'aria-describedby="fnameHelp"';
                }
                ?>>
                <label for="fname">First Name</label>
                <?php 
                    checkFirstName();
                ?>
            </div>
            <!-- lastname -->
            <div class="form-floating mt-3">
                <input type="text" class="form-control" id="lname" placeholder="John" name="lname">
                <label for="lname">Last Name</label>
            </div>
            <!-- email -->
            <div class="form-floating mt-3">
                <input type="text" class="form-control" id="email" placeholder="name@example.com" name="email">
                <label for="email">Email</label>
            </div>
            <!-- password -->
            <div class="form-floating mt-3">
                <input type="password" class="form-control" id="password" placeholder="*******" autocomplete="on" name="password">
                <label for="password">Password</label>
            </div>
            <!-- Birthday -->
            <div id="birthday">
                <label for="day">Birthday</label> <br>
                <label for="day" class="mt-2">Day</label>
                <select name="day" id="day" class="me-3 selectField">
                <?php
                    for($day= 1; $day<=31; $day ++){
                        echo "<option value=\"$day\">".$day."</option>";
                    }
                ?>
                </select>
                <label for="month">Month</label>
                <select name="month" id="month" class="me-3 selectField">
                <?php
                    $months = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
                    $len = count($months);
                    for($month = 1; $month <= 12 ; $month++){
                        echo "<option value=\"$month\">".$months[$month-1]."</option>";
                    }
                ?>
                </select>
                <label for="year">Year</label>
                <select name="year" id="year" class="me-3 selectField">
                    <?php
                    $currDate = getdate();
                    $year = $currDate['year'];
                    for($y = $year; $y > 1900; $y--){
                        echo "<option value=\"$y\">".$y."</option>";
                    }
                    ?>
                </select>
            </div>


            <!-- Gender -->
            <div class="form-floating mt-3">
                <select name="gender" class="form-select" id="gender" aria-label="Floating label select example">
                    <option selected value="default">Open this select menu</option>
                    <option value="male">Male</option>
                    <option value="fale">Female</option>
                    <option value="other">Other</option>
                </select>
                <label for="gender">Gender</label>
            </div>
            <!-- Country -->
            <div class="form-floating mt-3">
                <select name="country" class="form-select" id="country" aria-label="Floating label select example">
                    <option selected value="default">Open this select menu</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="australia">Australia</option>
                    <option value="us">United States</option>
                    <option value="india">India</option>
                    <option value="other">Other</option>
                </select>
                <label for="country">Country</label>
            </div>
            <!-- About -->
            <div class="form-floating mt-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="about" style="height: 100px"
                    maxlength="10000"></textarea>
                <label for="about">Comments</label>
            </div>
            <div class="mt-3">
                <input class="btn btn-primary me-4" type="submit" id="submit" value="Submit">
                <input class="btn btn-danger" id="reset" type="button" value="Reset">
            </div>
        </form>
    </div>

</body>

</html>