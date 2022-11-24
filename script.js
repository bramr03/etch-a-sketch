const container = document.getElementById("container");
let grids;

let gridColor = "#001f3f";

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
const yellow = document.querySelector('#yellow');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');

yellow.addEventListener('click', () => {
  gridColor = "#605c01";
});
red.addEventListener('click', () => {
  gridColor = "#3f0001";
});
blue.addEventListener('click', () => {
  gridColor = "#001f3f";
});
green.addEventListener('click', () => {
  gridColor = "#073f00";
});
function draw(gridItem){
  gridItem.setAttribute("style", "background-color: " + gridColor + ";");
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
