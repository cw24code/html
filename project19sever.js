const express = require('express');
const app  = express();
 
app.listen(8080, function(){
    console.log('listening on 8080')
});

app.get('/pet',function(req,res){
    res.send('안녕하세요')
}); 

app.get('/car',function(req,res){
    res.sendFile(__dirname + '/index.html')    
});


//req res