import { SearchBar } from './components/SearchBar.jsx'



function App() {

  const cities = []
  
  const onHandleSearch = (city) => {
    if(city.cod === 200){
      cities.push(city)
    }else{
      alert('City not found')
    }
    console.log(cities)
  }

  return (
    <div >
     <SearchBar
     onSearch={(city) => onHandleSearch(city)}/>
    </div>
  )
}

export default App
