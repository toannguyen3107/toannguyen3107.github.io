<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phan 1 - bai 5</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        function handler(e) {
    const resultInput = document.getElementById('res');
    const currentValue = resultInput.value;
    console.log(e.currentTarget.value);
    if(e.target.value == "AC"){
        resultInput.value = '0';
    }else{
        resultInput.value = currentValue === '0' ? e.target.value : currentValue + e.target.value;
    }
    
}
    </script>
</head>
<body>
    <?php
        $result = 0;
        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            $x = $_POST['ret'];
            $result = eval('return ($x);');
        }
    ?>
<form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post" class="w-10/12 md:w-5/12 flex flex-row flex-wrap bg-green-400 p-3 align-center border-2 border-4 border-indigo-500/100 rounded-lg mx-auto justify-center">
        <input type="text" class="bg-slate-100 w-full p-2 border-2 border-black rounded-xl mb-3" disabled id="res" value="<?php echo $result;?>" name="ret">
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onclick="handler(event);" value="+">+</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onclick="handler(event);" value="-">-</button>
        </div>
    
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onclick="handler(event);" value="*">*</button>
        </div>
        <div class="w-3/12">
            <button type="button" class="w-10/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onclick="handler(event);" value="/">/</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="one" value="1" onclick="handler(event);">1</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="two" value="2" onclick="handler(event);">2</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="three" value="3" onclick="handler(event);">3</button>
        </div>
    
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="^" onclick="handler(event);">^</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="four" value="4"  onclick="handler(event);">4</button>
        </div>
    
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="five" value="5" onclick="handler(event);">5</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="six" value="6" onclick="handler(event);">6</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value="^-1" onclick="handler(event);">^-1</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="seven" value="7" onclick="handler(event);">7</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="eight" value="8" onclick="handler(event);">8</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="night" value="9" onclick="handler(event);">9</button>
        </div>
        <div class="w-3/12">
            <button type="button" onclick="handler(event);" value="AC" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">AC</button>
        </div>
        <div class="w-3/12">
        <button type="button" class="w-10/12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" id="seven" value="0" onclick="handler(event);">0</button>
        </div>
        
            <button type="submit" class="w-9/12 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">=</button>
        
</form>


</body>
</html>