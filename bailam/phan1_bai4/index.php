<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <?php
        // 
        $command = "<table>";
        // declared val for increment
        $helo = 1;
        for ($i = 1; $i <= 7; $i += 1){
            $max = $helo * 7;
            $command .= "<tr>";
            for ($j = $i; $j < $max; $j += $helo){
                $command .= "<td>".$j."</td>";
            }
            $helo += 1;
            $command .= "</tr>";
        }
        $command .= "</table>";
        ?>
        <?php
        echo $command;
        ?>
</body>
</html>