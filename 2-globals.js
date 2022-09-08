console.log(__dirname) // path to current directory
console.log(__filename) // file name
console.log(require) // function to use modules 
console.log(module) // info about current module (file)
console.log(process) // info about env where the program is being exceuted

setInterval(() => {
  console.log("helllo world")  
}, 1000);