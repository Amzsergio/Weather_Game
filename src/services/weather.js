const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = '837b9ea4c3f73a0a22f635a9388e22e9'

export const getWeatherByCity = async (city)=>{

    const response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    return data;

}