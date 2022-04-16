function Post(title, body) {
    this.title = title;
    this.body = body;
}

function User(username, email, password) {
    this.name = username;
    this.email = email;
    this.password = password;
    this.posts = [];

    this.addPost = function(post) {
        this.posts.push(post);
    }
    this.displayPosts = function() {
        for(let i = 0; i < this.posts.length; i++) {
            console.log(this.posts[i].title)
        }
    }
    this.removePost = function (post) {
        function isNotSamePost(postsFromArray){
            return post !== postsFromArray;
        }
        this.posts = this.posts.filter(isNotSamePost);
    }
}

const post1 = new Post("post1", "body1");
const post2 = new Post("post2", "body2");
const post3 = new Post("post3", "body3");

const user1 = new User("Useris1", "user@user.com", "1234");
const user2 = new User("Useris2", "user2@user.com", "123456");

user1.addPost(post1);
user1.addPost(post2);
user1.removePost(post1);
user1.displayPosts();








class Post{
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
}
class User{
    posts = [];
    constructor(username, email, password){
        this.name = username;
        this.email = email;
        this.password = password;
    }
    addPost = post => {
        this.posts.push(post);
    }
    displayPosts = () => {
        for(let i = 0; i < this.posts.length; i++) {
            console.log(this.posts[i].title)
        }
    }
    removePost = post => {
        this.posts = this.posts.filter(postsFromExistingArray => post.title !== postsFromExistingArray.title);
    }
    displayUserDetails = () => {
        const details= `User name is ${this.name}, user email is ${this.email}`
        console.log(details);
    }
}
const post1 = new Post("post1", "body1");
const post2 = new Post("post2", "body2");
const post3 = new Post("post3", "body3");

const user1 = new User("Useris1", "user@user.com", "1234");
const user2 = new User("Useris2", "user2@user.com", "123456");

user1.addPost(post1);
user1.addPost(post2);
user1.removePost(post1);
user1.displayPosts();
user1.displayUserDetails();
const arr = [post1, post2, post3];
const post = arr.find( postFromArray => postFromArray.title === "Post1")
console.log(post);





class Car{
    constructor(brand, model){
        let _brand = brand;
        this.model = model;

        this.getBrand = function() {
            return _brand;
        }
        this.setBrand = function(newBrand) {
            _brand = newBrand;
        }
    }
}

const car = new Car("Honda", "Civic");
console.log(car.getBrand());

car.setBrand("Mazda");
console.log(car.getBrand());





const sum = (b, c) => {    //arrow vietoj zodzio function pries skliaustus
    return b + c;
}
console.log(sum(2, 3));




const max = (c, v, b) => {
    return Math.max(c, v, b)
}
console.log(max(2, 5, 10));



const max = (c, v, b) => Math.max(c, v, b); //jei return tik vienas veiksmas, galima nerasyt return ir skliausteliu
console.log(max(2, 5, 10));



const plus5 = (a) => {            ///tas pats trim budais
    return a + 5;
}
const plus5_ = (a) => a+5;
const plus5__ = a => a+5;



const a = (b, c) => ({"sum": b + c}); //ismeta objekta o ne reiksme
const z = a(10,6);
console.log(z);  ///"sum": 16




var arr = [10, 11, 12, 30, 36];
function searcher(value, index, array) {
    return value > 20;
}
var item = arr.find(searcher);   ///find funkcija grazina 1 elementa, pirma is array kuris atitinka salyga
console.log(item);



var arr = [10, 11, 12, 30, 36];
var item = arr.find(el => el > 20);   ///tas pats su arrow funkcija
console.log(item);
var allAbove20 = arr.filter(el => el > 20);
console.log(allAbove20);  ///grazina visus virs 20





var name = 'John';
var surname = 'Doe';
var age = 22;
var text = 'My name is' + name + ' ' + surname + '. I am ' + age + ' years old.';
console.log(text); // My name is John Doe. I am 22 years old.




var name = 'John';
var surname = 'Doe';
var age = 22;
var text = `My name is ${name} ${surname}. I am ${age} years old.`; ///su konsoles kabutem
console.log(text); // My name is John Doe. I am 22 years old.





const car = {
    brand: "Honda",
    model: "Civic",
    year: 1999,
    displayBrand: () => console.log(this.brand),
    owner: "Owneris"
}
const { brand, model, year, displayBrand, owner } = car; ///destructinimas, penki properties i viena reiksme car
console.log(brand,model,year);
console.log(owner); ///galima istraukt po viena property is const





class Post{  //is postu istraukt tik title masyva
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
}

const post1 = new Post("post1", "body1");
const post2 = new Post("post2", "body2");
const post3 = new Post("post3", "body3");





class Post{  //is postu istraukt tik title masyva
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
}

const post1 = new Post("post1", "body1");
const post2 = new Post("post2", "body2");
const post3 = new Post("post3", "body3");

const posts = [post1, post2, post3];

const postsTitles = [];
for(let i=0; i<posts.length; i++) {
postsTitles.push(posts[i].title);
}
console.log(postsTitles);


class Post{  //tas pats su map funkcija
    constructor(title, body){
        this.title = title;
        this.body = body;
    }
}

const post1 = new Post("post1", "body1");
const post2 = new Post("post2", "body2");
const post3 = new Post("post3", "body3");
const posts = [post1, post2, post3];
const postsTitles = posts.map(post => post.title);
console.log(postsTitles);










class News {       						//tik postai kuriuose yra crime kategorija
	constructor(title, body, author, category) {
  	this.title = title;
    this.body = body;
    this.author = author;
    this.category = category
  }
}

const news1 = new News("news1", "newsBody1", "author1", "crime");
const news2 = new News("news2", "newsBody2", "author2", "politics");
const news3 = new News("news3", "newsBody3", "author3", "weather");
const news4 = new News("news4", "newsBody4", "author4", "crime");
const news5 = new News("news5", "newsBody5", "author5", "politics");
const news6 = new News("news6", "newsBody6", "author6", "crime");

const newsArray = [news1, news2, news3, news4, news5, news6];

class Post{  
    constructor(title, body = "Missing Body") {
        this.title = title;
        this.body = body;
    }
}

const post1 = new Post("post1", "body1");
const post2 = new Post("post2", "body2");
const post3 = new Post("post3", "body3");

const posts = [post1, post2, post3];

const postsTitles = posts.map(post => post.title);

console.log(postsTitles);

const crimePosts = newsArray.filter(news => news.category === "crime").map(news => new Post(news.title, news.body));

console.log(crimePosts);







class Person {
	constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;

        let address;

        this.setAddress = function(newAddress) {
            address - newAddress;
        }
        this.getAddress = function() {
            return address;
        }
    }
}
class Address {
    constructor(city, country) {
        this.city = city;
        this.country = country;
    }
}
const person0 = new Person ("Robertas", "Petrauskas", 42);
person0.setAddress(new Address("Paris", "France"));
console.log(person.address); ///undefined
console.log(person.getAddress): ///city: Paris, country: France

const person1 = new Person ("jonas", "jonaitis", 45)
const person2 = new Person ("tomas", "belekas", 35)
const person3 = new Person ("arvydas", "cypainis", 55)
const person4 = new Person ("petras", "zukauskas", 30)
const person5 = new Person ("gediminas", "zemaitis", 20)

person1.setAddress(new Address("Kaunas", "Lietuva"));
person2.setAddress(new Address("Barcelona", "Spain"));

