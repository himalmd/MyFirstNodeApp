const EventEmitter = require('events');

var url = "https://logger.io/log";

class Logger extends EventEmitter{
    log(message){
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'https://gg'});
    }    
}


module.exports = Logger;