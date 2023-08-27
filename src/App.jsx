import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetails from './components/userDetails/userDetails'
import Search from './components/Search/Search'
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
   <div className='wrapper'>

   <h1>User Avatar Finder</h1>

   <Search updateSearchTerm = {setSearchTerm}/>
    {searchTerm &&  <UserDetails userName={searchTerm}/>}
   
   </div>
  )
}

export default App
