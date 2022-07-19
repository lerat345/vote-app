import logo from './logo.svg';
import './App.css';
import Vote from'./vote.js';
import Button from './button';
import { useState } from 'react';


function App(){


  const [year,setyear]=useState()
  const[age,setage]=useState()

  const ValidityState=() =>{

    let age=2022-year;

    if(age>=18){
      alert("You can vote")

    }
    else{
     alert ("You cant vote")
    }
    
    
  }


  const setvalue =(e) =>{

    setyear(e.target.value);

  }
  
  return(
  <div className="App">
  <Vote/>
  <form id='validate'></form>
  <input type="text" placeholder='year' id='year' onChange={(e)=>setvalue(e)} ></input><br></br>
  <button onClick= {ValidityState}>submit</button>
  
  

</div>


  );
  
}
  

export default App;

