const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#status');
const restartBtn = document.querySelector('#restartBtn');
const windCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restartBtn.addEventListener('click', restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked() {
    const cellIndex = this.getAttribute('data-index');

    if (options[cellIndex] != '' || !running) {
        return;
    }
        updateCell(this, cellIndex);
        checkWinner();

}
function updateCell( Cell,index ) {
    options[index] = currentPlayer;
    Cell.textContent = currentPlayer;

}
function changePlayer() {
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner() {
    let roundWon = false;
    for (let i = 0; i <windCondition.length; i++) {
        const winCondition = windCondition[i];
        const a = options[winCondition[0]];
        const b = options[winCondition[1]];
        const c = options[winCondition[2]];

        if (a == '' || b == '' || c == '') {
            continue;
        }
        if (a == b && b == c) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    } 
    else if (!options.includes('')) {
        statusText.textContent = "It's a tie!";
        running = false;
    }
    else {
        changePlayer();
    }

}
function restartGame() {
    currentPlayer = 'X';
    options = ['', '', '', '', '', '', '', '', ''];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = '');
    running = true;

}