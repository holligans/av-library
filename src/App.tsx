import { useState } from 'react';
import './App.css'
import { Modal } from './components/Modal';

function App() {
  const [isOpen, toggleModal] = useState(false);

  const onClose = () => {
    toggleModal(false);
  };

  return (
    <>
        <button onClick={() => toggleModal(true)}>
          Show Modal
        </button>
        <Modal title="Testing Title" isOpen={isOpen} onClose={onClose}>
          <p>Testing modal body</p>
        </Modal>  
    </>
  )
}

export default App
