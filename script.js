
//Allows user to enter a new list item with the enter key
function handleKeyPress(e) {
	if(e.keyCode == 13) {
		addList();
	}
}

//creates a list item and adds it to the unordered list
function addList() {

	//gets the unordered list and creates a new li called listItem
	let ul = document.getElementById("list");
	let li = document.createElement('li');
	li.className ="listItem";

	//creates a p called listText to go inside listItem and 
	//the text newItem was the userInput
	let p = document.createElement("p");
	let newItem = document.getElementById("inputArea").value;
	p.appendChild(document.createTextNode(newItem));
	p.className = "listText";
	li.appendChild(p);
	

	//creates a span element with the close symbol and adds it to the end
	//of each list item
	let span = document.createElement("span");
	let txt = document.createTextNode("\u00d7");
	span.className = "close";
	span.appendChild(txt); 
	li.appendChild(span);

	//adds a li containing the p and span element to the ul list
	ul.appendChild(li);

	//resets the input field
	document.getElementById("inputArea").value = '';

}