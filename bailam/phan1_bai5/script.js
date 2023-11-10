function handler(e) {
    const resultInput = document.getElementById('res');
    const currentValue = resultInput.value;
    console.log(e.currentTarget.value);
    resultInput.value = currentValue === '0' ? e.target.value : currentValue + e.target.value;
}
