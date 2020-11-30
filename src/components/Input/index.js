import React from 'react'
import './style.scss'

function Input(props) {
    function handleChange(event) {
        props.handleChange(event.target.name, event.target.value)
    }
    return(
        <div className="cardLogin">
            <div className="userInput">
                <input className="textbox" type="text" name="user" onChange={handleChange} placeholder="Usuario"/>
                <input className="textbox" type="password" name="password" onChange={handleChange} placeholder="Contraseña"/>
            </div>
        </div>
        
    )
}

export default Input;