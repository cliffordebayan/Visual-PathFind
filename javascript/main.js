let gridTable = document.getElementById("grid");

let navHeight = 0;
let navWidth = 280;
let gridCellSize = 26;

let gridRows = Math.floor((window.innerHeight - navHeight) / gridCellSize) - 2;
let gridColumns = Math.floor((window.innerWidth - navWidth) / gridCellSize) - 2;

if(gridColumns < 20) gridColumns = 20;

if(gridRows % 2 == 0){
	gridRows += 1;
}
if(gridColumns % 2 == 0){
	gridColumns += 1;
}

let newGrid = new Grid(gridRows, gridColumns);
newGrid.initialize();

let newEvents = new Events();
newEvents.initialize();

let newOptionController = new OptionController(newGrid);
newOptionController.initialize();