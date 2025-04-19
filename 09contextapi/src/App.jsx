import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './Context/Theme'
import Theme from './Components/Theme';
import Card from './Components/Card';

function App() {
  
    const[themeMode , setthemeMode] =useState("light");
        
    const lightTheme = () =>{
         setthemeMode("light")
    }

    const darkTheme =() =>{
         setthemeMode("dark")
    }

    // theme changes function\

         useEffect ( () => {
             document.querySelector('html').classList.remove("light" ,"dark");
             document.querySelector('html').classList.add(themeMode)
             
         },[themeMode])
  return (
    <ThemeProvider value={{themeMode , lightTheme ,darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                 <Theme/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
