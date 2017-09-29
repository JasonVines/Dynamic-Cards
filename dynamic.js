'use strict';
console.log('Dynamic Cards');


let button = document.getElementsByClassName('button');
let node = document.getElementsByClassName('card');


// Event Listener for the "Create" button
document.getElementById('btn-newCard').onclick = function() {
	card();
};


// Event Listener for 'Enter' key
let textInput2 = document.getElementById('textInput');

textInput2.addEventListener('keyup', function (event) {
	if (event.which === 13) {
    card();
	}
})


// Build a new card when the 'Create' button is clicked
function card() {
	let textInput = document.getElementById('textInput').value;
	let htmlOutput = '<div class="card"><textarea class="unhide" name="" rows="15" cols="20">' + textInput + '</textarea><br><button class="btn-deleteCard button" type="button">Delete This Card</button></div><textarea id="jsInput"></textarea>';
	
	document.getElementById('jsInput').outerHTML = htmlOutput;
	document.getElementById('textInput').value = " ";
	button = document.getElementsByClassName('button');
	node = document.getElementsByClassName('card');
		
	// Event Listener for the "Delete" button
	for (let i = 0; i < node.length; i++) {
		node[i].addEventListener('click', removeCard, false);
	}
}


// Delete selected card from HTML
Object.prototype.removeCard = function(){
    this.parentNode.removeChild(this);
};