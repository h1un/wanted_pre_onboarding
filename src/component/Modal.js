import React, {useState} from 'react';
import './../App.css';
import './Modal.css';

const Modal = () => {
    const [isModal, setIsModal] = useState(false);

    const openModal = () => {
        setIsModal(!isModal);
    };

    return (
        <div className="wrapper">
            <h2>Modal</h2>
            <div className="content">
                <button className="modalButton" onClick={openModal}>Open Modal</button>
                {isModal ? (
                    <div className="modal">
                        <div className="modalBox">
                            <label className="closeButton" onClick={openModal}>
                                &times;
                            </label>
                            <label className="message">HELLO CODESTATES!</label>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
};

export default Modal;
