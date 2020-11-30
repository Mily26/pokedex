import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {isLoged} from '../redux/actions'
import './login.scss'

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
        <div>
            <img className="pokebola" src="pokebola.png" alt="logo" />
            <img className="title" src="title.png" alt="pokedex" />
            <div className="contentCard">
                
                <div className="card">
                <Input handleChange={handleChange} />
                <Button handleClick={handleClick}/>
                </div>
            </div>
        </div>
        
        
    )
}

export default Login;