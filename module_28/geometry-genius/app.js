function valueToNumber(inputValue) {
   // Just 1 Line
   return parseFloat(document.getElementById(inputValue).value);;

   // 2 Line
   // const inputField = document.getElementById(inputValue).value;
   // return parseFloat(inputField);;

   // 3 Line
   // const inputField = document.getElementById(inputValue).value;
   // const inputValueNumber = parseFloat(inputField);
   // return inputValueNumber;
}

function setInnerText(output, formula) {
   const outputCalculation = document.getElementById(output);
   outputCalculation.innerText = formula;
   return outputCalculation;
}
// History
function addToCalculationHistory(areaType, area){
   console.log(areaType + " " + area)
   const calculationEntry = document.getElementById('calculation-entry');
   const count = calculationEntry.childElementCount;
   const para = document.createElement('p');
   para.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup>`;
   calculationEntry.appendChild(para);
}

function triangleCalculation() {
   const triangleBase = valueToNumber('triangle-base');
   const triangleHight = valueToNumber('triangle-hight');

   if (isNaN(triangleBase) || isNaN(triangleHight)) {
      alert('Try Again!!!');
      return;
   }
   const formula = 0.5 * triangleBase * triangleHight;
   setInnerText("triangle-calculation-output", formula);
   addToCalculationHistory("Triangle", formula);
};
function rectangleCalculation() {
   const rectangleWidth = valueToNumber('rectangle-w');
   const rectangleLength = valueToNumber('rectangle-l');

   const formula = rectangleWidth * rectangleLength;
   setInnerText("rectangle-calculation-output", formula);
   addToCalculationHistory("Rectangle", formula)
};
function parallelogramCalculation() {
   const parallelogramBase = valueToNumber('parallelogram-base');
   const parallelogramHight = valueToNumber('parallelogram-hight');

   const formula = parallelogramBase * parallelogramHight;
   setInnerText("parallelogram-calculation-output", formula)
   addToCalculationHistory("Parallelogram", formula);
};