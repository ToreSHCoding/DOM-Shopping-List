// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");


// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);



var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByClassName("list");
var delBtn = document.getElementsByClassName("delBtn");
var delAll = document.getElementById("delAll");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("list");
	// allows wordCrossToggle() to work with newly created li elements from DOM
	li.addEventListener("click", wordCrossToggle);
	ul.appendChild(li);
	var listBtn = document.createElement("button");
	listBtn.textContent = "Delete";
	// allows delListItem() to work with newly created li/delBtn elements from DOM
	listBtn.addEventListener("click", delListItem);
	listBtn.classList.add("delBtn");
	li.appendChild(listBtn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// function to toggle line-through on text of li
function wordCrossToggle() {
	this.classList.toggle("done");
}

// function wordCrossToggle() {
// 	Array.from(listItems).forEach(listItem => {
// 		listItem.addEventListener("click", () => {
// 			listItem.classList.toggle("done");
// 			});
// 		});
// }

// ======ALTERNATIVE WAY TO MAKE WORDCROSS TOGGLE WORK THROUGH EVENT DELEGATION=======

// var ulTag = document.getElementById("ul-tag");

// ulTag.addEventListener("click", function (e) {
// 	target = e.target;

// 	if (target.matches("li")) {
// 		target.classList.toggle("done")
// 	}
// 	console.log(target);
// })

// ====================================================================================

// function to allow list items to be deleted when delBtn is pressed
function delListItem() {
	this.parentNode.remove()
}

// function for delAll button to delete all items in the list at once
function delAllList() {
	Array.from(listItems).forEach(listItem => {
		listItem.remove()
	})
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// for loop that allows wordCrossToggle() on existing li elements within HTML
for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", wordCrossToggle);
}

// for loop that allows delListItem() on existing delBtn elements within HTML
for (var i = 0; i < delBtn.length; i++) {
	delBtn[i].addEventListener("click", delListItem)
}

delAll.addEventListener("click", delAllList)