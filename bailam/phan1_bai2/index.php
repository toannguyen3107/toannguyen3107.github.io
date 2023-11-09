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

    <h3>TH1: module = 0</h3><p><?php handler(10)?></p>
    <h3>TH2: module = 1</h3><p><?php handler(11)?></p>
    <h3>TH3: module = 2</h3><p><?php handler(12)?></p>
    <h3>TH4: module = 3</h3><p><?php handler(13)?></p>
    <h3>TH5: module = 4</h3><p><?php handler(14)?></p>

</body>
</html>