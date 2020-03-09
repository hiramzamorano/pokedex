import React from 'react';
import './styles/Paddle.css';



const Paddle = (props) => {
    return (
        <div className="paddle">
            <button className="paddle-left" onClick={props.arrowLeft}>PREV</button>
            <button onClick={props.arrowRight}>NEXT</button>
        </div>
    )
};


export default Paddle;
