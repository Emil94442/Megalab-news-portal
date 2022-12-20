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
import { useEffect } from 'react';

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

  // token: 55bebfbe8e8532494dbe49f56f5c39fc2744aace

  const [posts , setPosts] = useState([])

  const loadDate = async () => {
    const body = {
      'nickname': 'Emil_GD',
      'name': 'Emil',
      'last_name': 'Turd',
      'profile_image': null,
      'password': '123_qwerty',
      'password2': '123_qwerty'
    }

    const headers = {
      'Content-Type': 'application/json'
    }
    
    const data = await fetch('https://megalab.pythonanywhere.com/registration/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers
    })
    const response = await data.json()
    if (response.ok) {
      setPosts(response)
    }

    /*.then(response => response.json())
    .then(json => setPosts(json))*/
    console.log(posts)

    

  }




  useEffect(() => {
      loadDate()
  }, [])

  console.log(posts)

  return (
    <div className="App">
        <Share/>
    </div>
  );
}

export default App;
