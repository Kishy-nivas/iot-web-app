const express = require('express');
const app = express(); 
const PORT = 8000; 
var path = require('path');
var  bodyParser = require('body-parser'); // to parse the incoming requests 
var http = require('http').Server(app);  // bind the app with http server 
var io = require('socket.io')(http);   // bind the http with socket 
var mongoose = require('mongoose');    // mongoDb client 
var cors = require('cors'); 
app.use(cors()); // cross-site origin 
app.use(express.json()); //  parse-request body
app.use(express.urlencoded({ extended: false }));

var dbUrl = "mongodb://127.0.0.1:27017/library-app";


mongoose.connect(dbUrl,{useNewUrlParser : true},(err)=>{
    if(!err) console.log("connection successful");
    console.log('mongo connected successfully'); 
}); 

var Message = mongoose.model('Message',{
    name : String,
    message: String
});

app.get('/app', (req,res)=> {
    console.log("Home page requested");
    res.send("Welcome to the app ");
});

app.get('/index',(req,res) => {
    res.sendFile(path.join(__dirname + '/index.html' ));        // send the index file 


    console.log("Hello Index page"); 
});

io.on("connection", function(socket){
    socket.on("disconnect",()=>{
        console.log("a user disconnected ");
    });
    console.log("A new  user connected");
});


app.get('/messages',(req,res)=> {
    console.log("get request received");
    Message.find({},(err,messages)=> {
        res.send(messages); 
    }); 
}); 



app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
      if(err)
        sendStatus(500);
    io.emit('message', message);
      res.sendStatus(200);
    })
  })
 

  http.listen(PORT,()=>{
    console.log("listening on " + PORT); 
})