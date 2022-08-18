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

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("list");
	li.addEventListener("click", wordCrossToggle);
	ul.appendChild(li);
	var listBtn = document.createElement("button");
	listBtn.textContent = "Delete";
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

function wordCrossToggle() {
	this.classList.toggle("done");
	console.log(this);
}

// function wordCrossToggle() {
// 	Array.from(listItems).forEach(listItem => {
// 		listItem.addEventListener("click", () => {
// 			listItem.classList.toggle("done");
// 			});
// 		});
// }

for (var i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", wordCrossToggle);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
