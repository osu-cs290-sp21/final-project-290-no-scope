const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose') //required in order to use MongoDB
const Article = require('./models/article') //this would be a partial in Handlebars
const methodOverride = require('method-override')


mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
    
})



app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


app.get('/', async (req, res)=>{
    const articles = await Article.find().sort({ createdAt: 'desc'})
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)
app.listen(3000);