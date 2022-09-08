const { readFileSync, writeFileSync, read } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.text",
  `Here is teh result: ${first}, ${second} `,
  { flag: 'a'}
);

console.log('Done with the task')
console.log('starting the next task')


