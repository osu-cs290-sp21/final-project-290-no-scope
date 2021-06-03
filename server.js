const express = require('express')
const server = express()
var exphbs = require('express-handlebars')
const Article = require('./models/article');
var port = process.env.PORT||3000;


// Serve static files
server.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Set up routes
server.get("/", function(req, res, next){
    Article.find({}).lean()
        .exec(function(err, article){
        res.status(200).render("homePage",{articles:article});
    })


    return;
});

server.get("/new", function(req, res, next){
    res.status(200).render("newPost",{
    //serve blog posts from mongodb or other database (figure out how)
    })
    return;
});

server.get("/:id", function(req, res, next){
    var article =  Article.findOne({id:req.params.id}).lean();
    if(article == null){res.redirect('404')}

    res.status(200).render('singlePost', {article:Article})
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

server.listen(port)
