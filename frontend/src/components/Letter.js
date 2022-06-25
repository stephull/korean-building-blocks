import React from "react";
import "../main.css";
import {useDrag} from 'react-dnd';
import PageModal from './PageModal';

export default function Letter(props) {
    const {id, char, pic} = props;
    const [{isDragging}, dragRef] = useDrag({
        type: 'letter',
        item: {id, char, pic},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    return (
        <div className="letter" ref={dragRef}>
            <img id={id} src={pic} 
                alt={"Representation of " + char} />
            {
                isDragging && 
                <PageModal 
                    className="pageModal" title="Select Test"
                    styles={{opacity: '100%'}}>
                    {"You are about to pick: " + char}
                </PageModal>
            }
        </div>
    );
}