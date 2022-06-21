import React, { useState } from 'react';
import "../main.css";

import PageModal from '../components/PageModal';
import IconButton from '../components/IconButton';
import SoundInterface from '../components/SoundInterface';
import Dictionary from '../components/Dictionary';

export default function ModalProperty(props) {
    const [modalState, setModal] = useState(false);
    const toggleModal = (() => setModal((value) => !value));

    const { id, icon } = props;
    const application = (
        id === 'sound' ? <SoundInterface /> :
            id === 'dictionary' ? <Dictionary /> :
                null
    );

    return (
        <div>
            <IconButton
                className="iconButton"
                id={id}
                onClick={toggleModal}
            >
                {icon}
            </IconButton>
            {
                (modalState) ?
                    <PageModal className="pageModal" title={
                        String(id).toUpperCase()
                    }>
                        {application}
                    </PageModal> :
                    <br />
            }
        </div>
    );
}