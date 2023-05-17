function createDiv(width, height, text){
    const newDiv = document.createElement('div');
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.textContent = text;

    document.getElementById('container').appendChild(newDiv);
}