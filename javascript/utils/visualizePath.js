class VisualizePath{
	constructor(start_v, end_v, visited, predecessor, speed){
		this.start_v = start_v;
		this.end_v = end_v;
		this.visited = visited;
		this.predecessor = predecessor;
		this.speed = speed
	}

	initialize(){
		let shortPath = this.#shortestPath(this.start_v, this.end_v, this.predecessor);
        this.#visualizeGraph(this.start_v, this.end_v, this.visited, shortPath.reverse(), this.speed);
	}

	#shortestPath(start, end, pred){
        let isFoundPath = false;
        let current = end;
        let path = [];
        if(pred[current] == undefined) console.log("Could not find shortest path!");
        else{
            while(!isFoundPath){
            
                if(current[0] == start[0] && current[1] == start[1]) isFoundPath = true;
                else{
                    path.push(current);
                    current = pred[current];
                }
            }
        }
        return path;
        
    }

    #visualizeGraph(start, end, visited, path, speed){
        for(const v in visited){ 
                setTimeout( () => {
                    document.getElementById(`${visited[v][0]}-${visited[v][1]}`).classList.add("current");
                    setTimeout( () => {
                         document.getElementById(`${visited[v][0]}-${visited[v][1]}`).classList.remove("current");
                         document.getElementById(`${visited[v][0]}-${visited[v][1]}`).classList.add("visited");
                    }, speed * 1);
                    if(v == visited.length - 2){
                        if(path.length == 0){
                            document.getElementById('Start').removeAttribute("style", 'background-color');
                            document.getElementsByTagName("body")[0].removeAttribute("style", 'pointer-events');
                        }
                        for (let p = 0; p < path.length - 1; p++) {
                            setTimeout( () => {
                                document.getElementById(`${path[p][0]}-${path[p][1]}`).classList.remove('visited');
                                document.getElementById(`${path[p][0]}-${path[p][1]}`).classList.add('path');
                                // document.getElementById(`${path[p][0]}-${path[p][1]}`).innerText = p;
                                if(p == path.length - 2) {
                                    document.getElementById(`${start[0]}-${start[1]}`).classList.remove("visited");
                                    document.getElementById(`${end[0]}-${end[1]}`).classList.remove("visited");
                                    document.getElementById('Start').removeAttribute("style", 'background-color');
                                    document.getElementsByTagName("body")[0].removeAttribute("style", 'pointer-events');
                                }
                            }, speed * p);
                        }
                    }
                }, speed * v);
            
        }        

    }
}