class AdjacentSidesMaze{
    constructor(){
    }

    neighbors(maze, rc, cc) {
	    let adjSides = [];
	    for (let r = 0; r < 4; r++) {
	        let n = [rc, cc];
	        
	        n[r % 2] += ((Math.floor(r / 2) * 2) || -2);
	        if (n[0] < maze.length && n[1] < maze[0].length && 
	            n[0] > 0 && n[1] > 0) {
	            
	            if (maze[n[0]][n[1]] == 1) {
	                adjSides.push(n);
	            }
	        }
	    }
	    return adjSides;
	}

	neighborsAB(maze, rc, cc) {
	    let adjSides = [];
	    for (let r = 0; r < 4; r++) {
	        let n = [rc, cc];
	        
	        n[r % 2] += ((Math.floor(r / 2) * 2) || -2);
	        if (n[0] < maze.length && 
	            n[1] < maze[0].length && 
	            n[0] > 0 && 
	            n[1] > 0) {
	            
	            adjSides.push(n);
	        }
	    }
	    return adjSides;
	}
}
