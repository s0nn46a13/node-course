const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger;

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.inverse.green('New note added!'));
    } else {
        console.log(chalk.inverse.red('Note title taken!'));
    };
};

const removeNote = (title) => {
    const notes = loadNotes();
    const  notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.inverse.green('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.inverse.red('No note found!'));
    };
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    };
};

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.bold.blue('Your notes'));
    
    notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.bold.green(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.bold.red('Unable to find note.'));
    };
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};