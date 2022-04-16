console.log('Application started');
alert ('Application started');
document.write ('Application started');


console.log(a);
// eroras bus nuo sito nes a neaprasytas

var a = "aaaa";
    // senas budas

let b = 'bbb'; 
b = "aaa";
//  galima keisti reiksme
const c = 'ccc';
// nauji budai, let galima keisti, const negalima keisti, konstanta.

let showButton = true;


let iteration = 50;





console.log(typeof showButton);
console.log(typeof a);
console.log(typeof iteration);


const exampleArray = [1, 2, 'height', true];

const exampleObject = {
    name: 'belekas',
    age: 20,
    height: 180,
    width: 50,
    possessions: ['head', 'foot']
};

console.log(exampleArray);
console.log(exampleObject);


console.log(exampleObject.name);

const hello_world = `Hi, I'm ${exampleObject.name}`
console.log(hello_world);
console.log(hello_world.length);



function greeting() {
    console.log('greetings');




}


greeting();


function sumThreeNumber(a, b, c) {
    console.log('darome sum')
    return a + b + c;
}

let summedNumbers = sumThreeNumber(10, 20, 30);
console.log(summedNumbers);


function isMoreThanSum(a, sum) {
    return a > sum;
}

console.log(isMoreThanSum(100, summedNumbers))


for(var i = 1; i <= 100; i++) {
    document.write(i);
}




for(var i = 10; i <= 20; i++) {
    if(i % 2 === 0) console.log(i);
}

let x = 10;
while(x <= 20){
    console.log(x)
    x+=2;

}


let y = 10;
do{
    console.log(y)
    y+=2;

} while(y <= 20);





function iterateFromTo(fromNumber, ToNumber) {
    for(var i = fromNumber; i <= ToNumber; i++) {
        if(i % 2 === 0) console.log(i);
    }
}
iterateFromTo(10, 21);



let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('removed last element' numArray.pop());

numArray.push(20);
console.log('New Array:' + numArray);

numArray[1] = 0;

for (let i = 0; i <= numArray.length; i ++); {
    if ((i + 1) % 3 === 0) {
        numArray[i] = 1;

    }
}




function numbersInLoops(a, b, c) {
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i)
        }
    }
}
numbersInLoops(10, 20, 3);

