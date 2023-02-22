import { useState } from 'react';

import { Button } from 'react-bootstrap';
import MenuStripes from './Components/MainPage/MainPart/MenuStripes/MenuStripes';
import Share from './Components/Share/Share';
import Registration from './Components/Registration/Registration'
import LikePage from './Components/likePage/LikePage';
import MainPage from './Components/MainPage/MainPage';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import InnerPage from './Components/InnerPage/InnerPage';
import Autorization from './Components/authorization/Autorization';
import axios from 'axios'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function App() {

  const [searchVisible , setSearchVisible] = useState(false)

  // token: 8c73618d1b186a1ecc882ba7f6a6aa91de452c78

  
  
  const verifiedRegistration = useSelector(state => state.verifReducer.verifiedRegistration)
  

  return (
    <AuthContext.Provider value={{
      searchVisible,
      setSearchVisible
    }}>
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
            <Route path='/share' element={<Share/>}/>
            <Route path='*' element={<Registration/>}/>
          </Routes>
         </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
