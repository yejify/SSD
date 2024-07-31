import React from 'react';

export default function InputList({
  inputList,
  removeInput,
  handleInputChange,
}) {
  return (
    <>
      {inputList.map(
        ({ id, image, url, checked, additionalImage, additionalUrl }) => (
          <div className='inputDiv' key={id}>
            <input
              type='checkbox'
              checked={checked}
              onChange={(e) =>
                handleInputChange(id, 'checked', e.target.checked)
              }
            />
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
            {checked && (
              <div className='additionalContent'>
                <h3>추가 IMAGE</h3>
                <input
                  type='text'
                  placeholder='추가 이미지 링크를 입력해주세요'
                  name='additionalImage'
                  value={additionalImage || ''}
                  onChange={(e) =>
                    handleInputChange(id, 'additionalImage', e.target.value)
                  }
                />
                <h3>추가 URL</h3>
                <input
                  type='text'
                  placeholder='추가 링크를 입력해주세요'
                  name='additionalUrl'
                  value={additionalUrl || ''}
                  onChange={(e) =>
                    handleInputChange(id, 'additionalUrl', e.target.value)
                  }
                />
              </div>
            )}
          </div>
        )
      )}
    </>
  );
}
