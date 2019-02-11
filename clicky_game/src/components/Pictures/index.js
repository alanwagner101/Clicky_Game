import React from "react";
import "./style.css";

function Pics(props) {
    return <button className="btn" onClick={props.increaseCounter} data-state={props.clicked}><div className="card">
        <div className="img-container">
            <img alt={props.img} src={props.img} />
        </div>
    </div>
    </button>
}

export default Pics;