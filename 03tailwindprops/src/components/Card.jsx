import React from 'react'

function Card({username , profile="vist me"}) {
    
     
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black ">
    <img
      src="https://images.pexels.com/photos/29188346/pexels-photo-29188346/free-photo-of-fashionable-woman-posing-in-grunge-urban-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt=""
      className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
    />
    <div className="mt-6 mb-2">
    <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Username: <h1 className='text-lg font-semibold text-yellow-700'>{username}</h1>
      </span>
       

      <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        Title
      </span>       
       <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
    </div>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
      amet
    </p>
     <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-yellow-500'>{ profile}

     </button>
  </div> 
  )
}

export default Card