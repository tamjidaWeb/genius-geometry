function rectangaleArea (){
    const rectangleLength = document.getElementById('rectangle-Length');
    const lengthText = rectangleLength.value;
    const length = parseFloat(lengthText)
    console.log(lengthText);

    //get width of the rectangle

    const widthInput = document.getElementById('rectangale-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);


    //calculate rectangle area 

    const area = length * width;
    console.log("area of rectangle", area);

    //display rectangle area

    const rectangleAreaSapn = document.getElementById('rectangle-span');
    rectangleAreaSapn.innerText = area;
}