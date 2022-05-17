import { useState, useEffect } from "react"
import * as API from '../services/weather.js'


export function SearchBar(props){

    
    const [ inputState, setInputState ] = useState({
        city:''
    })

    const [city, setCity] = useState({})
    

    useEffect(()=>{
        API.getWeatherByCity(inputState.city).then(data => setCity(data))
    }, [inputState])

    const onHandleInputs = (e) => {
        setInputState({
            [e.target.name]: e.target.value
        })
    }

    const onHandleClick = (e) => {
        e.preventDefault();
        props.onSearch(city)
    }
    return (
        <>
            <form>
                <input 
                    type="text"
                    name='city'
                    onChange={(e) => onHandleInputs(e)}
                />
                <input 
                    type="submit"
                    onClick={(e) => onHandleClick(e)}
                />
            </form>
        </>
    )
}