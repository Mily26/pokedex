import React from 'react'

function Home() {
    return(
        <>
        <div className="title">
            <h1>¡Bienvenidos a nuestro Pokedex!</h1>
        </div>
        <div className="input-poke">
            <input type="text" placeholder="Escribir número de Pokemon"></input>
        </div>
        <Button />
        </>
    )
}