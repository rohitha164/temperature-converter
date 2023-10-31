
const convertButton = document.querySelector('.convert');
const resetButton = document.querySelector('.reset');
const fromUnitSelect = document.getElementById('para1');
const toUnitSelect = document.getElementById('para2');
const inputValue = document.getElementById('in1');
const outputValue = document.getElementById('out1');
function convertTemperature() {
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const temperature = parseFloat(inputValue.value);

    let result;

    if (fromUnit === toUnit) {
        result = temperature;
    } 
    else if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            result = temperature + 273.15;
        }
    } 
    else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            result = (temperature - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            result = (temperature - 32) * 5/9 + 273.15;
        }
    } 
    else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            result = temperature - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
        }
    }
    outputValue.value = result.toFixed(2);
}
function reset() {
    inputValue.value = '';
    outputValue.value = '';
    fromUnitSelect.selectedIndex = 0;
    toUnitSelect.selectedIndex = 0;
}
convertButton.addEventListener('click', convertTemperature);
resetButton.addEventListener('click', reset);