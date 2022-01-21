const allclear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operator');
const digits = document.querySelectorAll('.digit');
const calscreen = document.getElementById('cal');
let usertype;
let screenVal;
let num1 = '';
let num2 = '';
let resultVal; // Montrera le résultat
let ops;
let ver = true;

allclear.addEventListener('click', function(){
    return clearAll();
})

function clearAll() {
    num1 = '';
    num2 = '';
    calscreen.innerHTML = "0";
    ver = true;
};
 

for (let i = 0; i < digits.length; i++){
    let digit = digits[i];
    digit.addEventListener('click' , function() {
        if (calscreen.innerText === '0') {
            calscreen.innerText = digit.innerText;
            usertype = calscreen.textContent;
        } else if (calscreen.innerText !== '0' && !ver) {
            calscreen.innerText = digit.innerText;
            usertype = calscreen.textContent;
            ver = true;
        } else {
            calscreen.innerText += digit.innerText;
            usertype = calscreen.textContent;
        }
    })
}

for (let i = 0; i < operators.length; i++){
    let operator = operators[i];
    operator.addEventListener('click' , function(){
        if (this.dataset.key === '=') {
            function eq() {
                num2 = usertype;
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                switch (ops) {
                    case '+' :
                        resultVal = num1 + num2;
                        break;
                    case '-':
                        resultVal = num1 - num2;
                        break;
                    case 'x':
                        resultVal = num1 * num2;
                        break;
                    case '/':
                        resultVal = num1 / num2;
                        break;
                    default:
                        resultVal = usertype;
                        break;
                }
                calscreen.innerText = resultVal;
                ver = false;
                num1 = 0;
                num2 = resultVal;
            }
            eq();
        }
        else {
            usertype = calscreen.textContent;
            function op() {
                usertype = usertype.replace(",", ".");
                num1 = usertype;
            }
            op();
            ops = operator.innerText;
            calscreen.innerText = "";
        }
    })
}