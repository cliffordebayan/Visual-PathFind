class VisualizeMaze{
	constructor(grid, start_v, end_v, maze, speed){
		this.grid = grid;
		this.start_v = start_v;
		this.end_v = end_v;
		this.speed = speed;
		this.maze = maze;
	}

	initialize(){
		this.#fillWall(25);
	}

	#fillWall(speed){
		document.getElementById('Start').style.backgroundColor = "#e33f3f";
		document.getElementsByTagName("body")[0].style.pointerEvents = "none";
		
        for (let r = 0; r < this.grid.gridRows; r++) {
        	setTimeout(() => {
	            for (let c = 0; c < this.grid.gridColumns; c++) {
	            	
		            if(this.start_v[0] == r && this.start_v[1] == c || this.end_v[0] == r && this.end_v[1] == c){}
		            else{
		            	document.getElementById(`${r}-${c}`).classList.add("wall");
		            }
	            }
	            if(r == this.grid.gridRows - 1) this.#carvePath(this.speed, this.maze);
        	}, speed * r);
        }
    }

    #carvePath(speed, maze){
    	for(const i in maze.path){
			setTimeout( () => {
				document.getElementById(`${maze.path[i][0]}-${maze.path[i][1]}`).classList.remove("wall");

				if(i == maze.path.length - 1){
					document.getElementById('Start').removeAttribute("style", 'background-color');
                    document.getElementsByTagName("body")[0].removeAttribute("style", 'pointer-events');
				}
			}, speed * i);
		}
    }
}