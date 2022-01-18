import React, { useState } from 'react';
import Button from './button.jsx';
import AddImg from '../img/add.svg';

// Função Enter no Button
document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const Enter = document.querySelector(".add-button")
        Enter.click();
    }

})

const AddNote = ({ handleNoteAdd }) => {
    const [inputData, setInputData]  = useState('')

    const handleInputChange = (e) => {
        console.log(e)
        setInputData(e.target.value)
    }

    const handleAddNoteClick = () => {
        handleNoteAdd(inputData)
        setInputData("")
    }

    return (
        <>
        <input 
            onChange={handleInputChange} 
            value={inputData} 
            className="add-note-input" 
            type="text" 
        />
        
        <Button 
        onClick={handleAddNoteClick} 
        className='add-button'>
        <img src={AddImg} alt="+"/>
        </Button>
        </>
    );
}
 
export default AddNote;