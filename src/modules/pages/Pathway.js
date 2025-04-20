import React from 'react';
import './Pathway.css';
import PathNode from '../components/PathNode';
import { useState, useEffect } from 'react';

const Pathway = (props) => {
    const numPathNodes = localStorage.getItem('numPathNodes') || 5;
    const numBosses = localStorage.getItem('numBosses') || 2;
    const taskName = localStorage.getItem('taskName') || 'Task 1';

    return (
        <div className="pathway">
            <div className="pathway-header">
                <h1>Pathway</h1>
                <p>Task: {taskName}</p>
            </div>
            <div className="pathway-content">
                {Array.from({ length: numPathNodes }, (_, index) => (
                    <PathNode key={index} img-src={`path/to/image${index}.png`} />
                ))}
                {Array.from({ length: numBosses }, (_, index) => (
                    <PathNode key={index + numPathNodes} img-src={`path/to/boss-image${index}.png`} />
                ))}
            </div>
        </div>
    );
};