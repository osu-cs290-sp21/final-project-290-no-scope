const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs')
app.use('/articles', articleRouter)

app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {

        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description 2'
    }]
    res.render('articles/index', {articles: articles})
})


app.listen(3000);