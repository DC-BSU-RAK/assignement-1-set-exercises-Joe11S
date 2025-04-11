//calculate total cost
function calculate() {
    const cost = parseFloat(document.getElementById("cost").value) || 1.72;
    const liters = parseFloat(document.getElementById("liters").value) || 0;

    if (cost < 0 || liters < 0) {
        document.getElementById("result").innerText = "Invalid Values.";
        return
    }

    const result = cost*liters
    document.getElementById("result").innerText = result.toFixed(2);
}

//reset
function reset() {
    document.getElementById("result").innerText = "0.00";
    document.getElementById("cost").value = "0";
    document.getElementById("liters").value = "0";
}
//update every button click.
document.getElementById("calculateButton").addEventListener("click", calculate);
document.getElementById("resetButton").addEventListener("click", reset);