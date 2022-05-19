import { useState, useEffect } from "react"
import * as API from '../services/weather.js'


export function SearchBar(props){
    
    const [ inputState, setInputState ] = useState({
        city:'',
        search: false
    })
    
    const [city, setCity] = useState({})
    
    useEffect(()=>{
        if(inputState.search === true){
            props.onSearch(city)
        }
    }, [city])
        
        
        
    const onHandleInputs = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }
    
    const onHandleClick = (e) => {
        e.preventDefault();
        //  let promise = API.getWeatherByCity(inputState.city)
        //  let data = await promise;
        //  setCity(data)
        console.log(inputState.search)
        API.getWeatherByCity(inputState.city).then(data=>setCity(data))
        inputState.search = true
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