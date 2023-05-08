const grid = document.querySelector('#sketchContainer');
const gridBtn = document.querySelector('#gridBtn');

function newGrid() {
    let size = prompt("Please enter a number from 1-100");
    size = Math.round(size);
    if (size <= 100 && size >= 1) {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        createGrid(size);
    }   else {
        alert("Please try again! Make sure to enter a number from 1-100.");
    }
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.add('gridColumn');
        grid.appendChild(column);
        for (let i = 0; i < size; i++) {
            let box = document.createElement('div');
            box.classList.add('gridBox');
            column.appendChild(box);
            //Using CSS hover, but saving event listener just in case
            /*box.addEventListener("onmouseover", function() {
                box.style.backgroundColor = "black";
            });*/
        }
    }
}

gridBtn.addEventListener("click", newGrid);
createGrid(16);