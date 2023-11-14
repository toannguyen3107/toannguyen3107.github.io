<?php
    function checkFirstName() {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (isset($_POST['fname'])) {
                $fname = $_POST['fname'];
                $len = strlen($fname);
                $mess = '';
        
                if ($len < 2 || $len > 30) {
                    $mess = "<div class=\"text-danger  form-text\" id=\"fnameHelp\">The length of the name must be greater than 2 and less than 30!</div>";
                }else{
                    $regex = "/^[a-zA-Z]+[' -]?[a-zA-Z]*$/";
                    if (!preg_match($regex, $fname)) {
                        $mess = "<div class=\"text-danger form-text\" id=\"fnameHelp\">Error</div>";
                    }
                }
                if($mess !== '') {
                        echo $mess;
                        return false;
                }
                return true;
            }
        }
    }
?>

<?php
function checkLastName() {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['lname'])) {
            $lname = $_POST['lname'];
            $len = strlen($lname);
            $mess = '';
    
            if ($len < 2 || $len > 30) {
                $mess = "<div class=\"text-danger form-text\" id=\"lnameHelp\">The length of the name must be greater than 2 and less than 30!</div>";
            }else{
                $regex = "/^[a-zA-Z]+[' -]?[a-zA-Z]*$/";
                if (!preg_match($regex, $lname)) {
                    $mess = "<div class=\"text-danger form-text\" id=\"lnameHelp\">Error</div>";
                }
            }
            if ($mess !== '') {
                    echo $mess;
                    return false;
            }
        return true;
        }
    }
        
}
?>

<?php 
    function checkEmail(){
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (isset($_POST['email'])) {
                $email = $_POST['email'];
                $len = strlen($email);
                $mess = '';
        
                if($len == 0){
                    $mess = "<div class=\"text-danger form-text\" id=\"emailHelp\">This field can't blank!</div>";
                }else{
                    $regex = "/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/";
                    if (!preg_match($regex, $email)){
                        $mess = "<div class=\"text-danger form-text\" id=\"emailHelp\">Error: Invalid email address syntax. Please enter a valid email address like <i>&lt;sth&gt;@&lt;sth&gt;.&lt;sth&gt;</i></div>";
                    }
                }

                if ($mess !== '') {
                        echo $mess;
                        return false;
                    }
                return true;
            }
        }
    }
?>
<?php
    function checkPassword(){
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (isset($_POST['password'])) {
                $password = $_POST['password'];
                $len = strlen($password);
                $mess = '';
        
                if ($len < 2 || $len > 30) {
                    $mess = "<div class=\"text-danger form-text\" id=\"passwordHelp\">The length of the name must be greater than 2 and less than 30!</div>";
                }
                if ($mess !== '') {
                        echo $mess;
                        return false;
                }
                return true;
            }
        }
    }
?>
<?php
    function checkGender(){
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (isset($_POST['gender'])) {
                $gender = $_POST['gender'];
                $len = strlen($gender);
                $mess = '';
        
                if($gender === 'default'){
                    $mess = "<div class=\"text-danger form-text\" id=\"genderHelp\">You need to select your gender!</div>";
                }
                if ($mess !== '') {
                        echo $mess;
                        return false;
                    }
                return true;
                }
            }
    }

    function checkCountry(){
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (isset($_POST['country'])) {
                $country = $_POST['country'];
                $len = strlen($country);
                $mess = '';
        
                if($country === 'default'){
                    $mess = "<div class=\"text-danger form-text\" id=\"countryHelp\">You need to select your Country!</div>";
                }
                if ($mess !== '') {
                        echo $mess;
                        return false;
                }
                return true;
                }
            }
        }
?>