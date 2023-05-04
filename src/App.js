import { useState } from "react";
import React from "react";
import SuplierPage from "./SuplierPage";
import Animals from "./Animals";
import NewTask from "./NewTask";



function App() {
  const people = [{
    id : "1" ,
    name : "Azer" ,
    age : 12
  } ,
  {
    id : "2" ,
    name : "Leyla" ,
    age : 32
  }, 
  {
    id : "3" ,
    name : "Turan" ,
    age : 32
  } ,
  {
    id : "4" ,
    name : "Ali" ,
    age : 32
  } ,
  {
    id : "5" ,
    name : "Mehemmed" ,
    age : 32
  } ,
  {
    id : "6" ,
    name : "Abutalib" ,
    age : 32
  }

]

const [peopleState, setPeopleState] = useState(people) ;
 

  return (
    // <div className="App">
    //   <ul className="Ul">  
    //    {
    //     peopleState.map(
    //       a=><li>{a.name} <button onClick={()=>{
    //         const newArray = peopleState.filter(e=>e.id !=a.id)
    //         setPeopleState(newArray) 
    //       }}> delete</button></li> 

    //     ) 
    //    }


    //   </ul>
    // <Animals/>
    <NewTask/>

    // </div>
    // <SuplierPage />

  )
}

export default App;
