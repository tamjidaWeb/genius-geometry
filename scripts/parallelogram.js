// function calculateParallelogramArea(){
//     const baseInput = document.getElementById('parallelo-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     console.log(base);


//     //height

//     const heightInput = document.getElementById('parallelogram-height');
//     const heightText = heightInput.value;
//     const height = parseFloat(heightText);
//     console.log(height);


//     const area = base * height;
//     console.log('parallelogram area is', area);

//     //
//     const paralleloSpan = document.getElementById('parallelo-span');
//     paralleloSpan.innerText = area;

// const base = getParalellogramBase();
// console.log(base);
// }


// function getParalellogramBase(){
//     const baseInput = document.getElementById('parallelo-base');
//         const baseText = baseInput.value;
//         const base = parseFloat(baseText);
//         return base;
        
// }

function calculateParallelogramArea(){
    const base = getInputValueById('parallelo-base');
    // console.log('base value',base);

    const height = getInputValueById('parallelogram-height');
    // console.log(height);
    const area = base * height;
    console.log('parallelogram area is', area);

    setInnerTextById('parallelo-span', area);

}


function getInputValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue)
    return inputValue;
}
 

function setInnerTextById (elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

















