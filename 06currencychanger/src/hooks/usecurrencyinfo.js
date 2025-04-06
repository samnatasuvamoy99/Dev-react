import {  useEffect ,useState } from "react";

function useurrencyinfo( currency){

  const [data,setdata] = useState({})

      useEffect ( () => {
          
         
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)

        .then( (res) => res.json())
        .then((res) => { setdata(res.rates) })
        
        .catch((err) => {
          console.error("Error fetching currency info:", err);
        }); 
          
      } ,[currency])
      
      return data
    
}
export default useurrencyinfo;
