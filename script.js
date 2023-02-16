function randomInteger( min, max ) {
    return Math.floor( Math.random() * (max-min) + min );
}


function generateHexColor() {

    let hexCode = '#';
    for (let i = 0; i < 6; i++){
        hexCode += hexCharacters[randomInteger(0, hexCharacters.length)]
    }

    return hexCode;
}


function updateBgColor( color ) {
    document.body.style.backgroundColor = color;
}


function updateText( color ) {
    span.textContent = color;
}


function newColor() {
    const color = generateHexColor();
    updateBgColor( color );
    updateText(color);
}


const span = document.querySelector('span');
const button = document.querySelector('button');

button.addEventListener('click', newColor);

const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


window.onload = () => {
    newColor();
}