import React from "react";
import Note from "./note.jsx";


const Notes = ({notes, handleNoteClick, handleNoteDel}) => {
    console.log(notes);
    return (
        <>
            {notes.map((note) => (
                <Note key={note.id} note={note} handleNoteClick={handleNoteClick} handleNoteDel={handleNoteDel} />
            ))}
        </>
    )
}

export default Notes;