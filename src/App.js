import { useState } from 'react';
import './App.scss'
import InnerPage from './Components/InnerPage/InnerPage';

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
       <InnerPage/>
    </div>
  );
}

export default App;
