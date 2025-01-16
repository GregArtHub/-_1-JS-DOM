function addNumbers() {
    const newNumbers = [];
    for (let i = 0; i < 30; i++) { 
        newNumbers.push(Math.floor(Math.random() * 100));
    }

    let table = document.querySelector('table');
    let cellIndex = 0;

    for (let i = 0; i < 5; i++) {
        let row = table.rows[i + 1];
        for (let j = 0; j < 6; j++) {
            let cell = row.cells[j];

            if (cell.textContent === "") {
                cell.textContent = newNumbers[cellIndex];
                if (newNumbers[cellIndex] >= 50) {
                    cell.classList.add('orange');
                }
                cellIndex++;
                return; 
            }
        }
    }
    alert("Таблица заполнена!"); 
}





// console.log("Hello world")


