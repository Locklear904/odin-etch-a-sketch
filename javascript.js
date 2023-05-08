const grid = document.querySelector('#sketchContainer');



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

createGrid(10);