const express = require('express');
const {readFile} = require('fs')

const app = express();

app.get('/', (reqest, response) => {
    
    readFile('./index.html', 'utf-8', (err,html) => {
        if(err){
            response.status(500).send("sorry, out of order");
        }
        response.send(html);
    });
    

});
app.get('/favicon.ico', (reqest, response) => {
    
    readFile('./favicon.ico', (err, html) => {
        if(err){
            response.status(500).send("sorry, out of order");
        }
        response.send(html);
    });
    

});
app.listen(process.env.PORT || 3000, ()=> console.log("App stared at http://localhost:3000"));
