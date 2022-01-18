import React, { useState, useEffect } from 'react';
import './styles/app.css'
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Notes from './components/notes.jsx';
import AddNote from './components/addnote.jsx';
import NoteInfo from './components/noteinfo.jsx';

const App = () => {
    const [notes, setNotes] = useState ([]);

    useEffect(() => {
		const searchNotes = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.cypress.io/todos?_limit=12"
			);
			setNotes(data);
		};

		searchNotes();
	}, []);


    const handleNoteClick = (noteId) => {
        const newNotes = notes.map(note => {
            if (note.id === noteId) return {...note, completed: !note.completed}

            else return note;
        })

        setNotes(newNotes);
    }

    const handleNoteAdd = (noteTitle) => {
        const newNotes = [...notes, {
            title: noteTitle,
            id: uuidv4(), 
            completed: false,
        }];

        setNotes(newNotes);
    }

    const handleNoteDel = (noteId) => {
        const newNotes = notes.filter(note => note.id !== noteId)

        setNotes(newNotes);
    }

return (
    <Router>
    <div className="container">
            <h1>Minhas Tarefas</h1>
            <Route path='/Notes/' exact render={() => (
                <>
                <div className='nav-container'>
                    <AddNote handleNoteAdd={handleNoteAdd} />
                </div>
                    <Notes notes={notes} handleNoteClick={handleNoteClick}  handleNoteDel={handleNoteDel}/>
                </>
            )}/> 
            <Route path="/Notes/:noteTitle" exact component={NoteInfo}/>
    </div>
    </Router>
)
}

export default App;
