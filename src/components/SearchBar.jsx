import { useState, useEffect } from "react"
import * as API from '../services/weather.js'
import { connect } from "react-redux"


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
        API.getWeatherByCity(inputState.city).then(data=>setCity(data))
        inputState.search = true // this input is to avoid the useEffect to be executed the first time with the first render. 
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