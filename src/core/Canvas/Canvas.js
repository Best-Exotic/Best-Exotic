import React, {useState} from 'react';
import './Canvas.css';
import CanvasControls from "./CanvasControls";

function Canvas(props) {
    const [zoom, setZoom] = useState(1)
    const zoomIn = () => {
        setZoom(zoom*1.25)
    }
    const zoomOut = () => {
        if (zoom >= 0.4){
            setZoom(zoom * 0.8)
        }
    }

    return (
        <div className="viewport">
            <div className="virtual-viewport" style={{zoom: zoom}}>
                <div id="wall">
                    { props.children }
                </div>
            </div>
            <CanvasControls zoomIn={zoomIn} zoomOut={zoomOut} />
        </div>
    );
}

export default Canvas;
