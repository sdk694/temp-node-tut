const { readFile, writeFile } = require("fs");
console.log('Start')
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is teh result: ${first}, ${second} `,
      { flag: "a" }
    ,(err, result) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('Done with the task');
    });
  });
});
console.log('Starting again')