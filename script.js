
//Allows user to enter a new list item with the enter keu
function handleKeyPress(e) {
	if(e.keyCode == 13) {
		addList();
	}
}

//Adds element to the todo list
function addList() {

	//creates a list item and adds it to the unordered list
	let ul = document.getElementById("list");
	let newItem = document.getElementById("inputArea").value;
	let li = document.createElement('li');

	li.appendChild(document.createTextNode(newItem));
	li.className ="listItem";
	ul.appendChild(li);

	document.getElementById("inputArea").value = '';

	//creates a span element with the close symbol and adds it to the end
	//of each list item
	let myNodeList = document.getElementsByClassName("listItem");
	
	let span = document.createElement("span");
		let txt = document.createTextNode("\u00d7");

		span.className = "close";
		span.appendChild(txt);

	for(let i = 0; i < myNodeList.length; i++) {
		
		myNodeList[i].appendChild(span);


	}

}