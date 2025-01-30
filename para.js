let currentRowIndex = 6; 
let currentCellIndex = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function initializeTable() {
    let table = document.querySelector('table tbody');
    for (let i = 0; i < 6; i++) {
        let newRow = table.insertRow();
        for (let j = 0; j < 6; j++) {
            let newCell = newRow.insertCell();
            let randomNumber = generateRandomNumber();
            newCell.textContent = randomNumber;
            if (randomNumber >= 50) {
                newCell.classList.add('orange');
            }
        }
    }
}

function addCell() {
    let table = document.querySelector('table tbody');
    let rows = table.rows;

    if (currentRowIndex >= rows.length) {
        let newRow = table.insertRow();
        for (let i = 0; i < 6; i++) {
            newRow.insertCell();
        }
    }

    let currentRow = rows[currentRowIndex];
    let currentCell = currentRow.cells[currentCellIndex];

    let randomNumber = generateRandomNumber();
    currentCell.textContent = randomNumber;

    if (randomNumber >= 50) {
        currentCell.classList.add('orange');
    } else {
        currentCell.classList.remove('orange');
    }

    currentCellIndex++;

    if (currentCellIndex >= 6) {
        currentRowIndex++;
        currentCellIndex = 0;
    }
}

window.onload = initializeTable;
