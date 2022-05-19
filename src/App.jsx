import { SearchBar } from './components/SearchBar.jsx'
import { Cards } from './components/Cards.jsx'



function App() {

  const cities = []
  const onHandleSearch = (city) => {
    if(city.cod === 200){
      cities.push(city)
    }else{
      alert('City not found')
    }
  }
  
  return (
    <div >
     <SearchBar
     onSearch={(city) => onHandleSearch(city)}
     cities={cities}
     />

     <Cards
     cities={cities}/>
    </div>
  )
}

export default App
