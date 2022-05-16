import { useState, useEffect } from "react"
import * as API from '../services/weather.js'


export function SearchBar(props){

    
    const [ inputState, setInputState ] = useState({
        city:''
    })

    const [city, setCity] = useState({})
    console.log(city)

    useEffect(()=>{
        API.getWeatherByCity(inputState.city).then(data => setCity(data))
    }, [inputState])

    const onHandleInputs = (e) => {
        setInputState({
            [e.target.name]: e.target.value
        })
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
                    onClick={() => props.onSearch(city.main.temp_max)}
                />
            </form>
        </>
    )
}