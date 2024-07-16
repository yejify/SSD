import React, { useEffect, useState } from 'react';

export default function Select({
  options,
  initValue,
  getResult,
  type,
  reset,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState(initValue || '');

  useEffect(()=>{
    setSelectedValue(initValue || '')
  },[reset, initValue]);

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
    getResult({ [type]: e.target.value });
  };

  return (
    <select onChange={handleSelect} value={selectedValue} {...props}>
      {options.map((item) => (
        <option value={item.id} key={item.id}>
          {item.category}
        </option>
      ))}
    </select>
  );
}
