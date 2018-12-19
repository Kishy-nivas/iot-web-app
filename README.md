# iot-web-app
IoT web platform for smart department 


This project aims in providing a platform where user can register their IoT device and can communicate with the server,
to push their data in real-time, when new data is added, it will notify all the clients, to get real-time updates. 

It tries to communicate with IoT devices with the standard protocols such as MQTT/HTTP 



To-do : 
models : 
  1) User  (user can have 'n' number of devices 
  2) IoT device (A device belongs to a user)  
  
Controllers : 
  1) User Registration/login (JWT Tokens) (Rest API- http) 
  2) Device data controller(signal the clients using sockets when new data arrives) ( use pub/sub + socket) 
 
  

