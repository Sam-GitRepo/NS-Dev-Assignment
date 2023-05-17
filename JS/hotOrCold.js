function displayRandomNumber(){
    let randomNum = Math.round(Math.random()* 40 - 20);
    document.getElementById('num').textContent = randomNum
}

