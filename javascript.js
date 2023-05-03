const grid = document.querySelector('#sketchContainer');

function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        square.classList.add('gridSquare');
        grid.appendChild(square);
    }
}

createGrid(4);