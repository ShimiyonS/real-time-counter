import React,{useState} from 'react';
import './App.css';
import   './App.css';
const App=()=>{
    const[state,setState]=useState('');
    const handleChange=(event)=>{
      setState(event.target.value);
  }

  return <>
    <div className='container'>
      <h2> Real Time Counter   </h2>
      <textarea className='text-area' onChange={handleChange} ></textarea>
      <div> 
        <p className='counter' >   Character :{state.length} </p>
      </div>
    </div>
  </>
}
export default App;