function calculatePentagonArea(){
    // console.log('penthagon')

    const perimeter = getInputValueById('pen');
    const apothem = getInputValueById('apo');
    const area = 0.5* perimeter * apothem;
    setInnerText('pentagon-span',area)

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerText (elementId, area ){
    const element = document.getElementById(elementId);
    element.innerText = area;
}