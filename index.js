// const input = document.getElementById('result');
// const numbers = document.querySelectorAll('.nums');
// const operators = document.querySelectorAll('.ops');
// const equalButton = document.querySelector('.equal');
// const clearButton = document.querySelector('.delete');
// let operatorVal = ''
// function updateDisplay(value) {
//     input.value += value;
//     // console.log(value);
// }
// function NumberClick(event) {
//     updateDisplay(event.target.value);
//     // console.log( event.target);
// }
// for(let i of numbers){
//     i.addEventListener('click', NumberClick)
// }
// function operatorClick(event){
//     if (event.target.value === '=') {
//         return;
//     }
//     operatorVal = event.target.value
//     updateDisplay(event.target.value)
//     // console.log(event.target);
// }
// for( let i of operators){
//     i.addEventListener('click',operatorClick)
// }
// function clearDisplay() {
//     input.value = input.value.slice(0, -1);
// }
// function equal (result) {
//     input.value = result
// }
// function seperated (event) {
// }
// clearButton.addEventListener('click', clearDisplay);
// function calc(){
//     let newInpValArr = input.value.split(operatorVal)
//     let num1 = newInpValArr[0]
//     let operant  = operatorVal
//     let num2 = newInpValArr[1]
//     let result
//     console.log(operant);
//     switch (operant) {
//         case '+':
//             result = Number(num1) + Number(num2)
//             equal(result)
//             break;
//         case '-':
//             result = Number(num1) - Number(num2)
//             equal(result)
//             break;
//         case '*':
//             result =Number(num1) * Number(num2)
//             equal(result)
//             break;
//         case '/':
//             if (num2 !== 0) {
//                 result = Number(num1) / Number(num2)
//                 equal(result)
//             }else{
//                 result = "not divided"
//             }
//             break;
//     }
// }
// equalButton.addEventListener('click',calc)







const result = document.getElementById('result');
const numbers = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.ops');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.delete');


function updateDisplay(value) {
    result.value += value;
}
function NumberClick(event) {
    updateDisplay(event.target.value);
    
}
for (let i of numbers) {
    i.addEventListener('click', NumberClick);
}

function OperatorClick(event) {
    updateDisplay(event.target.value);
}
function Calculate() {
    result.value = eval(result.value);
}
function Clear() {
    result.value = result.value.slice(0, -1);
}

for (let operator of operators) {
    operator.addEventListener('click', function(event) {
        if (event.target.value === '=') {
            Calculate();
        } else if (event.target.value === 'C') {
            Clear();
        } else {
            updateDisplay(event.target.value);
        }
    });
}
equalButton.addEventListener('click', Calculate);
clearButton.addEventListener('click', Clear);





