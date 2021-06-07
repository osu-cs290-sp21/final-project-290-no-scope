const express = require('express')
const server = express()
var exphbs = require('express-handlebars')
var fs = require('fs');
var port = process.env.PORT || 3000;

const Article = require('./models/article');


// Serve static files
server.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
server.set('view engine', 'hbs')
server.use(express.static('public'))


//---Andrews Playground--------------------------------------------------------

//Here is where I connect the blog.db file into db and adding the library
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('blog.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the database.');
  }
});

var postArray = new Array();
var iterator = 0;

//Here I am selecting specific elements from the table I created within the Database
//And checking for any errores that occure if not I am printing the different elements of the table
let dbResponse = async () => {


  let response = await new Promise((resolve, reject) => {
    var query = `SELECT id as id,
    title as title,
    author as author,
    description as description,
    content as content,
    date as date
    FROM blog_post`
    
    db.each(query, (err, row) => {
      if (err) {
        console.error(err.message);
        console.log("Cannot find columns")
        reject(new Error("Connection gone bad"))
      }

      else {
        
        resolve(row)
      }
    })
  }).catch(err => console.log(err));
  var resp = JSON.parse(JSON.stringify(response))
  return resp;
}

//-----------------------------------------------------------------------------



server.get("/", async (req, res) => {
  var resp = await dbResponse()
  //console.log(JSON.stringify(resp));
  console.log(resp)
  res.status(200).render("homePage", { articles: resp });
  console.log("GET request recieved from /")
});

server.get("/new", function (req, res, next) {
  res.status(200).render("newPost", {
  })
  console.log("GET request recieved from /new")

});

server.get("/:id", function (req, res, next) {
  var article = Article.findOne({ id: req.params.id }).lean();
  if (article == null) { res.redirect('404') }

  res.status(200).render('singlePost', { article: Article })
  console.log("GET request recieved from /:id")
})



server.get("/edit/:id", function (req, res, next) {
  res.status(200).render("editPost", {
    //serve blog posts from mongodb or other database (figure out how)
  })
  console.log("GET request recieved from /edit/:id")
});


server.get("*", function (req, res) {
  res.status(404).render("404", {
    //404 Comment not found
  })
  return;
});

// server.get('/blog', (req, res) => {
//     res.send("Blog Page")
// })

// Exports our server for use elsewhere


server.listen(port, () => {
  console.log("== Server is listening on port", port)
});
module.exports.server = server