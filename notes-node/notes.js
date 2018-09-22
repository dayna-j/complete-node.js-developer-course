// console.log('Starting notes.js..\n');

const fs = require('fs');

// returns an object of note data
const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
    // JSON.parse will construct an object from the string retrieved by the file system module
        return JSON.parse(notesString);
    } catch (e) {
        // catch runs when try fails
        return [];
    }
};

const saveNotes = (notes) => {
    // synchonously writes the stringified array of notes to notes-data.json file
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// tile, body passed in from app.js as argv.title, argv.body
const addNote = (title, body) => {
//  uses es6 shorthand syntax for initializing properties
//  the property key must match the variable name
    let notes = fetchNotes();
    let note = {
        title, 
        body   
    };
    // filter out duplicate notes
    let duplicateNotes = notes.filter( (note) => (note.title === title) );
    if(duplicateNotes.length === 0) {
    // if there are no duplicates
    // push the note object into the notes array
        notes.push(note);
    // use the file system module to synchronously write to notes-data.json; write the string representation of the entire notes array
        saveNotes(notes);
        return note;
    }
    else {
        // otherwise there was a duplicate
        console.log("\nDuplicate entry detected and disgarded..");
        return false;
    }


};

const getAll = () => {
    return fetchNotes();
};

const getNote = (title) => {
    // triggered by 'read' command line argument
    // get all of the notes
    let notes = fetchNotes();
    // filter the notes with title matching title arg
    let filteredNotes = notes.filter( (note) => (note.title === title) );
    // return the first note with a matching title
    return filteredNotes[0];
    // return value needs to be used in app.js
    // return note obj if found else false/undefined
}

const logNote = (note) => {
    console.log('----------------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

const removeNote = (title) => {
    let notes = fetchNotes()
    // create a new array with notes having titles that DO NOT
    // match the title argument
    let filteredNotes = notes.filter( (note) => (note.title !== title)  );
    // save the new array of unique notes
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
    }
 
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};