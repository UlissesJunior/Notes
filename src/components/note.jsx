import React from 'react';
import { useHistory } from 'react-router-dom';

import buttonClose from '../img/remove.svg'
import buttonInfo from '../img/info.svg'



const Note = ({ note, handleNoteClick, handleNoteDel }) => {
    
    const history = useHistory();

    const handleNoteDetails = () => {
        history.push(`/${note.title}`)
    }

    return (  
    <div 
    className='note-container' 
    style={note.completed ? {borderLeft: '8px solid #787880'} : {}}
    >
        <div className='note-title' onClick={() => handleNoteClick(note.id)}>
            {note.title}
        </div>

        <div className='buttonClose'>
            <button className='info-note-button' onClick={handleNoteDetails}>
               <img src={buttonInfo} /> 
            </button>

            <button className='remove-note-button' onClick={() => handleNoteDel(note.id)}>
               <img src={buttonClose} /> 
            </button>
        </div>
    </div> 


    );
}

 
export default Note;