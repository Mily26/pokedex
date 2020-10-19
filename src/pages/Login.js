import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {isLoged} from '../redux/actions'

function Login() {
    const [userData, setUserData] = useState({})

    const history = useHistory()

    const dispatch = useDispatch()

    function handleChange(name, value) {
        setUserData({
            ...userData,
            [name]: value
        })
    }

    function handleClick() {
        const correctUser = "Mily26"
        const correctPassword = "1234"
        const {user, password} = userData
    
        if(user === correctUser && password === correctPassword) {
            dispatch(isLoged(true))
            history.push("/pokedex")
        } else {
            dispatch(isLoged(false))
            history.push("/unauthorized")
        }
    }

    return (
        <>
        <Input handleChange={handleChange} />
        <Button handleClick={handleClick}/>
        </>
    )
}

export default Login;