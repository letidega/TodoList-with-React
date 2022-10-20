import React from "react"
import "/workspace/react-hello/src/styles/button.css"


const Button = (props) => {
    return <>
    <button onClick={props.onClick}>{props.value}</button>
    </>
}

export default Button;