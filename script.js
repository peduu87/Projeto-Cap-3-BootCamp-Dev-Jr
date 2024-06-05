//#region JQuery Mask

$("#phone").mask("(99) 9999-99999");

//#endregion



//#region Counter

const minusButtons = document.querySelectorAll(".minus-button");
const plusButtons = document.querySelectorAll(".plus-button");

function displayLimit (min, max) {
    var min = min
    var max = max
}

for (const button of minusButtons) {
    button.addEventListener("click", (event) => {

        const input = event.target.nextElementSibling;
    
        if (input.value <= 0) return;

        input.value--;
        
        outputUpdate(input.value);
        
    });
}

for (const button of plusButtons) {
   button.addEventListener("click", (event) => {

        const input = event.target.previousElementSibling;

        input.value++;
    
        outputUpdate(input.value);

    });
}

//#endregion



function outputUpdate(input) {
    if (input > 0) {
        const countersDiv = document.querySelector(".counters");
        countersDiv.innerHTML += input;
        return input;
    }
}