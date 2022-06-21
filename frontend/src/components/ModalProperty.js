import React, {useState} from 'react';
import "../main.css";

import PageModal from './PageModal';
import IconButton from './IconButton';

export default function ModalProperty(props) {
    const [modalState, setModal] = useState(false);
    //const toggleModal = setModal(!modalState);
    const toggleModal = false;  //FIX

    return (
        <div>
            <IconButton
                className=""
                onClick={toggleModal}
            >
                <i className="">{Object(props.icon)}</i>
            </IconButton>
            {
                (toggleModal) ? 
                <PageModal className="pageModal" title={String(props.id).toUpperCase()}>
                    Hello!
                </PageModal> : 
                <br/>
            }
        </div>
    );
}