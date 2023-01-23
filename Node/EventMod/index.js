//events Module
//Node.js has built-in module called "Events".
//where you can create-,fire-, and listen for your own events.
//Ex-1- Registering for event tp co fired only time use once.
//Ex-2- create an events emitter instance and register a couple of callbacks
//Ex-3- Registering for events with callback parameters.

  const EventEmitter = require("events");
  const event = new EventEmitter();

  event.on("checkpage", (sc, msg) => {
    console.log('status code is ${sc} and the page is ${msg}');
  });

 event.emit("checkpage", 200, "ok");

 
