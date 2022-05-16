import { SearchBar } from './components/SearchBar.jsx'



function App() {

  return (
    <div >
     <SearchBar
     onSearch={(city) => alert(city)}/>
    </div>
  )
}

export default App
