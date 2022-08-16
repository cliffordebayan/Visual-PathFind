class Prims{
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
	    let lists = [[r, c]];

	    while (!lists.length == false) {
	        let index = Math.floor(Math.random() * lists.length);
	        let c = lists[index];
	        let n = adj.neighbors(this.maze, c[0], c[1]);
	        
	        while (n.length == 0) {
	            lists.splice(index, 1);
	            if (lists.length == 0) break; 
	            
	            index = Math.floor(Math.random() * lists.length);
	            c = lists[index];
	            n = adj.neighbors(this.maze, c[0], c[1]);
	            this.carvePath.push(c);
	        }
	        if (!lists.length == true) { break; }


	        let randAdj = n[Math.floor(Math.random() * n.length)];
	        lists.push(randAdj);

	        if (n.length == 1) lists.splice(index, 1);
	       
	        this.maze[ randAdj[0] ][ randAdj[1] ] = 0;
	        this.maze[ (randAdj[0] + c[0]) / 2 ][ (randAdj[1] + c[1]) / 2 ] = 0;
	        this.carvePath.push([ (randAdj[0] + c[0]) / 2, (randAdj[1] + c[1]) / 2]);
	        this.carvePath.push(randAdj);
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