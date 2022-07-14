import React, { useState } from 'react';
import "../main.css";

import PageModal from './PageModal';
import ButtonIcon from './ButtonIcon';
import SoundInterface from './SoundInterface';
import Dictionary from './Dictionary';

export default function PropertyModal(props) {
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
            <ButtonIcon
                className="iconButton"
                id={id}
                onClick={toggleModal}
            >
                {icon}
            </ButtonIcon>
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