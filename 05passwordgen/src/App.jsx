import { useState ,useCallback, useEffect ,useRef} from 'react'


function App() {
   const [length , setlength] = useState(8);
   const[numberAllowed ,setnumberAllowed] = useState(false);
   const [ charAllow , setcharAllow] = useState(false);
    const[ password , setpassword] = useState("")

    // useref hook 

  const Passworrewf= useRef(null)

    const passwordGenerator = useCallback( () => {   // this is usecallback  hooks first declear fn then arry
           let pass=""
           let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

           if(numberAllowed) str +="0123456789"
           if(charAllow)  str +="!@#$%^&*()_+-=[]{}|;:'"

            for (let i = 1; i <=length; i++) {
                let char =  Math.floor(Math.random() * str.length +1);
                   
                pass += str.charAt(char)

            }

            setpassword(pass)

    } , [ length , numberAllowed , charAllow ,setpassword])

 
   const copypasswordgen = useCallback( () => {
       Passworrewf.current ?.select();
       password.current ?.setSelectorRange(0,100)  
      window.navigator.clipboard.writeText(password)
   },[password])
  
    


    useEffect( () => {
         passwordGenerator()

    } ,[length ,numberAllowed , charAllow ])


  return (
    
        <div className='mx-auto   items-center justify-center shadow-md rounded-lg px-7 py-6 my-8 text-orange-500 bg-gray-800'>
           
           <h1 className=' text-white   text-center text-balance my-2'> password Generator</h1>

           <div className='flex  shadow  rounded-lg overflow-hidden mb-4'>

               <input type="text" value={password} className='outline-none w-full py-1 px-3' 
                placeholder='Password'
                 readOnly
                  ref={Passworrewf}
               />
               
                <button
                  onClick={copypasswordgen} 
                 className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
           </div>
              
              <div className=" flex text-sm gap-x-2">

                  <div className='flex items-center text-lg gap-x-1'> 
                     <input
                      type="range" min={6} max={100} value={length}
                        className='cursor-pointer'

                        onChange={ (e) => {setlength(e.target.value)}}
                     >
                      </input>

                     <label> lenght:{length}</label>
                  </div>
                   
                  <div className='flex items-center text-lg gap-x-1'> 
                     <input
                      type="checkbox" defaulChecked={numberAllowed}
                      id="numberinput"
                      
                        onChange={ () => { setnumberAllowed((prev)  => !prev );

                        }}
                     />
                     <label htmlFor='numberinput'>Numbers</label>
                  </div>

                  <div className='flex items-center  text-lg gap-x-1'> 
                     <input
                      type="checkbox" defaulChecked={charAllow}
                      id="charinput"
                      
                        onChange={ () => { setcharAllow((prev)  => !prev );

                        }}
                     />
                     <label htmlFor='charinput'>Characters</label>
                  </div>

              </div>
        </div>
    
  )
}

export default App
