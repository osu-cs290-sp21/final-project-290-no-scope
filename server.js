const express = require('express')
const server = express()
var exphbs = require('express-handlebars')
var fs = require('fs');
var port = process.env.PORT||3000;

const Article = require('./models/article');


// Serve static files
server.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
server.set('view engine', 'hbs')
server.use(express.static('public'))


//---Andrews Playground--------------------------------------------------------

//Here is where I connect the blog.db file into db and adding the library
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('blog.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }else{
    console.log('Connected to the database.');
  }
});

function getPostInfo(){
  var postArray = new Array() //blank array to hold all posts
  var iterator = 0;
  //Here I am selecting specific elements from the table I created within the Database
  //And checking for any errores that occure if not I am printing the different elements of the table
  db.serialize(() => {
    db.each(`SELECT id as id,
                    title as title,
                    author as author,
                    description as description,
                    content as content,
                    date as date
            FROM blog_post`, (err, row) => {
      if (err) {
        console.error(err.message);
        console.log("Cannot find columns")
      }
      console.log("------------------------------------------------")
      console.log(row.id);
      console.log(row.title)
      console.log(row.author)
      console.log(row.description)
      console.log(row.content)
      console.log(row.date)
      console.log("------------------------------------------------")
      
      var singleEntry = new Array() //array to represent a single post
      singleEntry.push(row.id)//0
      singleEntry.push(row.title)//1
      singleEntry.push(row.author)//2
      singleEntry.push(row.description)//3
      singleEntry.push(row.content)//4
      singleEntry.push(row.date)//5
      
      postArray.push(singleEntry) 

      //Post array is an array of arrays, with each index of the sub array being an element of the post.
    });
  });
  return postArray;
}

function getSinglePost(idx){
  var postArray = new Array() //blank array to hold all posts
  var iterator = 0;
  db.serialize(() => {
    let sql = `SELECT id as id, title as title, author as author, description as description, content as content, date as date FROM blog_post`
    db.each(sql, (err, row) => {
      if (err) {
        console.error(err.message);
        console.log("Cannot find columns")
      }
     
      var singleEntry = new Array() //array to represent a single post
      
      if(idx == row.id){
        console.log("Entered if idx == row.id")
        singleEntry.push(row.id)//0
        singleEntry.push(row.title)//1
        singleEntry.push(row.author)//2
        singleEntry.push(row.description)//3
        singleEntry.push(row.content)//4
        singleEntry.push(row.date)//5
        

        postArray.push(singleEntry) 
        /*console.log("returning postArray")
        return postArray*/
      }
      
    });
    /*console.log('returning 0')
    return 0;*/
  })
    return postArray
}


function validateIndex(idx){
  var postCounter = 0;
 `SELECT COUNT(*) as num FROM blog_post` 
}
  



//-----------------------------------------------------------------------------


server.get("/", function(req, res, next){
    var posts = getPostInfo()
    res.status(200).render("homePage",{articles:posts});
});

server.get("/new", function(req, res, next){
    res.status(200).render("newPost",{
    //serve blog posts from mongodb or other database (figure out how)
    })
    return;
});

server.get("/posts/:idx", function(req, res, next){
    var article = getSinglePost(req.params.idx)
    if(article === 0){
      console.log("entered if article == null")
      res.status(404).render('404')}

    else{res.status(200).render('singlePost', {articles:article})}
})



server.get("/edit/:id", function(req, res, next){
    res.status(200).render("editPost",{
    //serve blog posts from mongodb or other database (figure out how)
    })
    return;
});


server.get("*", function(req, res){
    res.status(404).render("404",{
    //404 Comment not found
    })
    return;
});

// server.get('/blog', (req, res) => {
//     res.send("Blog Page")
// })

// Exports our server for use elsewhere
module.exports = server



server.listen(port, function () {
  console.log("== Server is listening on port", port);
});
