// Story of Gauss

// HTML Elemets
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");


// Add event Listener
calcBtn.addEventListener("click", calcSum);

// Event Function
function calcSum() {
    // Sum intergers 1 to 100
    let total = 0;

    for (let n = 1; n <= 5; n++) {
        total = total + n;
    }

    // Output the Total
    sumOut.innerHTML = total;     
}