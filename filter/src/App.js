import './App.css';
import { useState } from "react";

function App() {
  const selectList=["선택","type1", "type2", "type3"];
  const [selected, SetSeleted]=useState("선택");

  const handleSelect =(e)=>{
    SetSeleted(e.target.value);
  };


  return (
    <div className="App">
    <div>
      <select onChange={handleSelect} value={selected}>
        {selectList.map((item)=><option value={item} key={item.indexOf}>{item}</option>)}
      </select>
      <input type="submit" value="선택"/>
    </div>
    </div>
  );
}

export default App;
