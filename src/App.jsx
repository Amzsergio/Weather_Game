import SearchBar from './components/SearchBar/SearchBar.jsx'
import Cards from '../src/components/Cards/Cards.jsx'
import Appinfo from './components/AppInfo/AppInfo.jsx'
import { Route } from "react-router-dom"



function App() {
  
  return (
    <div >
      <Appinfo />
      <SearchBar />
      <Cards />
    </div>
  )
}

export default App
