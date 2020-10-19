import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Pokemon() {
    const poke = useSelector(state => state.pokeReducer)
    return (
        <div className="pokemon">
            <img src={poke.pokeData.sprites.front_default} alt="pokemon"/>
            <p>{poke.pokeData.species.name}</p>
           <Link to="/pokedex"> Volver </Link>
        </div>
    )
}

export default Pokemon;