import { useEffect, useState } from 'react';
import './App.css';
import Select from './component/Select';
import Input from './component/Input';
import { getCategory, getCommand } from './api/getCategory';

function App() {
  const [categories, setCategories] = useState([
    { idx: 0, command: '선택', value: '' },
  ]);
  const [inputValues, setInputValues] = useState({});
  const [inputs, setInputs] = useState([]);
  const [resetSelect, setResetSelect] = useState(false);

  useEffect(() => {
    getCategory()
      .then((data) => {
        console.log(data);
        setCategories([{ idx: 0, command: '선택', value: '' }, ...data]);
      })
      .catch((error) => {
        console.error('Failed to fetch categories', error);
      });
  }, []);

  const getResult = (obj) => {
    getCommand(obj)
    .then((data) => {
      setInputs(data);
    })
    .catch((error) => {
      console.error('Failed to fetch categories', error);
    });
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index].value = value;
    setInputs(newInputs);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const submittedValues = { ...inputValues, inputs };
    console.log(submittedValues);
    setInputs([]);
    setInputValues({});
    setResetSelect(!resetSelect);
  };

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <Select
          categories={categories}
          getResult={getResult}
          reset={resetSelect}
        />
        {inputs.map((input, index) => (
          <Input
            key={index}
            name={input.command}
            getResult={(obj) => handleInputChange(index, Object.values(obj)[0])}
            value={input.value}
          />
        ))}
        <button type='submit'>전송</button>
      </form>
    </div>
  );
}

export default App;
