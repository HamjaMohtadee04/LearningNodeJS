const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {

}

const schoolBell = new SchoolBell();

schoolBell.on("ring",()=>{
    console.log("yahoo! class end");
})
schoolBell.on("ring",()=>{
    console.log("oh! there will be a one more class");
})
schoolBell.on("broken",()=>{
    console.log("oh no! when class will be end");
})

schoolBell.emit("ring")
 schoolBell.emit("broken")

 //q1: use case of events module in nodejs