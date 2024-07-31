import React from 'react';

export default function InputList({
  inputList,
  removeInput,
  handleInputChange,
}) {
  return (
    <>
      {inputList.map(({ id, image, url }) => (
        <div className='inputDiv' key={id}>
          <h3>IMAGE</h3>
          <input
            type='text'
            placeholder='이미지 링크를 입력해주세요'
            name='image'
            value={image}
            onChange={(e) => handleInputChange(id, 'image', e.target.value)}
          />
          <h3>URL</h3>
          <input
            type='text'
            placeholder='링크를 입력해주세요'
            name='url'
            value={url}
            onChange={(e) => handleInputChange(id, 'url', e.target.value)}
          />
          <button type='button' onClick={() => removeInput(id)}>
            제거
          </button>
        </div>
      ))}
    </>
  );
}
