import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './button';
import backImg from '../img/back.svg'

const NoteInfo = () => {

    const params = useParams(); 
    const history = useHistory();

    const handleNoteBack = () => {
        history.goBack();
    }
 
    return (  
        <>
            <div className='info-container'>
                <Button onClick={handleNoteBack}>
                    <img src={backImg} alt="<"/>
                </Button>
            </div>
            <div className='noteinfo'>
                <h1>{params.noteTitle}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore perspiciatis quam repellendus, libero odit velit consectetur fuga facilis nam laboriosam qui eius placeat?</p>
            </div>
        </>
    );  
    
}
 
export default NoteInfo;