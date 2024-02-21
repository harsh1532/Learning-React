import logo from './logo.svg';
import './App.css';
import Fun from './fun';
import { useState } from 'react';
function App() { 
  

  

  // const [number, setNumber]=useState(0);
  
  // function  handleClick(){
  //   setNumber(number+1);
  //   setNumber(number+1);
  //   setNumber(number+1);
  //   setNumber(number+1);
  //   setNumber(number+1);

    
  // }
  // function removeNum(){
  //   setNumber(number-1)

  // }
  const [color,setColor] = useState("red");

  return (<>
  
    <div style={{color: "red",height:"500px",width:"500px",padding:"10px",border:"2px  solid black",backgroundColor:color}}>
      <h1 >Hello Style!</h1>
      
      <button onClick={()=>{setColor("red")}}>Red</button>
      <button onClick={()=>{setColor("yellow")}}>Yelbcvblow</button>

      <button onClick={()=>{setColor("gray")}}>gray</button>
      <button onClick={()=>{setColor("orange")}}>Orange</button>

      </div>
  </>);
}

export default App;
