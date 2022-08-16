class HuntAndKill{
    constructor(grid, start_v, end_v){
        this.grid = grid;
        this.start_v = start_v;
        this.end_v = end_v;
        this.carvePath = [];
        this.maze = [];
    }

    initialize(){
    	this.#fillMaze();

    	let current = [1, 1];
    	let adj = new AdjacentSidesMaze();
    
	    while (!this.#complete(this.maze)) {
	        
	        let n = adj.neighbors(this.maze, current[0], current[1]);
	        if (n.length == 0) {
	            let t = this.#findCoord(this.maze);
	            current = t[0];
	            
	            this.maze[current[0]][current[1]] = 0;
	            this.maze[(current[0] + t[1][0]) / 2][(current[1] + t[1][1]) / 2] = 0;
	            this.carvePath.push([(current[0] + t[1][0]) / 2, (current[1] + t[1][1]) / 2]);
	        }
	        
	        else {
	            
	            let i = Math.floor(Math.random() * n.length);
	            let nb = n[i];
	            this.maze[nb[0]][nb[1]] = 0;
	            this.maze[(nb[0] + current[0]) / 2][(nb[1] + current[1]) / 2] = 0;
	            this.carvePath.push([(nb[0] + current[0]) / 2, (nb[1] + current[1]) / 2]);
	            current = nb.slice();
	            
	        }
	        this.carvePath.push(current);
	        
	    }


    }

    #fillMaze(){
    	for (let r = 0; r < this.grid.gridRows; r++) {
	        this.maze.push([]);
	        for (let c = 0; c < this.grid.gridColumns; c++) {
	            this.maze[r].push(1);
	        }
	    }
    }

    #complete(maze) {
	    for (let r = 1; r < maze.length; r += 2) {
	        for (let c = 1; c < maze[0].length; c += 2) {
	            if (maze[r][c] != 0)
	                return false;
	        }
	    }
	    return true;
	}

	#findCoord(maze) {
		let adj = new AdjacentSidesMaze();

	    for (let r = 1; r < maze.length; r += 2) {
	        for (let c = 1; c < maze[0].length; c += 2) {
	            
	            if (maze[r][c] == 1) {
	                let n = adj.neighborsAB(maze, r, c);
	                
	                for (let k = 0; k < n.length; k++) {
	                    if (maze[n[k][0]][n[k][1]] == 0)
	                        return [[r, c], n[k]];
	                }
	            }
	            
	        }
    	}
	}

	get path(){
        return this.carvePath;
        
    }

}