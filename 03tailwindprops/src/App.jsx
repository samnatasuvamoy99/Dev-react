import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
        <h1 className=' bg-green-400 text-black rounded-2xl mb-8'> Tailwind Project</h1>

       <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
        <img
          src="https://images.pexels.com/photos/29188346/pexels-photo-29188346/free-photo-of-fashionable-woman-posing-in-grunge-urban-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div> 
      
    </>
  )
}

export default App
