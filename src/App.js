import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './App.scss'
import Autorization from './Components/authorization/Autorization';
import Registration from './Components/Registration/Registration';
import Modal from './Components/UI/Modal';

function App() {

  const [modal , setModal] = useState(false)
  const [valueModal , setValueModal] = useState('')

  const OpenModal = (value) => {
    if (!modal) {
      setModal(true)
      setValueModal(value)
    } else {
      setModal(false)
      setValueModal(value)
    }
  }

  return (
    <div className="App">
      <Button variant='primary' onClick={() => OpenModal('reg')}>Регистрация</Button>
      <Button variant='primary' onClick={() => OpenModal('aut')}>Авторизация</Button>
      <Modal modal={modal} setModal={setModal}>
         {valueModal === 'reg' ? <Registration/> : <Autorization/>}
      </Modal>
    </div>
  );
}

export default App;
