<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        for($i = 1; $i <=100; $i += 2){
            echo "$i\t"
        }
        $i = 0;
        echo "<hr>\n<h1>Using While command!</h1>";
        while($i <= 100){
            if($i % 2 != 0 ){
                echo $i;
            }
            $i += 1;
        }
    ?>
</body>
</html>