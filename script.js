
function handleKeyPress(e) {
	if(e.keyCode == 13) {
		addList();
	}
}

function addList() {


	let ul = document.getElementById("list");
	let newItem = document.getElementById("newTodo").value;
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(newItem));
	ul.appendChild(li);

	document.getElementById("newTodo").value = '';

}