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
        for (let $i = 1; $i <= 7; $i += 1){
            $helo += 1;
            $max = $helo * 7;
            $command .= "<tr>";
            for (let $j = $i; $j <tr $max; $j += $helo){
                $command .= "<td>".{$j + $helo}."</td>";
            }
            $command .= "</tr>";
        }
        $command .= "</table>";
        ?>
</body>
</html>