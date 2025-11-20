
 function addTask() {
            let taskText = document.getElementById("taskInput").value;

            if (taskText === "") {
                alert("enter");
                return;
            }

            let li = document.createElement("li");
            li.textContent = taskText;
            let delbtn = document.createElement("button");
            delbtn.textContent = "Delete";
            delbtn.onclick = function() {
                li.remove();
            }

            li.appendChild(delbtn);

            document.getElementById("taskList").appendChild(li);

            document.getElementById("taskInput").value = "";
        }


