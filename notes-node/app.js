// console.log('\nStarting app.js..');
// import the file system module
const fs = require('fs');
// import the lodash utility library (external dependency)
const _ = require('lodash');
// import the yargs optstring parsing library (external dependency)
// yargs provides an easy to use interface for parsing command-line arguments
const yargs = require('yargs');
// notes.js contains the function definitions used in this file 
const notes = require('./notes.js')
// argv will be the yargs formatted argument list
const argv = yargs.argv;
// argv._[0] will contain the first argument; the command
var command = argv._[0];
// console.log(process.argv);
// console.log('Process:', process.argv);
// console.log('\nCommand:', command);
// console.log('Yargs:', argv);

if(command === 'add') {
// 
// console.log(argv.yargs);
var note = notes.addNote(argv.title, argv.body);
if (note) {
    console.log("\nNote created");
    // print title and body using es6 string templates
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
else {console.log("Note title already in use..");}

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
}else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'No matching title';
    console.log(message);
} else {
    console.log('Command not recognized');
}