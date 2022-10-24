import React from "react"
import "../../styles/button.css"


const Button = (props) => {
    return <>
    <button onClick={props.onClick}>{props.value}</button>
    </>
}

export default Button;