import { useEffect, useState } from 'react';
import './App.css';
import Select from './Select';
import Input from './Input';
import getCategory from './api/getCategory';

function App() {
  const [categories, setCategories] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    getCategory()
      .then((data) => {
        setCategories([{ id: '', category: '선택', input: 0 }, ...data]);
      })
      .catch((error) => {
        console.error('Failed to fetch categories', error);
      });
  }, []);

  const getResult = (obj) => {
    setInputValues({ ...inputValues, ...obj });

    if (obj.category) {
      const selected = categories.find(category => category.id === parseInt(obj.category));
      if (selected) {
        setInputs(Array(selected.input).fill(''));
      }
    }
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const submittedValues = { ...inputValues, inputs };
    console.log(submittedValues);
    setInputs([]);
    setInputValues({});
  };

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <Select
          options={categories}
          getResult={getResult}
          type='category'
        />
        {inputs.map((_, index) => (
          <Input 
            key={index} 
            name={`input${index + 1}`} 
            getResult={(obj) => handleInputChange(index, Object.values(obj)[0])} 
            value={inputs[index] || ''}
          />
        ))}
        <button type='submit'>전송</button>
      </form>
    </div>
  );
}

export default App;
