import React from "react";
import './poup.css';

export const Popup =({text, closePoup}) => {
    return(
        <div className="popup-container">
            <div className="poup-body">
                <h1>{text}</h1>
                <button onClick={closePoup}>Close x</button>
            </div>
        </div>
    );
}