var f = function(a){
	return a * 5;
}

var minus5 = function(a) {
	return a - 5;
}

function go(n, func, func2){
	if (n < 30) {
  	return func(n);
  }
	return func2(n);
}

var a = prompt("how old are you?")

console.log(go(a, f, minus5));


var func = function () {
	var counter = 0;
  return function () {
  	return counter += 1;
  }
}

var count1 = func();

console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());



var z = 4;

var t = function(z) {
	console.log(z);
}

t(5);


var obj = { name: "pencil", price: 10};
var x = 15;

function change(product, newPrice){
    var product =  obj //raktas i seifa;
    var newPrice = 15; 
    product.price = newPrice;

    newPrice = 0;
  
    product.price = 66;
}


function cloneObj(product, newPrice) {
 var newProduct = {};
  newProduct.name = product.name;
  newProduct.price = newPrice;
  return newProduct;
}
change(obj, 60);

var newObject = cloneObj(obj, x);
console.log(newObject);

console.log(obj);



var myTechStack = ["html", "css", "Js"];

function createNewAndAddToArray(arr, newValue) {
	var newArr = [];
  for(var i = 0; i<arr.length; i= i+1) {
  	newArr.push(arr[i]);
  }
  
  newArr.push(newValue);
  
  return newArr;
}

var myFutureTechStack = createNewAndAddToArray(myTechStack, "Angular");

console.log(myFutureTechStack)

console.log(myTechStack)



var numbers = [1,2,3,4,5];

function plus5(n) {
	return n + 5;
}

function modify (arr, callBack) {
	var newArr = [];
  for(var i = 0; i<arr.length; i++) {
  	newArr[i] = callBack(arr[i]);
  }
  return newArr;
}
  
var newNumbers = modify(numbers, plus5)

console.log(numbers);

console.log(newNumbers);




let x = 1;

if (1==1){
	let x = 2;
  console.log(x);
}

console.log(x);



var x = 1;

if (1==1){
	var x = 2;
  console.log(x);
}

console.log(x);



var x = 1;

if (1==1){
	let x = 2;
  console.log(x);
}

console.log(x);




function a(x){
	console.log(x);
  
  if(x>0){
  	a(x-1);
  }
}

a(5);





function carFactory(brand, model, year) {
	return {
   brand: brand,
   model: model,
   year: year
  };
}  

var mustang = carFactory("ford", "mustang", 1967);
console.log(mustang)

var zhiguli = carFactory("Lada", 21011, 1972);

console.log(zhiguli)





function car(brand, model, year) {
	this.brand = brand;
  this.model = model;
  this.year = year;
}  

const mustang = new car("ford", "mustang", 1967);
const astra = new car("opel", "astra", 1999);
console.log(mustang);
console.log(astra);



function person(name, lastName, age) {
	this.name = name;
  this.lastName = lastName;
  this.age = age;
}

const person1 = new person("jonas", "zemaitis", 1988);
const person2 = new person("petras", "kurmelis", 1955);
console.log(person1);
console.log(person2);




var obj= {
	"id":1,
  "name": "something"
};

var x = JSON.stringify(obj);
console.log(x);







const xhttp = new XMLHttpRequest();
console.log(xhttp.readyState);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var jsonString = this.response;
        var jsonResponse = JSON.parse(jsonString);
        
    }
  };
  console.log(xhttp.readyState, 'before open');
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
 console.log(xhttp.readyState, 'after open');
xhttp.send();







function Post(id, title, body) {
  this.id = id;
    this.title = title;
    this.body = body;
}

function createNewArrayFromResponse(jsResp) {
  const newArr  = [];
    for(let i = 0; i < jsResp.length; i++) {
      var currentObj = jsResp[i];
      newArr[i] = new Post(currentObj.id, currentObj.title, currentObj.body);
    }
    return newArr;
}
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var jsonString = this.response;
        var jsonResponse = JSON.parse(jsonString);
        
        const newArr = createNewArrayFromResponse(jsonResponse);
        console.log(newArr);
        
        document.getElementById('main').innerHTML = jsonResponse[0].body;
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();