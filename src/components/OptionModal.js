import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.ClearSelectOption}
        contentLabel ="Selected Option"
        >
    <h3>Another brick in the wall</h3>
    {props.selectedOption &&<p>{props.selectedOption}</p>}
    <button 
        onClick={ props.ClearSelectOption}
     
    >Ok</button>
    </Modal>

);



export default OptionModal;