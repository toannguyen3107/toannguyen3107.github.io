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
        // 
        $command = '<table class="border-collapse border border-slate-600 m-auto">';
        // declared val for increment
        $helo = 1;
        for ($i = 1; $i <= 7; $i += 1){
            $max = $helo * 7;
            $command .= '<tr class="text-center">';
            for ($j = $i; $j <= $max; $j += $helo){
                $command .= '<td class="bg-amber-400 p-1 border border-slate-600">'.$j."</td>";
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