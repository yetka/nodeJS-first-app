// (function (exports, require, module, __filename, __dirname)  { //it is Module Wrapper Function that every module id wrapped by default
  
console.log(__filename);
console.log(__dirname);

const EventEmitter = require('events');

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // send an HTTP request
    console.log(message);
    
    this.emit('messageLogged', {id:1, url: 'http://'})
  }
}



module.exports = Logger;
//module.exports.endPoint = url;

//})