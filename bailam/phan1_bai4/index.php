<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <?php
        // 
        $command = "<tr>"
        $helo = 1;
        for (let $i = 1; $i <= 7; $i += 1){
            $helo += 1
            $max = $helo * 7
            for (let $j = $i; $j <$max; $j += $helo){
                $command .= "<tr>($j + $helo)</tr>";
            }
        }
        $command .= "</tr>";
        ?>
    </table>
</body>
</html>