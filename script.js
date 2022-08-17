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
	ul.appendChild(li);
	var listBtn = document.createElement("button");
	listBtn.textContent = "Delete";
	listBtn.classList.add("delBtn");
	li.appendChild(listBtn);
	input.value = "";

	wordCross();
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

// function wordCross() {
// 	listItem.classlist.toggle("done");
// }

function wordCross() {
	Array.from(listItems).forEach(listItem => {
		listItem.addEventListener("click", () => {
			listItem.classList.toggle("done");
			console.log(listItem)
			});
		});
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

wordCross();
