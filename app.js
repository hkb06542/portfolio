const express = require('express');
const hbs = require('hbs');
const path = require('path');


var app = express();

//using static content
app.set(express.static(__dirname + '/public'));// use it for express only
app.use(express.static(path.join(__dirname, '/public')));//use it for HBS handlebar js moduleheroki

//using the express framwork
app.set('view engine','hbs');

//registering partial for the hbs , views will be the default folder of the hbs
hbs.registerPartials(__dirname + '/view/partials')

app.get('/404',(req, res)=>{

    res.send('<h1>Mallo Land the Movie....</h1>');
    
});

app.get('/',(req, res)=>{

    res.render('app.hbs');
    
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is up and running on Port:${port}`);
});