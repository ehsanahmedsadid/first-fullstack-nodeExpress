const express = require('express');
const {readFile} = require('fs')

const app = express();

app.get('/', (request, response) => {
    console.log(request.url);
    readFile('./index.html', 'utf-8', (err,file) => {
        if(err){
            response.status(500).send("sorry, out of order");
        }
        response.send(file);
    });
    

});
app.get('/favicon.ico', (request, response) => {
    console.log(request.url);
    readFile('./favicon.ico', (err, icon) => {
        if(err){
            response.status(500).send("sorry, out of order");
        }
        response.send(icon);
    });
    

});
app.get('/%F0%9F%98%AD', (request, response) => {
    console.log(request.url)
    response.send("<h1>why you crying?</h1>");
    });
    
app.listen(process.env.PORT || 3000, ()=> console.log("App stared at http://localhost:3000"));
