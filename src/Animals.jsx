import React, { useState } from 'react'

function Animals() {

    const [animals , setAnimals] = useState([])
    const [userInput ,setInput] =useState()

    const addAnimal=()=>{
        animals.push(userInput)
        setAnimals([...animals])
       
    } 
  return (
    <div className='Animals'>
        
        <h1>Animals</h1>
        <input type="text"  onChange={(e)=> setInput(e.target.value)}/>

        <div className="button-container">
            <button onClick={()=> setAnimals([])}>
                Clear
            </button>
            <button onClick={addAnimal}>
                Add
            </button>
        </div>

        <ul>
           {
            animals.map((e,i)=> <li key={i}>
                {e}
            </li>)
           }
        </ul>

    </div>
  )
}

export default Animals