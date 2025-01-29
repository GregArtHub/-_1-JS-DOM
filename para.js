function generateRandomNumbers() {
    const numbers = [];
    for (let i = 0; i < 30; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
}

function fillTable() {
    const numbers = generateRandomNumbers();
    let table = document.querySelector('table');
    let cellIndex = 0;

    for (let i = 0; i < 5; i++) {
        let row = table.rows[i + 1];
        for (let j = 0; j < 6; j++) {
            let cell = row.cells[j];
            cell.textContent = numbers[cellIndex];
            if (numbers[cellIndex] >= 50) {
                cell.classList.add('orange');
            } else {
                cell.classList.remove('orange');
            }
            cellIndex++;
        }
    }
}

function updateNumbers() {
    fillTable();
}

window.onload = fillTable;
