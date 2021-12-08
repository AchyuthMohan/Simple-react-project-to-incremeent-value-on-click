
import './App.css';
import {useState} from 'react'
import Employee from './Employee';

function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    console.log(count);
    
  }
  let emp=[{name:'Achyuth',age:12},{name:"Adam",age:24}]
  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
      {
        emp.map((obj)=>{
          return(
            <Employee name={obj.name} age={obj.age}/>
          )
        })
      }
    </div>
  );
}

export default App;
