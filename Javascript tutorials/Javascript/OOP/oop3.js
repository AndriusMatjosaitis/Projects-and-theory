let t = 10;

const b = Math.floor(Math.random() * 10);

if(b > 4) {
	t = 6;
}

function z() {
	let t = 5; //nuemus let reiksme tampa globali ir console.log tada 5
}

z();

console.log(t);  ////random skaicius 10 arba 6






let pen = {color: "black", price: 10};

function z(obj, newPrice) {
	obj.price = newPrice;
}

z(pen, 15); ///jei neparasyta 15 tada black ir undefined ismes

console.log(pen);  





let pen = {color: "black", price: 10};

function z(obj, newPrice) {
	const newObj = {};
  newObj.color = obj.color;
  newObj.price = newPrice;
	return newObj;  
}

const zObj = z(pen, 15); ///be const meta pirmaji pen jei console.log(pen)
console.log(zObj);  





let pen = {color: "black", price: 10};

function z(obj, newPrice) {
	this.color = obj.color;
  this.price = newPrice;
}

const zObj = new z(pen, 20); 
console.log(zObj);  





let pen = {color: "black", price: 10};

const z = (obj, newPrice) => {
	const {color} = obj;
  return {color, price: newPrice};
}
const zObj = z(pen, 15); 
console.log(zObj);  





let pen = {color: "black", price: 10};

const z = (obj, price) => ({color:obj.color, price})
	
const zObj = z(pen, 15); 
console.log(zObj);  





let pen = {color: "black", price: 10, size:"M", company: "M&M"};

const z = ({color, size, company}, price) => ({color, size, company, price})
	
const zObj = z(pen, 15); 
console.log(zObj);  




let pen = {color: "black", price: 10, size:"M", company: "M&M"};

const z = (obj, price) => ({...obj, price}) /// jei rasytume newPrice ir nenurodyt :price tada sukuria nauja property
	
const zObj = z(pen, 15); 
console.log(zObj);  




let pen = {color: "black", price: 10};
let pen1 = {color: "black", price: 15};
let pen2 = {color: "black", price: 20};
let pen3 = {color: "black", price: 30};
let pen4 = {color: "black", price: 60};

const pens = [pen, pen1, pen2, pen3, pen4];

	
const pensWithNewPrice = []; 
	for(let i=0; i < pens.length; i++) {
  	const oldObj = pens[i];
  	pensWithNewPrice.push({...oldObj, price: oldObj.price + 10});
}
console.log(pens);
console.log(pensWithNewPrice);





let pen = {color: "black", price: 10};
let pen1 = {color: "black", price: 15};
let pen2 = {color: "black", price: 20};
let pen3 = {color: "black", price: 30};
let pen4 = {color: "black", price: 60};

const pens = [pen, pen1, pen2, pen3, pen4];

	
const pensWithNewPrice = pens.map(obj => ({...obj, price: obj.price+10})); 

console.log(pens);
console.log(pensWithNewPrice);






let pen = {color: "black", price: 10};
let pen1 = {color: "black", price: 15};
let pen2 = {color: "black", price: 20};
let pen3 = {color: "black", price: 30};
let pen4 = {color: "black", price: 60};

const pens = [pen, pen1, pen2, pen3, pen4];

	
const pensWithNewPrice = pens.filter(obj => obj.price +10 >=30).map(obj => ({...obj, price: obj.price+10}))


console.log(pens);
console.log(pensWithNewPrice);






let pen = {color: "black", price: 10, address: {country: "Lietuva", city: "Vilnius"}};
let pen1 = {color: "black", price: 15, address: {country: "Lietuva", city: "Vilnius"}};
let pen2 = {color: "black", price: 20, address: {country: "Lietuva", city: "Vilnius"}};
let pen3 = {color: "black", price: 30, address: {country: "Lietuva", city: "Vilnius"}};
let pen4 = {color: "black", price: 60, address: {country: "Lietuva", city: "Vilnius"}};

const pens = [pen, pen1, pen2, pen3, pen4];


const pensWithNewPrice = [];

for(let i = 0; i < pens.length; i++) {
	const oldObject = pens[i];
  if(oldObject.price + 10 >= 30) {
  	const newObject = {};
    newObject.color = oldObject.color;
    newObject.price = oldObject.price + 10;
    newObject.address = {country: oldObject.address.country, city: "Trakai"}
    pensWithNewPrice.push(newObject);
    }
}

console.log(pensWithNewPrice);





let pen = {color: "black", price: 10, address: {country: "Lietuva", city: "Vilnius"}};
let pen1 = {color: "black", price: 15, address: {country: "Lietuva", city: "Vilnius"}};
let pen2 = {color: "black", price: 20, address: {country: "Lietuva", city: "Vilnius"}};
let pen3 = {color: "black", price: 30, address: {country: "Lietuva", city: "Vilnius"}};
let pen4 = {color: "black", price: 60, address: {country: "Lietuva", city: "Vilnius"}};

const pens = [pen, pen1, pen2, pen3, pen4];

const pensWithNewPrice = pens.filter(obj => obj.price +10 >=30)
							.map(obj => ({...obj, price: obj.price + 10, address: {...obj.address, city: "Trakai"}}))

console.log(pensWithNewPrice);





