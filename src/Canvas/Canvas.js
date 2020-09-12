import React from 'react';
import './Canvas.css';

function Canvas(props) {
    return (
        <div className="viewport">
            <div className="virtual-viewport">
                <div id="wall">
                    { props.children }
                </div>
            </div>
        </div>
    );
}

export default Canvas;
