const billInput = document.querySelector(" .bill-input");
const peopleInput = document.querySelector('.people-input');
const custom = document.querySelector(".tip-custom")
const tipPerPerson = document.getElementById('tip-amount');
const totalpPerPerson = document.getElementById('total-amount');
const tips = document.querySelectorAll('.tips');
const restBtn = document.querySelector(".reset")

billInput.value = "0.0"
peopleInput.value = "1"


billInput.addEventListener('input',billInputFun);
peopleInput.addEventListener('input',peopleInputFun);

let bill = 0.0;
let tipValue = 0.10;
let people = 1;

function billInputFun(){
    bill = parseInt(billInput.value);
    calculate();
}
function peopleInputFun(){
    people = parseInt(peopleInput.value);
    const zero = document.getElementById('zero');
    const inputBorder = document.getElementById(' peopleInput');
    zero.style.display = 'none'
    inputBorder.style.outlineColor = 'hsl(189, 41%, 97%)'
    if (people === 0 ){
        inputBorder.style.outlineColor ='red' 
        zero.style.display = 'block'
    }
    calculate();
}

tips.forEach(function(tip) {
    tip.addEventListener('click',handalClick)
    
});
function handalClick(e){
    tips.forEach(function(tip) {
        if (e.target.innerHTML == tip.innerHTML){
            tipValue =parseFloat(tip.innerHTML) / 100
        }
    })
    calculate();
}
function calculate(){
    if (people >= 1){
        let tipAmount = (bill * tipValue)/people;
        let total = (tipAmount + bill)/people;
        tipPerPerson.innerHTML = `$ ${tipAmount.toFixed(2)}`
        totalpPerPerson.innerHTML = `$ ${total.toFixed(2)}`
    }
}
custom.addEventListener("input",customFun);
function customFun(){
    tipValue = parseFloat(custom.value / 100);
    calculate();
}
restBtn.addEventListener("click",reset);
function reset(){
    billInput.value = 0
    peopleInput.value = 1
}