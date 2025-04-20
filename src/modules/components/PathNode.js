import React from 'react';
import './PathNode.css';
import { useState, useEffect } from 'react';

const PathNode = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsHovered(true);
    };


    return (
        <div
            className="path-node"
            onClick={handleClick}
        >
            <img src={props.img-src}/>
        </div>
    );
};

export default PathNode;