/* eslint-disable no-undef */
import { useState } from 'react';
import './App.css';
import InputList from './components/InputList';
import { generateHTMLContent, downloadHTMLFile } from './utils/htmlUtils';

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

  const onGenerate = () => {
    const htmlContent = generateHTMLContent(inputList);
    downloadHTMLFile(htmlContent, 'generated.html');
    setInputList(initialInputState); // 상태를 초기 상태로 리셋
  };

  return (
    <div className='App'>
      <form onSubmit={(e) => e.preventDefault()}>
        <InputList
          inputList={inputList}
          removeInput={removeInput}
          handleInputChange={handleInputChange}
        />
        <button type='button' onClick={addInput}>
          추가
        </button>
        <button type='button' onClick={onGenerate}>
          생성 및 다운로드
        </button>
      </form>
    </div>
  );
}

export default App;
