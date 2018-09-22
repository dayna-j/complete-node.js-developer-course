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
const titleOptions = {
            describe: 'Title of note', 
            demand: true,
            alias: 't'
};
const bodyOptions = {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
}

// .command() defines the commands exposed by the application
// .command(cmd,description, {config object})
const argv = yargs
    .usage('$0 <cmd> [args]')    
    .required( 1, "At least one argument is required" )
    .command(
    'add','Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .epilog('Dayna Blackwell 2018')
    .argv;

// .help() displays the usage string and exits the process

// argv._[0] will contain the first argument; the command
let command = argv._[0];
// console.log(process.argv);
// console.log('Process:', process.argv);
// console.log('\nCommand:', command);
// console.log('Yargs:', argv);

if(command === 'add') {
// console.log(argv.yargs);
let note = notes.addNote(argv.title, argv.body);
if (note) {
    // note will be true if a note was returned
    // note will be false if a note was not returned
    console.log("\nNote created");
    // print title and body using es6 string templates
    notes.logNote(note);
}
else {console.log("Note title already in use..");}

} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`\nPrinting ${allNotes.length} note(s)`);
    allNotes.forEach( (note) => notes.logNote(note));


} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found!');
        // print title and body using es6 string templates
        notes.logNote(note);
    } else {
        console.log('Note not found!');
    }
}else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    // if noteRemoved is true, 'Note was removed' is assigned to message
    // if not, 'No matching title' is assigned to message
    let message = noteRemoved ? 'Note was removed' : 'No matching title';
    console.log(message);
} else {
    console.log('Command not recognized');
}