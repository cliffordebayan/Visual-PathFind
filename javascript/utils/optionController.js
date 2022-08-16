class OptionController{
	constructor(grid){
		this.grid = grid;
	}
	initialize(){
		this.#start();
		this.#maze();
		this.#resetOpts();
	}
	#start(){
		document.getElementById('Start').addEventListener("click", () => {
			let start_v = document.querySelector(".start-v").id.split("-").map(Number);
            let end_v = document.querySelector(".end-v").id.split("-").map(Number);
            this.#clear();

			let algoOpt = this.#algorithmOptions();
			if(algoOpt == "Algorithms"){
				alert("Pick an Algorithm!");
				return;
			}
			if(algoOpt == "Depth First Search"){
				let newDFS = new DFS(this.grid, start_v, end_v);
				newDFS.initialize();
				let newVisualizePath = new VisualizePath(start_v, end_v, newDFS.visited, newDFS.predecessor, this.#speed());
    			newVisualizePath.initialize();
			}
			else if(algoOpt == "Breadth First Search"){
				let newBFS = new BFS(this.grid, start_v, end_v);
    			newBFS.initialize();
    			let newVisualizePath = new VisualizePath(start_v, end_v, newBFS.visited, newBFS.predecessor, this.#speed());
    			newVisualizePath.initialize();

			}
			else if(algoOpt == "Dijkstra's Algorithm"){
				let newDijkstra = new Dijkstra(this.grid, start_v, end_v);
    			newDijkstra.initialize();

    			let newVisualizePath = new VisualizePath(start_v, end_v, newDijkstra.visited, newDijkstra.predecessor, this.#speed());
    			newVisualizePath.initialize();
			}
			else if(algoOpt == "Greedy Best First Search"){
				let newBestFirstSearch = new BestFirstSearch(this.grid, start_v, end_v);
    			newBestFirstSearch.initialize();

    			let newVisualizePath = new VisualizePath(start_v, end_v, newBestFirstSearch.visited, newBestFirstSearch.predecessor, this.#speed());
    			newVisualizePath.initialize();
			}
			else if(algoOpt == "A* Algorithm"){
				let newAstar = new Astar(this.grid, start_v, end_v);
    			newAstar.initialize();

    			let newVisualizePath = new VisualizePath(start_v, end_v, newAstar.visited, newAstar.predecessor, this.#speed());
    			newVisualizePath.initialize();
			}
			document.getElementById('Start').style.backgroundColor = "#e33f3f";
			document.getElementsByTagName("body")[0].style.pointerEvents = "none";

		});
		
	}

	#algorithmOptions(){
		let algoOpt = document.getElementById("algo");
		let selectedOpt = algoOpt.getElementsByClassName("selected")[0].innerText; 
		return selectedOpt;
	}

	#speed(){
		let normal = 20;
		let fast = 5;
		let slow = 300;

		let speedOpt = document.getElementById("speed");
		let selectedOpt = speedOpt.getElementsByClassName("selected")[0].innerText;

		if(selectedOpt == "Speed (Normal)" || selectedOpt == "Normal") return normal;
		else if(selectedOpt == "Fast") return fast;
		else if(selectedOpt == "Slow") return slow;
	}

	#resetOpts(){
		document.getElementById('Reset').addEventListener("click", () => {
			this.#reset();
		});

		document.getElementById('Remove_Walls_Weights').addEventListener("click", () => {
			this.#clearWallAndWeight();
		});

		document.getElementById('Remove_Path').addEventListener("click", () => {
			this.#clear();
		});

	}

	#maze(){
		document.getElementById('BinaryTree').addEventListener("click", () => {
			let start_v = document.querySelector(".start-v").id.split("-").map(Number);
            let end_v = document.querySelector(".end-v").id.split("-").map(Number);

            this.#clearWallAndWeight();
            this.#clear();

       		let newBinaryTree = new BinaryTree(this.grid, start_v, end_v);
    			newBinaryTree.initialize();

    		let newVisualizeMaze = new VisualizeMaze(this.grid, start_v, end_v, newBinaryTree, 10);
    			newVisualizeMaze.initialize();

		});

		document.getElementById('Kruskal').addEventListener("click", () => {
			let start_v = document.querySelector(".start-v").id.split("-").map(Number);
            let end_v = document.querySelector(".end-v").id.split("-").map(Number);
            
            this.#clearWallAndWeight();
            this.#clear();

			let newKruskal = new Kruskal(this.grid, start_v, end_v);
    			newKruskal.initialize();
    		let newVisualizeMaze = new VisualizeMaze(this.grid, start_v, end_v, newKruskal, 10);
    			newVisualizeMaze.initialize();
		});


		document.getElementById('Recursive Backtracking').addEventListener("click", () => {
			let start_v = document.querySelector(".start-v").id.split("-").map(Number);
            let end_v = document.querySelector(".end-v").id.split("-").map(Number);

            this.#clearWallAndWeight();
            this.#clear();
            
       		let newBacktracking = new Backtracking(this.grid, start_v, end_v);
    			newBacktracking.initialize();

    		let newVisualizeMaze = new VisualizeMaze(this.grid, start_v, end_v, newBacktracking, 10);
    			newVisualizeMaze.initialize();

		});

		document.getElementById('Prims').addEventListener("click", () => {
			let start_v = document.querySelector(".start-v").id.split("-").map(Number);
            let end_v = document.querySelector(".end-v").id.split("-").map(Number);

            this.#clearWallAndWeight();
            this.#clear();
            
       		let newPrims = new Prims(this.grid, start_v, end_v);
    			newPrims.initialize();

    		let newVisualizeMaze = new VisualizeMaze(this.grid, start_v, end_v, newPrims, 10);
    			newVisualizeMaze.initialize();

		});

		document.getElementById('HuntAndKill').addEventListener("click", () => {
			let start_v = document.querySelector(".start-v").id.split("-").map(Number);
            let end_v = document.querySelector(".end-v").id.split("-").map(Number);

            this.#clearWallAndWeight();
            this.#clear();
            
       		let newHuntAndKill = new HuntAndKill(this.grid, start_v, end_v);
    			newHuntAndKill.initialize();

    		let newVisualizeMaze = new VisualizeMaze(this.grid, start_v, end_v, newHuntAndKill, 10);
    			newVisualizeMaze.initialize();

		});

		

	}

	

	#reset(){
		for (let r = 0; r < this.grid.gridRows; r++) {
			for (let c = 0; c < this.grid.gridColumns; c++) {
				if(this.grid.start_v[0][0] == r && this.grid.start_v[0][1] == c){
					document.getElementById(`${r}-${c}`).removeAttribute('class');
					document.getElementById(`${r}-${c}`).setAttribute("class", "start-v");
				}
				else if(this.grid.end_v[0][0]  == r && this.grid.end_v[0][1] == c){
					document.getElementById(`${r}-${c}`).removeAttribute('class');
					document.getElementById(`${r}-${c}`).setAttribute("class", "end-v");
				}
				else{
					document.getElementById(`${r}-${c}`).removeAttribute('class');
					document.getElementById(`${r}-${c}`).setAttribute("class", "dropzone");

				}
			}
		}
		
	}


	#clearWallAndWeight(){
		for (let r = 0; r < this.grid.gridRows; r++) {
			for (let c = 0; c < this.grid.gridColumns; c++) {
				if(document.getElementById(`${r}-${c}`).classList.contains("start-v")
				 	|| document.getElementById(`${r}-${c}`).classList.contains("end-v")) continue;

				else{
					document.getElementById(`${r}-${c}`).classList.remove('wall');
					document.getElementById(`${r}-${c}`).classList.remove('weight');
					document.getElementById(`${r}-${c}`).classList.add('dropzone');
				}
				
			}
		}
	}

	#clear(){
		for (let r = 0; r < this.grid.gridRows; r++) {
			for (let c = 0; c < this.grid.gridColumns; c++) {
				if(document.getElementById(`${r}-${c}`).classList.contains("start-v")
				 	|| document.getElementById(`${r}-${c}`).classList.contains("end-v")
				 	|| document.getElementById(`${r}-${c}`).classList.contains("wall")) continue;

				if(document.getElementById(`${r}-${c}`).classList.contains("weight")){
					document.getElementById(`${r}-${c}`).classList.remove("path");
					document.getElementById(`${r}-${c}`).classList.remove("visited");
				}	
				else{
					document.getElementById(`${r}-${c}`).removeAttribute('class');
					document.getElementById(`${r}-${c}`).setAttribute("class", "dropzone");
				}
				
			}
		}
	}

	
}