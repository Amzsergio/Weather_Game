import { useState, useEffect } from "react"
import * as API from '../services/weather.js'


export function SearchBar(props){
    
    const [ inputState, setInputState ] = useState({
        city:'',
        search: false
    })
    
    const [city, setCity] = useState({})
        
    useEffect( async()=>{
        
            const cityResponse = await API.getWeatherByCity(inputState.city).then(data => setCity(data))

            props.onSearch(city)

            
        }, [inputState.city])
        
        
        
        const onHandleInputs = (e) => {
            setInputState({
                ...inputState,
                [e.target.name]: e.target.value
            })
        }
        
        const onHandleClick = (e) => {
            e.preventDefault();
            console.log(inputState.search)
            inputState.search = !inputState.search
            console.log(inputState.search)
            
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