function ellipseArea(){
    const majorRadius = getInputValueById('ellips-major');
    const minorRadius = getInputValueById('ellips-minor');

    const area = Math.PI * majorRadius * minorRadius;
    console.log('ellips area is', area);
    setInnerTextBy('ellips-span',area);
    
}

// function getInputById(inputId){
//     const inputField = document.getElementById(inputId);
//     const inputText= inputField.value;
//     const inputValue =parseFloat(inputText);
//     return inputValue;
// }

function setInnerTextBy(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}