var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:1883')

client.on('connect', function () {
  client.subscribe('iot/device/1', function (err) {
	
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log("Received message from " + topic  + " " + message.toString());

})


function sendMessage(){
	client.publish('iot/device/1/status', "Hello from server"); 
}
setInterval(sendMessage,1000);

client.on('error', (err)=>{
	console.log(err);
}); 



