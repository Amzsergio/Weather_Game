import { useState } from "react"
import { connect } from "react-redux"
import { getCardByCity } from '../redux/actions/actions.js'
import React from "react"


function SearchBar(props){
    
    const [ inputState, setInputState ] = useState({
        city:''
    })
    
    
    const onHandleInputs = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }
    

    const onHandleSubmit = (e) => {
        e.preventDefault()
    }
    

    return (
        <>
            <form onSubmit={(e) => onHandleSubmit(e)}>
                <input 
                    type="text"
                    name='city'
                    onChange={(e) => onHandleInputs(e)}
                />
                <input 
                    type="submit"
                    onClick={() => props.getTheWeather(inputState.city, props.state.cities)}
                />
            </form>
        </>
    )
}

function mapStateToProps(state){
    return{
        state: state
      }
}

function mapDispatchToProps(dispatch){
    return{
        getTheWeather: (city, cities) => dispatch(getCardByCity(city, cities))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(SearchBar)