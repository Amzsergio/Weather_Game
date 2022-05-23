import  SearchBar  from '../src/components/SearchBar.jsx'
// import { Cards } from './components/Cards.jsx'



function App() {

  const cities = []
  const onHandleSearch = (city) => {
    if(city.cod === 200){
      cities.push(city)
    }else{
      alert('City not found')
    }
    // console.log(cities)
  }
  
  return (
    <div >
     <SearchBar />

     {/* <Cards /> */}
    </div>
  )
}

export default App
