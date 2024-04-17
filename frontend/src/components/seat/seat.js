import React from "react";
import { Link } from "react-router-dom";

import "./seat.css";

function Seat({ className, to, onClick }) {
    const classes = `seat ${className}`;

    return (
        <div className={classes} onClick={onClick}>
            <Link className="seat-link" to={to} />
        </div>
    );
}

export default Seat;
