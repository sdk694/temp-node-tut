// npm global command, comes with the Node
// npm --version - to check the version 

// local dependency - use it only in a particular project 
// npm i <packagename>

// global dependecy -use it in any project 
// npm installl -g <packagename>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const  _ = require('lodash')

const items = [1,[2,[3, [4]]]]

const newItems = _.flattenDeep(items);

console.log(newItems);