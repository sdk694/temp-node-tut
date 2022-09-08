// Modules - Encapculted Code (only share minimum)
// Every file in node is a module (By default)

const names = require('./4-names');
const sayHi = require('./5-utlis');

const data = require('./6-alternative-flavoe')

require('./7-mind-grenade')

sayHi('Sarah');
sayHi(names.john);
sayHi(names.peter);