import "./App.css";
import { useState } from "react";
 
import Card from "./components/Card"


function App() {
      
  let myObje = {
       username :"suvamoy",
        age:21
  }

    let newArr =[1,4,6,78]
    
   return (
    <>
      <h1 className=" bg-green-400 text-black rounded-2xl mb-8">
       
        Tailwind Project
      </h1>
      <Card  username=" suvamoyyou9" profile="click-me"/>
      <Card username="Nabanita99" profile="vist me"/>
    </>
  );
}

export default App;
