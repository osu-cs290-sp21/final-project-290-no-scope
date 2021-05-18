const express = require('express');
const app = new express();
var fs = require('fs');

var homePage = fs.readFileSync('./pages/index.html');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.write(homePage);
    res.end();
});




app.listen(3000, () =>{
    console.log("Now listening on local port 3000.");
});
