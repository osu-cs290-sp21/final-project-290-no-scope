const express = require('express')
const server = express()
var exphbs = require('express-handlebars')
var mongoose = require('mongoose'); //required in order to use MongoDB
const Article = require('./models/article');
var port = process.env.PORT||3000;

mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
    
})

/*(var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

MongoClient.connect({
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})*/



// Set up MongoDB



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

server.get("articles/:id", function(req, res, next){
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