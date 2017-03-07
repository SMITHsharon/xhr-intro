
console.log("First line in JS file: ", Date.now());

// console.log("writing to console");
var dinoContainer = document.getElementById("dinoContainer");
function makeDOM(xhrData){

	var dinosaurString = "";
	var currentDinosaur;

	for (var i=0; i<xhrData.dinosaurs.length; i++) {
		currentDinosaur = xhrData.dinosaurs[i];
		
			dinosaurString += `<div class="col-sm-6 col-md-4">`;
			dinosaurString += `<div class="thumbnail">`;
			dinosaurString += `<img src="${currentDinosaur.url}" alt="dino">`;
			dinosaurString += `<div class="caption">`;
			dinosaurString += `<h3>${currentDinosaur.name}</h3>`;
			dinosaurString += `<p>Is a ${currentDinosaur.type}</p>`;
			dinosaurString += `<p>Like to eat: ${currentDinosaur.food}</p>`;     
			dinosaurString += `</div></div></div>`;
	}
	dinoContainer.innerHTML = dinosaurString;
}

function executeThisCodeAfterFileLoaded(){
	// console.log("It worked!!!", this.responseText);
	console.log("Data Returned: ", Date.now());
	var data = JSON.parse(this.responseText);
	// console.log("It worked!!!", data);
	makeDOM(data);
}

function executeThisCodeAfterFileFails(){
	console.log("booooooo");
}



var myRequest = new XMLHttpRequest();
// <new> is a constructor for an object
// creates a copy of that object and whatever it has in it (its properties)
// if need to make two different requests
// var myRequest2 = new XMLHttpRequest();

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
// console.log("myRequest", myRequest);

console.log("Last line in JS file: ", Date.now());

// GET
// POST :: sending file
// PUT :: like an update
// DELETE


























// SHE DELETED ALL OF THIS:
// XHR :: XMLHttpRequest
// Allows you to transfer data from one place to another

// two formats:
// JSON -- most common ; Javascript Object Notation / can use interchangeably w any C-based language
// XML -- sadness

// var x = 5;

// div.innerHTML = x; // synchronist request

// var y = 4;

// div.innerHTML += y // =9




// var z = some XHR request;

// div.innerHTML += z; /// javascript won't wait for the XHR request :: undefined

// function doStuff(){
// 	div.innerHTML += z // javascript is ok if statement is wrapped in a function
// }
// div.addEventListener("click", doStuff)