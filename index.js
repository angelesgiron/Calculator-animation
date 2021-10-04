// variable
let form = "formExample"
let tagNameResult = "resultValue"
let operator = "Suma"
var secondValue;
let jsonFields = { fieldVal1: 'firstValue', fieldVal2: 'secondValue' }
const property = "value"
//End


//Function 
const getProperty = (formName, attrName, property) => document[formName][attrName][property]
const setProperty = (formName, attrName, property, result) => document[formName][attrName][property] = result


const arimeticOperation = (formName, tagName, firstValue, secondValue, operator) => {
    document[formName][tagName].value = eval(`${firstValue} ${operator} ${secondValue}`)
}

const calculate = (e, obj = { fieldVal1: 0, fieldVal2: 0 }) => {
    let jsonForm = {
        firstVal: getProperty(form, obj.fieldVal1, property),
        secondVal: getProperty(form, obj.fieldVal2, property)
    }

    
    let text = `${jsonForm.firstVal} ${e.target.textContent} ${jsonForm.secondVal}`;
    let result =
        setProperty(form, tagNameResult, property, eval(text))
}
  // END


//Animacion
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });