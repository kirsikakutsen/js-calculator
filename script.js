document.addEventListener('DOMContentLoaded', () => {
    var firstNumberInputField = document.getElementById("firstNumberInputField");
    var secondNumberInputField = document.getElementById("secondNumberInputField");

    var additionButton = document.getElementById("additionButton");
    additionButton.onclick = function () { onAdditionClick() };

    var subtractionButton = document.getElementById("subtractionButton");
    subtractionButton.onclick = function () { onSubtractionClick() };

    var divisionButton = document.getElementById("divisionButton");
    divisionButton.onclick = function () { onDivisionClick() };

    var multiplicationButton = document.getElementById("multiplicationButton");
    multiplicationButton.onclick = function () { onMultiplicationClick() };
    

    function onAdditionClick() {
        var result = Number(firstNumberInputField.value) + Number(secondNumberInputField.value);
        alert("Answer: " + result);
    }

    function onSubtractionClick() {
        var result = Number(firstNumberInputField.value) - Number(secondNumberInputField.value);
        alert("Answer: " + result);
    }

    function onDivisionClick() {
        var secondNumber = Number(secondNumberInputField.value);

        if (secondNumber == 0) {
            alert("error")
        } else {
            var result = Number(firstNumberInputField.value) / secondNumber;
            alert("Answer: " + result);
        }
    }

    function onMultiplicationClick() {
        var result = Number(firstNumberInputField.value) * Number(secondNumberInputField.value);
        alert("Answer: " + result);
    }

})