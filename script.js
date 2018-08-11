
function handleKeyPress(e) {
	if(e.keyCode == 13) {
		addList();
	}
}

function addList() {


	let ul = document.getElementById("list");
	let newItem = document.getElementById("inputArea").value;
	let li = document.createElement('li');
	let button = document.createElement("button");
	button.innerHTML = "\u00d7";

	button.className = "close";

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(button);
	ul.appendChild(li);

	document.getElementById("inputArea").value = '';

}