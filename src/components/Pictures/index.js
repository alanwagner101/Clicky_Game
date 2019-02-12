import React from "react";
import "./style.css";

function Pics(props) {

    return <button className="btn"><div className="card">
        <div className="img-container">
            <img id={props.id} alt={props.img} src={props.img} selected={props.clicked} onClick={props.increaseCounter}/>
        </div>
    </div>
    </button>
}

export default Pics;