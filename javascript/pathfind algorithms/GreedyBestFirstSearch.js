class BestFirstSearch{
	constructor(grid, start_v, end_v){
		this.grid = grid;
        this.start_v = start_v;
        this.end_v = end_v;
        this.vis = [];
        this.pred = {};
	}

	initialize(){
		let pq = new PriorityQueue();
		let adj = new AdjacentSides(this.grid, 4);
		let heu = new Heuristic();
		let isVisited = false;

		this.vis.push(this.start_v);
		pq.enqueue(this.start_v, 0);

		while(!pq.isEmpty()){
			let node = pq.dequeue();
			let current = node.element;
			adj.findAdjacent(current);

			if(current[0] == this.end_v[0] && current[1]  == this.end_v[1]){
				break;
			}
			
			for(const s in adj.sides){
				for(const v in this.vis){                                                                                        
                
                    if(adj.sides[s][0] == this.vis[v][0] && adj.sides[s][1] == this.vis[v][1]) isVisited = true;
                }

                if(!isVisited){
                   	let priority = heu.ManhattanDist(this.end_v, adj.sides[s]);
                    this.vis.push(adj.sides[s]);
					this.pred[adj.sides[s]] = current;
                    pq.enqueue(adj.sides[s], priority);
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