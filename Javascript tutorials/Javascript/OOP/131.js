class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}

class User {
    posts = [];
    
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
      

    addPost = function(post) {
        this.posts.push(post);
    }

    displayPosts = function() {
        for(let i = 0; i < this.posts.length; i++ ) {
            console.log(this.posts[i].title);
        }
    }

    removePost = function(post) {
        function isNotSamePost(postFromExistingArray) {
            return post !== postFromExistingArray;
        }
         
        this.posts = this.posts.filter(isNotSamePost);
    }
}

const post1 = new Post("Post1", "Body1");

const post2 = new Post("Post2", "Body2");

const user = new User("Useris","emal@email.com","1234");

user.addPost(post1);
user.addPost(post2);
user.removePost(post1);
user.displayPosts();








class Post {
    constructor(title, body = "Missing body") {
        this.title = title;
        this.body = body;
    }
}
const post1 = new Post("Post1", "Body1");

const post2 = new Post("Post2");

const arr = [post1, post2];

const post = arr.find();

console.log(post);








class Post {
    constructor(title, body = "Missing body") {
        this.title = title;
        this.body = body;
    }
}

const post1 = new Post("Post1", "Body1");

const post2 = new Post("Post2");








class News {
    constructor(title, body, author, category) {
        this.title= title;
          this.body = body;
          this.author = author;
          this.category = category
      }
  }
  
  const news1 = new News("news1", "newsBody1", "author1","crime");
  const news2 = new News("news2", "newsBody2", "author2","politics");
  const news3 = new News("news3", "newsBody3", "author1","weather");
  const news4 = new News("news4", "newsBody4", "author2","crime");
  const news5 = new News("news5", "newsBody5", "autho31","politics");
  const news6 = new News("news6", "newsBody6", "author1","crime");
  
  class Post {
      constructor(title, body = "Missing body") {
          this.title = title;
          this.body = body;
      }
  }
  
  const post1 = new Post("Post1", "Body1");
  
  const post2 = new Post("Post2");
  
  const posts = [post1, post2];
  
  const postsTitles= posts.map(post =>  post.title);
  
  console.log(postsTitles); 








  class News {
    constructor(title, body, author, category) {
        this.title= title;
          this.body = body;
          this.author = author;
          this.category = category
      }
  }
  
  const news1 = new News("news1", "newsBody1", "author1","crime");
  const news2 = new News("news2", "newsBody2", "author2","politics");
  const news3 = new News("news3", "newsBody3", "author1","weather");
  const news4 = new News("news4", "newsBody4", "author2","crime");
  const news5 = new News("news5", "newsBody5", "autho31","politics");
  const news6 = new News("news6", "newsBody6", "author1","crime");
  const newsArray = [news1, news2, news3, news4, news5, news6];
  class Post {
      constructor(title, body = "Missing body") {
          this.title = title;
          this.body = body;
      }
  }
  
  const post1 = new Post("Post1", "Body1");
  
  const post2 = new Post("Post2");
  
  const posts = [post1, post2];
  
  const postsTitles= posts.map(post =>  post.title);
  
  const crimeNews = newsArray.filter(news => news.category === "crime")       
  
  
  const crimePosts = crimeNews.map(({title, body}) => new Post(title, body));
  
  console.log(crimePosts);










  