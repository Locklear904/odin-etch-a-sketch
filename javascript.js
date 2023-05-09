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

/*function subtractLight(level) {
    box.style.backgroundColor = "hsl(0, 100%, (100 - level)%)"
}*/

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.add('gridColumn');
        grid.appendChild(column);
        for (let i = 0; i < size; i++) {
            let box = document.createElement('div');
            box.classList.add('gridBox');
            column.appendChild(box);
            box.style.backgroundColor = "black";
            box.style.opacity = "0.0";
            box.addEventListener("mouseover", function(e) {
                if (parseFloat(e.target.style.opacity) < 1.0) {
                    e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
                }
            });
        }
    }
}

gridBtn.addEventListener("click", newGrid);
createGrid(16);