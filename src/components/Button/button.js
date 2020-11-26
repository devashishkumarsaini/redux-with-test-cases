import React from 'react'
import "./button.css";
const Button = ({label,changeValue}) => {
    return (
        <button className="counterButton" data-testid="button" onClick={changeValue}>{label}</button>
    )
}

export default Button;
