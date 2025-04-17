
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextprovider from './Context/UserContextprovider'

function App() {
 
  return (
    <UserContextprovider>
         <h1>  This is a context api challange</h1>
         <Login/>
         <Profile/>
    </UserContextprovider>
  )
}

export default App
