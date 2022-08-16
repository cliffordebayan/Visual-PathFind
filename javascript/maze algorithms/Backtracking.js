class Backtracking{
    constructor(grid, start_v, end_v){
        this.grid = grid;
        this.start_v = start_v;
        this.end_v = end_v;
        this.carvePath = [];
        this.maze = [];
    }

    initialize(){
    	this.#fillMaze();
    	let adj = new AdjacentSidesMaze();
	    let r = this.#randOddInt(1, this.grid.gridRows);
	    let c = this.#randOddInt(1, this.grid.gridColumns);

	    this.maze[r][c] = 0;
	    this.carvePath.push([r, c]);
	    let stack = [[r, c]];
	    
	    while (!stack.length == false) {
	        let c, n = [];
	        stack.push([-1, -1]);
	        
	        while (!n.length == true && !stack.length == false){
	        	stack.pop();
	            if (stack.length == 0)
	                break;
	            c = stack[stack.length - 1];
	            n = adj.neighbors(this.maze, c[0], c[1]);
	        }
	        
	        if (!stack.length == true) break;
	        
	        let randAdj = n[Math.floor(Math.random() * n.length)];
	        stack.push(randAdj);
	        
	        this.maze[ (randAdj[0] + c[0]) / 2 ][ (randAdj[1] + c[1]) / 2 ] = 0;
	        this.carvePath.push([(randAdj[0] + c[0]) / 2 , (randAdj[1] + c[1]) / 2]);
	        this.maze[ randAdj[0] ][ randAdj[1] ] = 0;
	        this.carvePath.push([randAdj[0], randAdj[1]]);
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
    
    #randOddInt(min, max) {
	  const result = Math.floor(min + Math.random() * (max - min));
	  return result + ((result % 2) - 1);
	}

	get path(){
        return this.carvePath;
        
    }

}