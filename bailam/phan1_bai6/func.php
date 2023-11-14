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
                    $regex = "/^[a-zA-Z]+[' -]?[a-zA-Z]*$/";
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

<?php
function checkLastName() {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['lname'])) {
            $lname = $_POST['lname'];
            $len = strlen($lname);
            $mess = '';
    
            if ($len < 2 || $len > 30) {
                $mess = "<div class=\"text-danger class form-text\" id=\"lnameHelp\">The length of the name must be greater than 2 and less than 30!</div>";
            }else{
                $regex = "/^[a-zA-Z]+[' -]?[a-zA-Z]*$/";
                if (!preg_match($regex, $lname)) {
                    $mess = "<div class=\"text-danger class form-text\" id=\"lnameHelp\">Error</div>";
                }
            }
            if ($mess !== '') {
                    echo $mess;
                }
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
                    $mess = "<div class=\"text-danger class form-text\" id=\"emailHelp\">This field can't blank!</div>";
                }else{
                    $regex = "/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/";
                    if (!preg_match($regex, $email)){
                        $mess = "<div class=\"text-danger class form-text\" id=\"emailHelp\">Error: Invalid email address syntax. Please enter a valid email address like <i>&lt;sth&gt;@&lt;sth&gt;.&lt;sth&gt;</i></div>";
                    }
                }

                if ($mess !== '') {
                        echo $mess;
                    }
                }
        }
    }
?>
      