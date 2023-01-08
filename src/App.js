import { useState } from 'react';
import './App.scss';
import { Button } from 'react-bootstrap';
import MenuStripes from './Components/MainPage/MainPart/MenuStripes/MenuStripes';
import Share from './Components/Share/Share';
import Registration from './Components/Registration/Registration'
import LikePage from './Components/likePage/LikePage';
import MainPage from './Components/MainPage/MainPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import CreatePost from './Components/CreatePost/CreatePost';
import Autorization from './Components/authorization/Autorization';
import InnerPage from './Components/InnerPage/InnerPage';
import axios from 'axios'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

  // token: 8c73618d1b186a1ecc882ba7f6a6aa91de452c78

  
  const verifiedRegistration = useSelector(state => state.verifReducer.verifiedRegistration)
  

  return (
    <BrowserRouter>
       <div className="App">
          {/*verifiedRegistration ? <Autorization/> : <Registration/>*/}
          <Routes>
            <Route path='/Registration' element={<Registration/>}/>
            <Route path='/Autorization' element={<Autorization/>}/>
            <Route path='/MainPage' element={<MainPage/>}/>
            <Route path='/LikePage' element={<LikePage/>}/>
            <Route path='/InnerPage/:id' element={<InnerPage/>}/>
            <Route path='/Profile' element={<ProfilePage/>}/>
          </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
