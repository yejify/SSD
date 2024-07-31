import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PreviewModal = ({ isOpen, onRequestClose, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Preview Modal'
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
        },
      }}
    >
      <h2>미리보기</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <button onClick={onRequestClose}>닫기</button>
    </Modal>
  );
};

export default PreviewModal;
