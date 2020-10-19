import React from 'react'

function Input(props) {
    function handleChange(event) {
        props.handleChange(event.target.name, event.target.value)
    }
    return(
        <div className="cardLogin">
            <div className="userInput">
                <input type="text" name="user" onChange={handleChange} />Usuario
                <input type="password" name="password" onChange={handleChange} />Contraseña
            </div>
        </div>
        
    )
}

export default Input;