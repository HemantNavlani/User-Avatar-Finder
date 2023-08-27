import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetails from './components/userDetails/userDetails'
import Search from './components/Search/Search'
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
   <>
   User Avatar Finder
   <Search updateSearchTerm = {setSearchTerm}/>
   {searchTerm}
   
    {searchTerm &&  <UserDetails userName={searchTerm}/>}
   
   </>
  )
}

export default App
