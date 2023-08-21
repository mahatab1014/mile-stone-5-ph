function extractNumber(inputID) {
    const inputValue = document.getElementById(inputID).value;
    const stringToNumber = parseFloat(inputValue);
    return stringToNumber;
}
function setInnerText(spanID, amount) {
    const innerText = document.getElementById(spanID);
    innerText.innerText = amount;
}

// Code from | Stack Overflow
function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
 } 

function calculate(){
    const incomeAmount = extractNumber('income');
    const foodExpenses = extractNumber('food');
    const rentExpenses = extractNumber('rent');
    const clothesExpenses = extractNumber('clothes');

    const balance = incomeAmount;
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;

    setInnerText("balance", balance);
    setInnerText("expenses", totalExpenses);

}

function saveAmount(){
    
}