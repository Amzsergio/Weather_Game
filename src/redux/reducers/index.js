import AppDescription from '../../components/AppInfo/AppDescription.jsx'
import { DELETE_WEATHER_CARD, GET_WEATHER_CARD, DISPLAY_APP_INFO } from '../actions/actionTypes.js'

const initialState = {
    cities: [],
    appDescription: true
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
        
        case DISPLAY_APP_INFO:
            return {
                ...state,
                appDescription: action.payload
            }
        default:
            return state
    }
}


export default weatherReducer