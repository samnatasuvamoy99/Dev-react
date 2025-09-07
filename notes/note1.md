            ## how to create any html ele in js

const reactelement = React.createElement(
      'a', // tag name 
      {href:'https://google.com' , target:'_blank'},
      'click  me to visit Google' // tag ke under prop of obj
 )

 ## evaluate method // veriable injection into the  js .... App,jsx example  
 {username} --> under the second backet you access anything that you not declear in the element for something else;

 ##
 const [counter ,setcounter] = useState(15)  // hooks 
 1.counter is veriable
 and 2nd is function jo responce kerte he 


 ##
 const passwordGenerator = useCallback( () => {   // this is usecallback  hooks first declear fn then arry
           let pass=""
           let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            } , [ length , numberAllowed , charAllow ,setpassword])

 ## useeffect
      it will use any create password or  as that value will be changes some time any methid that you will be use own your code  
       it will update automatically ui or display
                  

## make router in react inside a array then into obj
const router =createBrowserRouter([
  
]) 

## context
   make a variable then export that variable
   
      const UserContext = React.createContext()
        export default UserContext

 ## open cd
 npm install -D tailwindcss@3 postcss autoprefixer
 
 npx tailwindcss init -p
  ---> tailwind

  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

<<<<<<< HEAD
@tailwind base;
@tailwind components;
@tailwind utilities;

=======
>>>>>>> 9678fb1e0559c51f11b0b0fee597aba16e6c2bf8
npm create vite@latest -- vite

## redux toolkit
npm install @reduxjs/toolkit
npm install react-redux
