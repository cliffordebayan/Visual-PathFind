class Grid{
    constructor(gridRows, gridColumns){
        this.gridRows = gridRows;
        this.gridColumns = gridColumns;
        this.start_v = [];
        this.end_v = [];
    }

    initialize(){
        this.#generateGrid();
    }

    #generateGrid(){

        for (let r = 0; r < this.gridRows; r++) {
            const tableRow = document.createElement("tr");
            gridTable.appendChild(tableRow);
            
            for (let c = 0; c < this.gridColumns; c++) {
                const tableColumn = document.createElement("td");
                tableColumn.setAttribute('id',`${r}-${c}`);
                tableColumn.setAttribute('class','dropzone');
                
                if(Math.floor(this.gridRows / 2) === r){
                    if(Math.floor(this.gridColumns / 4) === c){
                        tableColumn.setAttribute('class','start-v');
                        tableColumn.setAttribute('draggable', 'true');
                        this.start_v.push([r, c]);
                    }
                    else if(Math.floor(this.gridColumns - this.gridColumns / 4) == c){
                        tableColumn.setAttribute('class','end-v');
                        tableColumn.setAttribute('draggable', 'true');
                        this.end_v.push([r, c]);
                    }
                }
                tableRow.appendChild(tableColumn);
                
            }
        }
    }



    
    
}



