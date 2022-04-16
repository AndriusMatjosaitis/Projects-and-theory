const movie = {
	title: "Titanic",
  year: 1997,
  director: "James Cameron",
  showTitle: function () {
  console.log(this.title);
  }
};
movie.title="pearl harbor";
movie.showTitle();





var user = {
	name: "User",
  email: "user@user.lt",
  password: "password123",
  changePassword: function(oldPassword, newPassword) {
  	if(oldPassword === this.password) {
    	this.password = newPassword;
      console.log("Password has changed");
      return;
    }
    console.log("Wrong password");
  }
}  
console.log(user.password);
user.changePassword("password123", "Naujas");
console.log(user.password);






function User(name, email, password) {
	this.name = name;
  this.email = email;
	this.password = password;
  this.changePassword = function(oldPassword, newPassword) {
  	if(oldPassword === this.password) {
    	this.password = newPassword;
      console.log("Password has changed");
      return;
    }
    console.log("Wrong password");
  }
}  

const user1 = new User("Useris", "user@user.com", "1234");
const user2 = new User("Useris", "user@user.com", "1234");
console.log(user1 == user2);
console.log(user1 instanceof User);
console.log(user1 instanceof Object);







const time = new Date().getTime()
const time1 = new Date().getDate()
console.log(time1);
console.log(time);
const t = new Date(time1 - 1000*60*60*24*365)
console.log(t);








function Post(title, body) {
	this.title = title;
  this.body = body;
  this.date = new Date().getTime();
}
const Post1 = new Post("Post1", "Hello Posts");
console.log(Post1);










function Post(title, body) {
	this.title = title;
  this.body = body;
  this.date = new Date().getTime();
}
function User(name, email, password) {
	this.posts = [];
	this.name = name;
  this.email = email;
	this.password = password;
  this.changePassword = function(oldPassword, newPassword) {
    if(oldPassword === this.password &&
       newPassword != this.password && newPassword.length > 8) {
    	  this.password = newPassword;
        console.log("Password has changed");
        return;
    }
    console.log("Wrong password");
  }
  this.addPost = function(post) {
		this.posts.push(post);  
  }
}  
const user1 = new User("Useris1", "user@user.com", "1234");
const user2 = new User("Useris2", "user@user.com", "1234");

const post1 = new Post("Post1", "Hello Posts");
user1.addPost(post1);
user2.addPost(post1);
user1.posts[0].title = "Changed title";
console.log(user1);
console.log(user2);








var movie = function(newTitle, newDirector) {
	let title = newTitle;
  let director = newDirector;
  this.info = function() {
  	console.log(title + " by " + director);
  }
}
var m = new movie("Titanic", "James Cameron");
m.info(); //Titanic by James Cameron
console.log(m.title); // undefined






