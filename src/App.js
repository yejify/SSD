import { useState } from 'react';
import './App.css';
import InputList from './component/Input';

function App() {
  const [inputList, setInputList]=useState([0])

const addInput =()=>{
  let countInput = [...inputList]
  let counter = countInput.slice(-1)[0]
  counter += 1
  countInput.push(counter)
  setInputList(countInput)
}

  const onSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <InputList inputList={inputList} setInputList={setInputList}/>
        <button onClick={addInput}>추가</button>
        <button type='submit'>전송</button>
      </form>
    </div>
  );
}

export default App;
