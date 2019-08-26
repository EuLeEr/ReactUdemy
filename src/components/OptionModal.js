import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.ClearSelectOption}
        contentLabel ="Selected Option"
        closeTimeoutMS ={200}
        className ="modal"
        >
    <h3 className="model__title">Another brick in the wall</h3>
    {props.selectedOption &&<p className="model__body">{props.selectedOption}</p>}
    <button className="button"
        onClick={ props.ClearSelectOption}
     
    >Ok</button>
    </Modal>

);



export default OptionModal;