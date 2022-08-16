class Events{
    constructor(){
    }
    
    initialize(){
        this.#DropdownMenu();
        this.#MoveStartEndVertex();
        this.#AddDeleteWallVertex();
        this.#AddWeightVertex();
    }

    #DropdownMenu(){
        const dropdowns = document.querySelectorAll(".dropdown");

        dropdowns.forEach(dropdown => {
            const select = dropdown.querySelector(".select");
            const caret = dropdown.querySelector(".caret");
            const menu = dropdown.querySelector(".menu");
            const options = dropdown.querySelectorAll(".menu li");
            const selected = dropdown.querySelector(".selected");

            select.addEventListener("click", () => {
                select.classList.toggle("select-clicked");
                caret.classList.toggle("caret-rotate");
                menu.classList.toggle("menu-open");
            });


            options.forEach(option => {
                option.addEventListener("click", () => {
                    selected.innerText = option.innerText;
                    select.classList.remove("select-clicked");
                    caret.classList.remove("caret-rotate");
                    menu.classList.remove("menu-open");

                    options.forEach(option => {
                        option.classList.remove("active");
                    });

                    option.classList.add("active");

                });
            });

        });

        document.getElementById('algo').addEventListener("click", event => {
           this.#CloseDropDown('algo', 0);
        });
        document.getElementById('mazes').addEventListener("click", event => {
           this.#CloseDropDown('mazes', 1);
        });

        document.getElementById('speed').addEventListener("click", event => {
           this.#CloseDropDown('speed', 2);
        });
    }

    #CloseDropDown(id, dpId){
        window.addEventListener("click", event => {
            if(event.target.id != id){
                const dropdown =  document.querySelectorAll(".dropdown")[dpId];
                const select = dropdown.querySelector("#" + id);
                const caret = dropdown.querySelector(".caret");
                const menu = dropdown.querySelector(".menu");

                if(select.classList.contains("select-clicked")){
                    select.classList.remove("select-clicked");
                    caret.classList.remove("caret-rotate");
                    menu.classList.remove("menu-open");
                }
            }
        });

    }

    #MoveStartEndVertex(){
        let dragged = null;
        let vertex = "";
        document.addEventListener("dragstart", event => {dragged = event.target;});
        document.addEventListener("dragover", event => {event.preventDefault();});
        document.addEventListener("drop", event => {
            event.preventDefault();
            if (event.target.classList.contains("dropzone")) {

                if(dragged.className == "start-v"){
                    vertex = "start-v";
                }
                else if(dragged.className == "end-v"){
                    vertex = "end-v";
                }
                else{
                    return;
                }

                dragged.classList.remove(`${vertex}`);
                dragged.classList.add("dropzone");
                dragged.removeAttribute("draggable");
                
                event.target.classList.remove("dropzone");
                event.target.classList.remove("visited");
                event.target.classList.remove("path");
                event.target.classList.remove("wall");
                event.target.classList.add(`${vertex}`);
                event.target.setAttribute("draggable", "true");

            }
        });

    }

    #AddDeleteWallVertex(){
        let wall = null;
        let isAdding = false;
        let isDeleting = false;
        document.addEventListener("mousedown", event => {
            if(event.button == 0){
                wall = event.target;
                if(wall.classList.contains("dropzone") && !wall.classList.contains("wall") && !wall.classList.contains("weight") ){
                    isAdding = true;
                    wall.classList.add("wall");
                    wall.classList.remove("weight");
                    wall.classList.remove("path");
                    wall.classList.remove("visited");
                }
                else if(wall.classList.contains("wall") || wall.classList.contains("weight")){
                    isDeleting = true;
                    wall.classList.remove("wall");
                    wall.classList.remove("weight");
                }
                document.addEventListener("mouseover", event => {
                    wall = event.target;
                    if(isAdding && wall.classList.contains("dropzone") && !wall.classList.contains("wall") && !wall.classList.contains("weight")  ){
                        wall.classList.add("wall");
                        wall.classList.remove("weight");
                        wall.classList.remove("path");
                        wall.classList.remove("visited");
                    } 
                    else if(isDeleting && (wall.classList.contains("wall") || wall.classList.contains("weight"))){
                        wall.classList.remove("wall");
                        wall.classList.remove("weight");
                    }  
                });

                document.addEventListener("mouseup", event => {
                    wall = event.target;
                    isAdding = false;
                    isDeleting = false;
                });
            }
            

        });
        
    }

    #AddWeightVertex(){
        let weight = null;
        let isAdding = false;

        document.addEventListener("mousedown", event => {
            weight = event.target;
            if(event.button == 2){
                if(weight.classList.contains("dropzone") && !weight.classList.contains("weight") ){
                    isAdding = true;
                    weight.classList.add("weight");
                    weight.classList.remove("wall");
                    weight.classList.remove("path");
                    weight.classList.remove("visited");
                }
            
            document.addEventListener("mouseover", event => {
                    weight = event.target;
                    if(isAdding && weight.classList.contains("dropzone") && !weight.classList.contains("weight") ){
                        weight.classList.add("weight");
                        weight.classList.remove("wall");
                        weight.classList.remove("path");
                        weight.classList.remove("visited");
                    } 
                });

            document.addEventListener("mouseup", event => {
                weight = event.target;
                isAdding = false;
            });
        }

        });
    }

}