function Post(postTitle, postBody) {
 this.title = postTitle;
  this.body = postBody;
  this.date = new Date().getTime();
}

function User(name, email, password) {
  this.posts = [];
 this.name = name;
  this.email = email;
  this.password = password;
  this.changePassword =  function(oldPassword, newPassword){
    if(oldPassword === this.password) {
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
const user2 =  new User("Useris2", "user@user.com", "1234");

const post1 = new Post("Post1", "Hello Posts");

user1.addPost(post1);

user2.addPost(post1);









function Category(id, title) {
    this.id = id;
    this.title = title;
}

function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

const shoesCategory = new Category("1", "Shoes");
const pantsCategory = new Category("2", "Pants");

const nike = new Product("Air nike", 20, shoesCategory);
const adidas = new Product("Ad80", 25, shoesCategory);
const pants = new Product("Puma", 30, pantsCategory);


function Cart() {
    this.products = [];

    this.addProduct = function(productToPush) {
        this.products.push(productToPush);
    }

    this.displayProductsName = function() {
        for(let i = 0; i< this.products.length; i++) {
            console.log(this.products[i].name);
        }
    }
}

const newCart = new Cart();

newCart.addProduct(nike);
newCart.addProduct(adidas);
newCart.addProduct(pants);

newCart.displayProductsName();