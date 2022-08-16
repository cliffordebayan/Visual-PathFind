class BinaryTree{
	constructor(grid, start_v, end_v){
        this.grid = grid;
        this.start_v = start_v;
        this.end_v = end_v;
        this.carvePath = [];
    }
    
    initialize(){
    	for(let r = 1; r < this.grid.gridRows; r += 2){
    		for(let c = 1; c < this.grid.gridColumns; c += 2){
                let rand = Math.random() > 0.5 ? true : false;
                
    			if(r == this.grid.gridRows - 2) rand = false;

    			if(c == this.grid.gridColumns - 2) rand = true;

    			if(r % 2 == 1 && c % 2 == 1) this.carvePath.push([r, c]);

                if(r == this.grid.gridRows - 2 && c == this.grid.gridColumns - 2) break;    

                if(rand) this.carvePath.push([r+1, c]);

    			else this.carvePath.push([r, c+1]);
    		}
    	}
    }

    get path(){
        return this.carvePath;
        
    }



}