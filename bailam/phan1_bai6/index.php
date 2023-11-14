<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./module/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <div class="mt-2 mx-auto d-flex flex-column align-items-center justify-content-center w-50 rounded-5 pb-3"
        style="border: 2px solid black; background-color: #eaeaea;">
        <h3 class="ms-3 mt-2" style="font-weight: 600;"><i>Sign Up Account</i></h3>
        <form action="#" name="signup" class="ms-3" id="signup">
            <!-- firstname -->
            <div class="form-floating ">
                <input type="text" class="form-control" id="fname" placeholder="Robbert">
                <label for="fname">First Name</label>
            </div>
            <!-- lastname -->
            <div class="form-floating mt-3">
                <input type="text" class="form-control" id="lname" placeholder="John">
                <label for="lname">Last Name</label>
            </div>
            <!-- email -->
            <div class="form-floating mt-3">
                <input type="text" class="form-control" id="email" placeholder="name@example.com">
                <label for="email">Email</label>
            </div>
            <!-- password -->
            <div class="form-floating mt-3">
                <input type="password" class="form-control" id="password" placeholder="*******" autocomplete="on">
                <label for="password">Password</label>
            </div>
            <!-- Birthday -->
            <div id="birthday">
                <label for="day">Birthday</label> <br>
                <label for="day" class="mt-2">Day</label>
                <select name="day" id="day" class="me-3 selectField"></select>
                <label for="month">Month</label>
                <select name="month" id="month" class="me-3 selectField"></select>
                <label for="year">Year</label>
                <select name="year" id="year" class="me-3 selectField"></select>
            </div>


            <!-- Gender -->
            <div class="form-floating mt-3">
                <select class="form-select" id="gender" aria-label="Floating label select example">
                    <option selected value="default">Open this select menu</option>
                    <option value="male">Male</option>
                    <option value="fale">Female</option>
                    <option value="other">Other</option>
                </select>
                <label for="gender">Gender</label>
            </div>
            <!-- Country -->
            <div class="form-floating mt-3">
                <select class="form-select" id="country" aria-label="Floating label select example">
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
                <input class="btn btn-primary me-4" type="button" id="submit" value="Submit">
                <input class="btn btn-danger" id="reset" type="button" value="Reset">
            </div>
        </form>
    </div>

    <script src="script.js"></script>
    <script>
        let daySelect = document.getElementById('day');
        for (let day = 1; day <= 31; day++) {
            const opt = document.createElement('option');
            opt.value = day;
            opt.text = day;
            daySelect.appendChild(opt);
        }

        const monthSelect = document.getElementById('month');
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        for (let month = 0; month < 12; month++) {
            const opt = document.createElement('option');
            opt.value = month+1;
            opt.text = months[month];
            monthSelect.appendChild(opt);
        }

        let yearSelect = document.getElementById('year');
        let currYear = new Date().getFullYear();
        for (let year = currYear; year >= 1900; year--) {
            const opt = document.createElement('option');
            opt.value = year;
            opt.text = year;
            yearSelect.appendChild(opt);
        }

    </script>
</body>

</html>