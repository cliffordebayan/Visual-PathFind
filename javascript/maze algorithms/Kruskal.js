class Kruskal{
	constructor(grid, start_v, end_v){
        this.grid = grid;
        this.start_v = start_v;
        this.end_v = end_v;
        this.carvePath = [];
        this.sets = [];
        this.edges = [];
    }

    initialize(){
        this.#fillMaze();

        while (!this.edges.length == false) {
            let choosenCell = this.edges.splice(Math.floor(Math.random() * this.edges.length), 1)[0];
            let roworcol = choosenCell[0] % 2;
            let c1, c2, r1, r2;
            
            if (roworcol) {
                c1 = [choosenCell[0], choosenCell[1] - 1];
                c2 = [choosenCell[0], choosenCell[1] + 1];
            }
            else {
                c1 = [choosenCell[0] - 1, choosenCell[1]];
                c2 = [choosenCell[0] + 1, choosenCell[1]];
            }
            r1 = this.#setIndex(this.sets, c1);
            r2 = this.#setIndex(this.sets, c2);
            

            if (r1 != r2) {
                let add = this.sets.splice(r2, 1)[0];
                if (r2 < r1) r1--;
                this.sets[r1] = this.sets[r1].concat(add);
                 this.carvePath.push([choosenCell[0], choosenCell[1]]);
                this.carvePath.push(c1);
                this.carvePath.push(c2);
            }
            
        }
               
    }

    #fillMaze(){
        for (let r = 0; r < this.grid.gridRows; r++) {
            for (let c = 0; c < this.grid.gridColumns; c++) {
                if (r % 2 == 1 && c % 2 == 1) 
                    this.sets.push([[r, c]]);
                if (r != this.grid.gridRows - 2 && r % 2 == 1 && c % 2 == 1) 
                    this.edges.push([r + 1, c]);
                if (c != this.grid.gridColumns - 2 && r % 2 == 1 && c % 2 == 1) 
                    this.edges.push([r, c + 1]);
            }
        }
    }

    #setIndex(sets, cells) {
        for (let r = 0; r < sets.length; r++) {
            if (this.#find(sets[r], cells))
                return r;
        }
        return -1;
    }

    #find(set, cell) {
        for (let r = 0; r < set.length; r++) {
            if (set[r][0] == cell[0] && set[r][1] == cell[1])
                return 1;
        }
        return 0;
    }

    get path(){
        return this.carvePath;
        
    }


}