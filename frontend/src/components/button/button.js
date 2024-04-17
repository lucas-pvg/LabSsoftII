import React from "react";
import { Link } from "react-router-dom";

import "./button.css";

function Button({ className, to, text, onClick }) {
    const classes = `but text ${className}`;

    return (
        <div className={classes} onClick={onClick}>
            <Link className="but-link" to={to}>
                {text}
            </Link>
        </div>
    );
}

export default Button;
