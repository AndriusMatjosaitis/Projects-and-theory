alert('test')

console.log("hello");


// //type number
// let age = 30;
//
// //type string
// const name = "Andrius";
//
// //type boolean
//
// const isTrue = true;
//
// //type null
// const rudutukas = null;
//
// //type undefined
//
// const lopas = undefined;
// let x;
//
// console.log(age, name, isTrue, rudutukas, lopas, x);
//

const age = 30;
const isTired = false;

console.log(`My age is ${age} and i am not ${isTired}`);

const random = "Hello my name is some random name";

console.log(random.substring(0, 10).toUpperCase());

console.log(random.split(", "));

const books = [
    'text',
    {
        test: 'test'
    }
];

console.log(books);

books.push('five');

const person = {
    firstName: "Andrius",
    lastName: "Matjosaitis",
    age: 33,
    email: "rudas@rudas.lt",
    likes: ["music", "movies", "games"],
    address: {
        city: "Kaunas",
        street: "Galves",
        house: 19,
        country: "Lithuania"
    }
}

console.log(person.address.country)
console.log(person.likes[1])

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}