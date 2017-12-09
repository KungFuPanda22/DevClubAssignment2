function todoList(){
			var value=document.getElementById("addTodo").value;
			var text=document.createTextNode(value);
			var newvalue=document.createElement("div");
			newvalue.style.fontSize="20px";
			newvalue.style.backgroundColor="#D3D3D3";
			newvalue.appendChild(text);
			newvalue.onclick=function(){newvalue.style.setProperty("text-decoration", "line-through");}
			document.getElementById("inputarea").appendChild(newvalue);
		}