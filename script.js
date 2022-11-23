const container = document.getElementById("container");
let grids;

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.setAttribute("style", "width = 1fr");
      cell.setAttribute("style", "height = 1fr");
      container.appendChild(cell).className = "grid-item";
    };
    grids = document.querySelectorAll('.grid-item');
  };

makeRows(8, 8);

function draw(gridItem){
  gridItem.setAttribute("style", "background-color: #001f3f;");
};

let isDrawing;
function manageDivs(){
  grids.forEach((div) => {
      div.addEventListener('mousedown', () => {
          isDrawing = true;
      });
      div.addEventListener('mousemove', () => {
          if(isDrawing){
              draw(div);
          }
      });
      div.addEventListener('mouseup', () => {
          if(isDrawing){
              isDrawing = false;
          }
      });
    });
};

manageDivs();

const butAmount = document.querySelector('#amount');
butAmount.addEventListener('click', () => {
    let amt = prompt("Choose amount");
    while (amt > 100 || amt == 100){
      amt = prompt("The amount should be less than 100: ");
    }
    container.innerHTML = '';
    makeRows(amt, amt);
    manageDivs();
  });

const butReset = document.querySelector('#reset');
butReset.addEventListener('click', () => {
  grids.forEach((div) => {
    div.setAttribute("style", "backgroound-color: white;");
  });
});
