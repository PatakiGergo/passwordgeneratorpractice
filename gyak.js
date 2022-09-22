let letters = ''
const upper = 'QWERTZUIOPASDFGHJKLYXCVBNM'
const special = ',.-*()=/%!+'
const numbers = '1234567890'
const abc = 'wertzuiopasdfghjklyxcvbnm'

let placeholder = document.querySelector('.generated-code')

let upperselector = document.querySelector('.gombup')
let lowerselector = document.querySelector('.gomblow')
let numberselector = document.querySelector('.gombnum')
let specialselector = document.querySelector('.gombspec')
const strength = document.querySelector('.strength')
let lengthslider = document.querySelector('.slider')
let slideroutput = document.querySelector('.slider-value')
const copybutton = document.querySelector('.copybutton')

const copying = function(){
    copytext = placeholder.textContent
    navigator.clipboard.writeText(copytext)
}

copybutton.addEventListener('click', copying)

slideroutput.innerHTML = lengthslider.value;

lengthslider.oninput = function() {
    slideroutput.innerHTML = this.value;

}

let password = [];
let strengthCalculator = 0;
upperselector.checked = true
lowerselector.checked = true

const generate = function() {
    let passwordlength = lengthslider.value


    if (upperselector.checked){
        letters +=upper;
        strengthCalculator += 1;
    }
    
    if (numberselector.checked){
        letters +=numbers;
        strengthCalculator += 1;
    }

    if(specialselector.checked) {
        letters+=special;
        strengthCalculator += 1;
    }

    if(lowerselector.checked){
        letters +=abc
        strengthCalculator += 1;
    }

    for(i = 0; i < passwordlength; i++) {
        password.push(letters[Math.floor(Math.random() * letters.length)])
    }
   placeholder.textContent = password.join('')
   password = [];
   letters= '';

   if (strengthCalculator > 3 ){
    strength.textContent = 'Strength: Strong😎'
    strengthCalculator = 0;
   } else if (strengthCalculator === 2 || strengthCalculator === 3) {
    strength.textContent = 'Strength: Medium🤠'
    strengthCalculator = 0;
   } else if (strengthCalculator <= 2 ){
    strength.textContent = 'Strength: Weak😭'
    strengthCalculator = 0;

    if(!upperselector.checked && !numberselector.checked && !specialselector.checked && !lowerselector.checked){
        strength.textContent = 'Waiting for input'
        placeholder.textContent = 'Please select inputs'
    }

   }
}

let generalas = document.querySelector('.generator').addEventListener('click', generate)


