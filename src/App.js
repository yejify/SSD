import React, { useState } from 'react';
import './App.css';
import InputList from './components/InputList';
import { generateHTMLContent, downloadHTMLFile } from './utils/htmlUtils';

const App = () => {
  const initialInputState = [
    {
      id: 0,
      image: '',
      url: '',
      checked: false,
      additionalImage: '',
      additionalUrl: '',
    },
  ];
  const [inputFields, setInputFields] = useState(initialInputState);

  const handleInputChange = (id, field, value) => {
    setInputFields((prevFields) =>
      prevFields.map((fieldItem) =>
        fieldItem.id === id ? { ...fieldItem, [field]: value } : fieldItem
      )
    );
  };
  const addInput = () => {
    setInputFields((prevList) => [
      ...prevList,
      {
        checked: false,
        id: prevList.length ? prevList[prevList.length - 1].id + 1 : 0,
        image: '',
        url: '',
      },
    ]);
  };
  const removeInput = (id) => {
    setInputFields((prevFields) =>
      prevFields.filter((fieldItem) => fieldItem.id !== id)
    );
  };

  const onGenerate = () => {
    console.log(inputFields);
    const htmlContent = generateHTMLContent(inputFields);
    downloadHTMLFile(htmlContent, 'generated.html');
    setInputFields(initialInputState);
  };

  return (
    <div className='App'>
      <form onSubmit={(e) => e.preventDefault()}>
        <InputList
          inputList={inputFields}
          handleInputChange={handleInputChange}
          removeInput={removeInput}
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
};

export default App;
