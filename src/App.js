import { useState } from 'react';
import './App.scss';
import { Button } from 'react-bootstrap';
import MenuStripes from './Components/MainPage/MainPart/MenuStripes/MenuStripes';
import Share from './Components/Share/Share';
import Registration from './Components/Registration/Registration'

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
       <Button variant='primary'>Menu</Button>
       <Registration/>
    </div>
  );
}

export default App;
