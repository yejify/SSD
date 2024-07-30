import React from 'react';

export default function InputList({inputList, setInputList}) {
  console.log(inputList)
  const removeInput = (index)=>{
    setInputList(inputList.filter((_, i)=>i !==index))
  }
  return (
    <>
    {inputList.map((item, i)=>(
      <div className='inputDiv' key={i}>
        <h3>IMAGE</h3>
        <input type='text' placeholder='이미지 링크를 입력해주세요'/>
        <h3>URL</h3>
        <input type='text' placeholder='링크를 입력해주세요'/>
        <button onClick={()=>removeInput(i)}>제거</button>
      </div>
    ))}
    </>
  );
}
