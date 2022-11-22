const container = document.getElementById("container");
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.setAttribute("style", "width = 1fr");
      cell.setAttribute("style", "height = 1fr");
      container.appendChild(cell).className = "grid-item";
    };
  };

  makeRows(16, 16);

let grids = document.querySelectorAll('.grid-item');
let isDrawing;
grids.forEach((div) => {
    div.addEventListener('mousedown', () => {
        isDrawing = true;
    });
    div.addEventListener('mousemove', () => {
        if(isDrawing){
            div.setAttribute("style", "background-color: black;")
        }
    });
    div.addEventListener('mouseup', () => {
        if(isDrawing){
            isDrawing = false;
        }
    });
  });

const butamount = document.querySelector('#amount');
butamount.addEventListener('click', () => {
    let amt = prompt("Choose amount");
    container.replaceChildren("");
    makeRows(amt, amt);
  });