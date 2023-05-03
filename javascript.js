const grid = document.querySelector('#sketchContainer');

function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        let square = document.createElement('div');
        square.classList.add('gridSquare');
        grid.appendChild(square);
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        })
    }
}

createGrid(4);