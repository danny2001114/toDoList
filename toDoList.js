const input = document.getElementById("input");
const list = document.getElementById("list");
let allbtn = document.getElementsByClassName("btn")[0].attributes;
let attri = document.createAttribute("disabled");


function add(){
    if( input.value.length > 0){
        var item = document.createElement("li");
        item.className = "item";
        list.appendChild(item);
        addTxt();
        
        function addTxt(){
            item.textContent = input.value;
            input.value = "";

            var dele = document.createElement("button");
            dele.className = "dele";
            item.appendChild(dele); 
            var delTxt = document.createTextNode("delete");
            dele.appendChild(delTxt);

            dele.addEventListener("click",function remove(){
                item.remove();
            })

            var edit = document.createElement("button");
            edit.className = "btn";
            item.appendChild(edit);
            var editTxt = document.createTextNode("edit");
            edit.appendChild(editTxt);

            edit.addEventListener("click",function edit(){            
                var dele = document.getElementsByClassName("dele");
                addButtons();
                allbtn.setNamedItem(attri);
            })
            
            function addButtons(){
                input.value = "";

                dele.remove();
                edit.remove();

                input.value = item.textContent;

                var save = document.createElement("button");
                list.appendChild(save);
                var saveTxt = document.createTextNode("save");
                save.appendChild(saveTxt);
                
                var cancel = document.createElement("button");
                list.appendChild(cancel);
                var cancelTxt = document.createTextNode("cancel");
                cancel.appendChild(cancelTxt);

                save.addEventListener("click",function saving(){
                    if(input.value.length > 0){
                        addTxt();
                        save.remove();
                        cancel.remove();
                        allbtn.removeNamedItem("disabled");
                    }
                })

                cancel.addEventListener("click",function canceling(){
                    input.value = "";
                    save.remove();
                    cancel.remove();
                    allbtn.removeNameItem("disabled");
                })
            }
        }
    }
}

document.addEventListener("keypress",function removeKey(ev){
    if(ev.keyCode == '13'){
        add();
    }
})