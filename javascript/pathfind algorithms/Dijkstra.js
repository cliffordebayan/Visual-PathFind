class Dijkstra{
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
		let distance = [];

		distance[this.start_v] = 0;
		pq.enqueue(this.start_v, 0);

		for (let r = 0; r < this.grid.gridRows; r++) {
			for (let c = 0; c < this.grid.gridColumns; c++) {
				if(!(this.start_v[0] == r && this.start_v[1] == c)){
					distance[[r, c]] = Infinity;
					this.pred[[r, c]] = null;
				}
				
			}
		}
		
		while(!pq.isEmpty()){
			let node = pq.dequeue();
			let current = node.element;
			adj.findAdjacent(current);

			if(current[0] == this.end_v[0] && current[1]  == this.end_v[1]){
                break;
            }

			for(const s in adj.sides){
				let newDist = distance[current] + adj.weight[s];

				if(newDist < distance[adj.sides[s]]){
					distance[adj.sides[s]] = newDist;
					this.vis.push(adj.sides[s]);
					this.pred[adj.sides[s]] = current;
					pq.enqueue(adj.sides[s], distance[adj.sides[s]]);
				}
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