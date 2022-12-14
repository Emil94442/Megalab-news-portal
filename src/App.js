import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './App.scss'
import Autorization from './Components/authorization/Autorization';
import MainPage from './Components/MainPage/MainPage';
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
       <MainPage/>
    </div>
  );
}

export default App;
