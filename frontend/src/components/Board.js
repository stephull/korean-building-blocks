import React, {useState} from "react";
import "../main.css";
import {useDrop} from 'react-dnd';

export default function Board(props) {
    const localStyles = {
        textAlign: 'center',
        fontSize: (props.className === "board sideBoard") ?
            '48px' : (props.className === "board mainBoard") ?
                '200px' : '16px'
    };

    const [board, setBoard] = useState([]);
    const [{isOver}, dropRef] = useDrop({
        accept: 'letter',
        drop: (item) => setBoard((board) => !board.includes(item) ?
            [...board, item] : board),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div
            id={props.id}
            className={props.className}
        >
            <div className="board-text"
                style={localStyles}
                ref={dropRef}
            >
                {board.map((b) => <div>{b.char}</div>)}
                {isOver && <div>Drop!</div>}
            </div>
        </div>
    );
}