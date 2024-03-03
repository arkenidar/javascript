// https://codedamn.com/news/nodejs/creating-custom-events-eventemitter

import EventEmitter from 'events';
const eventEmitter = new EventEmitter();

eventEmitter.on('data', (data) => {
    console.log(`Data received: ${data}`);
});

eventEmitter.emit('data', 'Hello, EventEmitter!');
