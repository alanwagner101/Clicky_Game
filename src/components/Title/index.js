import React from "react";
import "./style.css";

function Title(props) {
    return <div>
        <div className="jumbotron">
            <h1 className="display-4">Clicky Game</h1>
            <hr className="my-4"></hr>
            <p className="lead">High Score: {props.high}</p>
            <p className="lead">Score: {props.count}</p>
        </div>
    </div>
}

export default Title;