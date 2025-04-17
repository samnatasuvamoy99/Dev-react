import React ,{useState,useContext}from 'react'
import UserContext from '../Context/UserContext'


function Login() {
       const[ username ,setUsername] = useState("")
       const[password , setPassword] = useState("")

       const {setUser}= useContext(UserContext)

       const handleSubmit = (e) =>{
             e.preventDefault()
            
             if(!username || !password){
                 alert("please enter a valid username and password")
                   return 
             }
             setUser({ username:username.trim() , password:password.trim()})

             setUsername("")  // Clear username input
              setPassword("") 
       };

  return (
    <div>
      
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>

      <input  type='text'
      value={username}
      onChange={ (e) => setUsername(e.target.value)}
       placeholder='username'/>
      {" "}

      <input  type='password'
      value={password}
      onChange={ (e) => setPassword(e.target.value)}
       placeholder='Password'/>

      <button  type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default Login