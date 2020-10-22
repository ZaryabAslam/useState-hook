import React, { useState } from 'react';
import './App.css';
import Parent from './components/Parent';


// function App() {
//   let [counter, setcounter] = useState(0)
//   let [islit, setlit] = useState(false)
//   function addition(){
//     return setcounter = ++counter
//   }
//   return (
//     <div className={`App ${islit? "morning" : "night"}`}>
//       <h3>The value of counterssss is : {counter}</h3>
//       <button onClick={addition}>Increment the counter using function</button>
//       <button onClick={()=> setlit(!islit)}>change light</button>
//       <button onClick={()=>setcounter(++counter)}>Increment the counter using state</button> 
//       <h3>The value of counterssss is : {counter}</h3>
//     </div>
//   );
// }



function App() {
  let [count, countsetter] = useState(0)
  function counter(){
  countsetter(++count)
  }
  return (
    <div>
      <h1>
        the value of count is : {count}
      </h1>
      <br />
      <button onClick={counter}>increment counter using function</button>
      <button onClick={()=> countsetter(++count)}>increment counter using use state</button>
     <Parent />
    </div>
  );
}

export default App;
