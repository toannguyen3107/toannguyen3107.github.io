
function handler(event){
    if (document.getElementById('res').value === '0'){
        document.getElementById('res').value = event.currentTarget.value;
    }
    else{
        document.getElementById('res').value += event.currentTarget.value;
    }            
}
