var input_cal = document.getElementById("input_cal");
function display(num) {
    input_cal.value += num;
}

function calculate() {
    try {
        input_cal.value = eval(input_cal.value);
    } catch (err) {
        alert("Invalid")
    }
}
function del() {
    input_cal.value = input_cal.value.slice(0, -1);
}
function clear2(){
    input_cal.value = "";
}