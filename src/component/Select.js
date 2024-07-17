import React, { useEffect, useState } from 'react';

export default function Select({
  categories,
  getResult,
  reset,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(()=>{
    setSelectedValue('')
  },[reset]);

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
    getResult(e.target.value);
  };

  return (
    <select onChange={handleSelect} value={selectedValue} {...props}>
      {categories.map((item) => (
        <option key={item.idx} value={item.idx}>
          {item.command}
        </option>
      ))}
    </select>
  );
}
