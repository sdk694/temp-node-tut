// OS module in nodejs
const os = require('os');

// info about current user

const user = os.userInfo();
console.log(user);

// methord return the system uptime in sec


console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)