import React from 'react'
import './button.scss'

function Button(props) {
    
    
    return(
        <>
        <div className="buttonLogin">
            <button className="btn" onClick={props.handleClick}>Ingresar</button>
        </div>
        </>
    )
}

export default Button;