import { useEffect, useState } from 'react';
import './App.css';
import Select from './Select';
import Input from './Input';
import getCategory from './api/getCategory';

function App() {
  const [categories, setCategories] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [inputs, setInputs] = useState([]);
  const [resetSelect, setResetSelect] = useState(false);

  useEffect(() => {
    getCategory()
      .then((data) => {
        setCategories([{ id: '', category: '선택', input: [] }, ...data]);
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
        setInputs(selected.input.map(input => ({title:input.title, value:''})));
      }
    }
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
          options={categories}
          getResult={getResult}
          type='category'
          reset={resetSelect}
        />
        {inputs.map((input, index) => (
          <Input 
            key={index} 
            name={input.title} 
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
