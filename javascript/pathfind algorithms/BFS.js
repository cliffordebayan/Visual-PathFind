class BFS{
    constructor(grid, start_v, end_v){
        this.grid = grid;
        this.start_v = start_v;
        this.end_v = end_v;
        this.vis = [];
        this.pred = {};
        
    }
    initialize(){
        let queue = [];
        let isVisited = false;
        let adj = new AdjacentSides(this.grid, 4);

        queue.push(this.start_v);
        this.vis.push(this.start_v);

        while(!queue.length == false){
            let current = queue[0];
            adj.findAdjacent(current);
            queue.shift(); // dequeue

            if(current[0] == this.end_v[0] && current[1]  == this.end_v[1]){
                break;
            }
            
            for(const s in adj.sides){
                for(const v in this.vis){                                                                                        
                
                    if(adj.sides[s][0] == this.vis[v][0] && adj.sides[s][1] == this.vis[v][1]) isVisited = true;
                }
                if(!isVisited){
                    queue.push(adj.sides[s]); // enqueue
                    this.vis.push(adj.sides[s]);   
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
