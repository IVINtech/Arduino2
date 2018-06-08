const path=require('path')
const express = require('express');
const http=require('http');
const socketIO =require('socket.io');
const hbs=require('hbs');
var Client = require('node-rest-client').Client;
// var SerialPort  =require('serialport').SerialPort;
var five = require('johnny-five');
// arduino
var board=new five.Board({
  repl:false
});
 
var client = new Client();

const port =process.env.PORT || 3000;

var app = express();
var server=http.createServer(app);
var io=socketIO(server)

const publicPath=path.join(__dirname,'/public');
const viewPath=path.join(__dirname,'/views');
app.use(express.static(publicPath));
app.set('views', viewPath);
app.set('view engine', 'hbs');


app.get('/',(req,res)=>{
  res.render('index.hbs')
});

board.on('ready',()=>{

  var button=new five.Button(7);
  var button=new five.Button(6);

  io.on("connection",(socket)=>{
    console.log("New User connectnted");
    
    // const intervalGET=setInterval(()=>{
    //   try {
    //     client.get("http://192.168.2.100/clock", function (data, response) {
    //       if (data.clock!=0) {
    //         socket.emit('valor',data.clock);
    //       }
    //     });
    //   } catch (error) {
    //     console.log(error); 
    //   }
    // },1000);
    socket.emit('valor',60);
  
    socket.on('disconnect',()=>{
      console.log("User disconnected");
      // clearInterval(intervalGET);
    });
  });
  

});



  server.listen(port, '0.0.0.0', () => {
      console.log('Server is up on port '+port);
  });