import { DELETE_WEATHER_CARD, GET_WEATHER_CARD } from '../actions/actionTypes.js'

const initialState = {
    cities: []
}

const weatherReducer = (state = initialState, action) => {

    switch(action.type){
        case GET_WEATHER_CARD:
            return{
                ...state,
                cities: [...state.cities, action.payload ]
            }
        case DELETE_WEATHER_CARD:
            return state
        default:
            return state
    }
}


export default weatherReducer