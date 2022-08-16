class DFS{
	constructor(grid, start_v, end_v){
		this.grid = grid;
        this.start_v = start_v;
        this.end_v = end_v;
        this.vis = [];
        this.pred = {};
	}

	initialize(){
		let stack = [];
		let isVisited = false;
		let adj = new AdjacentSides(this.grid, 4);

		stack.push(this.start_v);
		this.vis.push(this.start_v);

		while(!stack.length == false){
            let current = stack.pop();
            adj.findAdjacent(current);

            if(current[0] == this.end_v[0] && current[1]  == this.end_v[1]){
                break;
            }

            for(const v in this.vis){
            	if(current[0] == this.vis[v][0] && current[1] == this.vis[v][1]) isVisited = true;
            }
            if(!isVisited){
            	this.vis.push(current);   
            }
            isVisited = false;

            for(const s in adj.sides){
            	for(const v in this.vis){                                                                                        
                
                    if(adj.sides[s][0] == this.vis[v][0] && adj.sides[s][1] == this.vis[v][1]) isVisited = true;
                }
                if(!isVisited){
            		stack.push(adj.sides[s]);
            		this.pred[adj.sides[s]] = current;
                }
                isVisited = false;
            }
            
        }   

	}

	get visited(){
        return this.vis;
    }

    get predecessor(){
        return this.pred;
    }
}