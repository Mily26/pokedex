import {IS_LOGED, GET_POKEMON, GET_POKEMON_OK, GET_POKEMON_ERROR} from './actionTypes'


export const isLoged = (value) => ({
    type: IS_LOGED,
    payload: value
})
export const getPokemon = () => ({
    type: GET_POKEMON
})
export const getPokemonOk = (data) => ({
    type: GET_POKEMON_OK,
    payload: data
})
export const getPokemonError = () => ({
    type: GET_POKEMON_ERROR
})

export function getPokemonAsync(number) {
    return function(dispatch) {
        dispatch(getPokemon())
        fetchPokemon(number).then(
            data => dispatch(getPokemonOk(data)),
            error => dispatch(getPokemonError())
        )
    }
}


function fetchPokemon(number) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => response.json())
}