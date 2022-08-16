class AdjacentSides{
    constructor(grid, num_dir){
        this.grid = grid;
        this.sides = [];
        this.current = [];
        this.weight = [];
        this.num_dir = num_dir;
    }

    findAdjacent(loc_v){
        let num_dir = this.num_dir;
        let dirs = [];
        if(num_dir == 4) dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // Top, Right, Bottom, Left
        else if(num_dir == 8) dirs = [[-1, 0],[-1, 1], [0, 1],[1, 1], [1, 0],[1, -1], [0, -1], [-1, -1]];

        let result = [];
        let weights = [];

        for (let i = 0; i < num_dir; i++) {
            // Location of adjacent vertex
            let  loc = [loc_v[0] + dirs[i][0], loc_v[1] + dirs[i][1]];
            
            // Skip adjacent vertex that are outside the grid
            if(loc[0] == -1 || loc[0] == this.grid.gridRows) continue;
            if(loc[1] == -1 || loc[1] == this.grid.gridColumns) continue;
            // Skip adjacent vertex that are wall 
            if(document.getElementById(`${loc[0]}-${loc[1]}`).classList.contains("wall")) continue;
            
            else{
                result.push(loc);
                if(document.getElementById(`${loc[0]}-${loc[1]}`).classList.contains("weight")){
                    weights.push(5);
                }
                else
                    weights.push(1);

            }
            
        }
        this.sides = result;
        this.current = loc_v;
        this.weight = weights;
    } 
}

