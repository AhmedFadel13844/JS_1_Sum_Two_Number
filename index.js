let fNumber = document.getElementById("number1");

let lNumber = document.getElementById("number2");

let feedback = document.getElementById("result");

let btn = document.getElementById("btn");

let reset = document.getElementById("reset");


let box = " ";

btn.addEventListener("click", function () {
 box = Math.round(fNumber.value) + Math.round(lNumber.value);
 feedback.innerHTML = box;
})

reset.addEventListener("click", function () {
 feedback.innerHTML = " ", lNumber.innerHTML = " ", fNumber.innerHTML = " ";
})
