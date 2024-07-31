/* eslint-disable no-undef */
import { useState } from 'react';
import './App.css';
import InputList from './component/Input';

function App() {
  const initialInputState = [{ id: 0, image: '', url: '' }];
  const [inputList, setInputList] = useState(initialInputState);

  const addInput = () => {
    setInputList((prevList) => [
      ...prevList,
      {
        id: prevList.length ? prevList[prevList.length - 1].id + 1 : 0,
        image: '',
        url: '',
      },
    ]);
  };

  const removeInput = (id) => {
    setInputList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setInputList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputList);
    setInputList(initialInputState);
  };

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <InputList
          inputList={inputList}
          removeInput={removeInput}
          handleInputChange={handleInputChange}
        />
        <button type='button' onClick={addInput}>
          추가
        </button>
        <button type='submit'>전송</button>
      </form>
    </div>
  );
}

export default App;
