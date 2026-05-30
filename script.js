const display = document.getElementById('display');

// Append number to display
function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

// Append operator to display
function appendOperator(operator) {
    if (display.value === '') return;
    
    const lastChar = display.value[display.value.length - 1];
    
    // Prevent multiple operators in a row
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    
    display.value += operator;
}

// Append decimal point
function appendDecimal() {
    // Prevent multiple decimals in the same number
    const lastOperatorIndex = Math.max(
        display.value.lastIndexOf('+'),
        display.value.lastIndexOf('-'),
        display.value.lastIndexOf('*'),
        display.value.lastIndexOf('/')
    );
    
    const lastNumber = display.value.substring(lastOperatorIndex + 1);
    
    if (!lastNumber.includes('.')) {
        if (display.value === '') {
            display.value = '0.';
        } else if (['+', '-', '*', '/'].includes(display.value[display.value.length - 1])) {
            display.value += '0.';
        } else {
            display.value += '.';
        }
    }
}

// Delete last character
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Clear display
function clearDisplay() {
    display.value = '';
}

// Calculate the result
function calculate() {
    try {
        if (display.value === '') return;
        
        // Validate the expression
        const lastChar = display.value[display.value.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            return;
        }
        
        // Use Function constructor instead of eval for safer execution
        const result = Function('"use strict"; return (' + display.value + ')')();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
        }, 1500);
    }
}

// Allow keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === '.') {
        appendDecimal();
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteLastChar();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});
