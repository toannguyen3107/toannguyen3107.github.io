<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $param1 = 100;
        function handler($params){
            $params %= 5;
            switch ($params) {
                case 0:
                    echo "Hello";
                    break;
                case 1:
                    echo "How are you?";
                    break;
                case 2:
                    echo "I'm doing well, thank you";
                    break;
                case 3:
                    echo "See you later";
                    break;
                case 4:
                    echo "Good-bye";
                    break;
            }
        }
    ?>  

    <h3>TH1: module = 0</h3><span><?php handler(10)?></span>
    <h3>TH1: module = 1</h3><span><?php handler(11)?></span>
    <h3>TH1: module = 2</h3><span><?php handler(12)?></span>
    <h3>TH1: module = 3</h3><span><?php handler(13)?></span>
    <h3>TH1: module = 4</h3><span><?php handler(14)?></span>
    
</body>
</html>