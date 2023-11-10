
function handler(e){
    if (document.getElementById('res').value === '0'){
        document.getElementById('res').value = e.currentTarget.value;
    }
    else{
        document.getElementById('res').value += e.currentTarget.value;
    }            
}
