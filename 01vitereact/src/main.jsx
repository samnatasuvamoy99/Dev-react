import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function Myapp(){
     return (
         <div>
             <h1> try another method !</h1>
         </div>
     )
}
/*
// prev method apply
const Reactelement ={   // error this method
  type:'a',
    props:{
          href:'https://google.com',
          target:'_blank'
          
    }
     ,children:'click me to vist google'
}

*/

// try error fixed 
   const anotherElemnt =(
      <a href="https://google.com" target='_blank'> visit Google</a>
   )

 // react ke shat banarahe direct
    const  anotherUser="suvamoy samanta"

 const reactelement = React.createElement(
      'a', // tag name 
      {href:'https://google.com' , target:'_blank'},
      'click  me to visit Google', // tag ke under prop of obj
      anotherUser
 )

 

createRoot(document.getElementById('root')).render(
  
  <App/>
)
