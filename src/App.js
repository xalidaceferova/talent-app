import { useState } from "react";
import Levels from "./Levels/Levels";




function App() {
  const[currentstep,setCurrentstep]=useState(0)
  
 
  return (
    <>
    <Levels currentstep={currentstep} setCurrentstep={setCurrentstep}></Levels>
  

   
    </>
  );
}

export default App;
