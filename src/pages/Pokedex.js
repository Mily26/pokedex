import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {getPokemonAsync} from '../redux/actions'


function Pokedex() {
    const poke = useSelector(state => state.pokeReducer)
    const isLoged = poke.isLoged
    const [number, setNumber] = useState('')
    const [redirect, setRedirect] = useState(false)
    const dispatch = useDispatch()
    if(!isLoged) {
        return <Redirect to="/unauthorized"/>
    }

    function handleChange(e) {
        setNumber(e.target.value)
    }

    function search() {
        setRedirect(true)
        dispatch(getPokemonAsync(number))
    }

    if(!poke.isPending && !poke.isError && redirect) {
        return <Redirect to="/pokemon" />
    }

    return (
        <div>
            <h1>Bienvenidos a nuestro Pokedex</h1>
            <input type="text" placeholder="Escribir número de Pokemon" value={number} onChange={handleChange} />
            {poke.isPending ? <p>Cargando...</p> : <button onClick={search}>Buscar</button>}
            {poke.isError ? <p>Ocurrió un error, verifique y reintente.</p> : ''}

        </div>
    )

}

export default Pokedex;