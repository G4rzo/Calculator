document.getElementById('buttons-container').addEventListener('click', function(event) {
    
    const target = event.target
    const value = target.getAttribute('data-value')
    const action = target.getAttribute('data-action')

    if (value) {
        appendToDisplay(value)
    } else if (action === 'calculate') {
        calculateResult();
    } else if (action === 'clear') {
        clearDisplay();
    }
})

function appendToDisplay(value) {
    const display = document.getElementById('display')
    if (display.value === 'Error while calculating') {
        display.value = value
    } else {
        display.value += value
    }
}

function calculateResult() {
    try {
        document.getElementById('display').value = Function('return (' + document.getElementById('display').value.replace(/[^-()\d/*+.]/g, '') + ')')()
    } catch (error) {
        document.getElementById('display').value = 'Error while calculating'
    }
}

function clearDisplay() {
    const display = document.getElementById('display')
    display.value = ''
}

function deleteLastChar() {
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}

document.addEventListener('keydown', function(e){
    console.log(e.key)
    if(e.key === "Enter"){
        calculateResult()
    }
    else if(e.key === "c"){
        clearDisplay()
    }
    else if(e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === "."){
        appendToDisplay(e.key)
    }
    else if (e.key === "Backspace") { 
        deleteLastChar()
    }
})