import { GET_WEATHER_CARD, DELETE_WEATHER_CARD } from "./actionTypes"

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = '837b9ea4c3f73a0a22f635a9388e22e9'

export function getCardByCity(city){
    return function (dispatch){
        return fetch(`${API_URL}q=${city}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(json =>{
                return dispatch(
                    {
                        type: GET_WEATHER_CARD,
                        payload: json
                    }
                )
            })
    }
}

export function deleteCardByCity(id){
    return{
        type: DELETE_WEATHER_CARD,
        payload: id
    }
}