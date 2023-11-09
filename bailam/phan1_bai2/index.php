<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <?php
    $param1 = 100;
    $test = $param1 % 5;
    function handler($params){
        case 0:
            echo "Hello";
            break;
        case 1:
            echo "How are you?"
            break;
        case 2:
            echo "I'm doing well, thank you";
            break;
        case 3:
            echo "See you later";
            break;
        case 4:
            echo "Good-bye"
            break;
    }
    handler($test);
    ?>

</body>
</html>