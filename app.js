const Logger = require('./logger'); //no need to add file extension, good practice to assing it to constance instead of variable

const path = require('path') //path is a build in module
const pathObj = path.parse(__filename); //parse is a method for path module
console.log(pathObj);

const os = require('os'); //oparating system module
const totalMemory = os.totalmem();
console.log('total memory: ' + totalMemory);

const fs = require('fs'); // files system module
const files = fs.readdirSync('./'); //sync method to read files (avoid sync methods!)
console.log("all files in this folder: " + files);
const asyncFiles = fs.readdir('./', function(err,files) {
  if(err) console.log('Error', err);
  else console.log('Result', files);
}) //async method need two arguments, second is function(two agruments again, one is error, second is result we are looking for)

const EventEmitter = require('events'); // exception!! EventEmitter is a class, not a functions
// const emitter = new EventEmitter(); // we need two steps for it:

// 1st step: Register a listener for an event

const logger = new Logger();

// logger.on('messageLogged', function(eventArg) {
//   console.log('Listener was called', eventArg);
// }) 
// or the same with fat arrow notation
logger.on('messageLogged', (eventArg) => {
  console.log('Listener was called', eventArg);
})

// 2nd step: Raise an event
// emitter.emit('messageLogged', {id:1, url: 'http://'}); //we could add optional second agrument that is argument object

logger.log("message");

const http = require('http');

// <-- easy example with server

// const server = http.createServer();
// server.on('connection', (socket) => {
//   console.log('New connection');
// })
// server.listen(3000);
// 
// console.log('listening on port 3000...');


// <-- another example with createServer
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write("hello world");
    res.end();
  }
  
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1,2,3,4]));
    res.end();
  }
})

server.listen(3000);

console.log('listening on port 3000...');

// <---------------

function sayHello(name) {
  console.log('hello ' + name);
}

sayHello("Gosia"); 

//<--------modules in nodeJS:
// * operating system
// * files
// * events
// * http

//<-------- global objects in NodeJS:
// * console.log() console object
// 
// * setTimeout()
// * clearTimeout()
// 
// * setInterval()
// * clearInterval()

// we can access functions and variables by using
// global.variableName in contrast to client side JS window.variableName

//console.log(module);
//modul is JSON object with key: vaule pairs

