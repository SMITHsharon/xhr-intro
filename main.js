
// console.log("writing to console");

function executeThisCodeAfterFileLoaded(){
	console.log("It worked!!!");
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
console.log("myRequest", myRequest);

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