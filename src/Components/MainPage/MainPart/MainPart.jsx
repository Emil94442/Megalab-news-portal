import React from 'react'
import './MainPart.scss'
import Post from './Post/Post'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MainPart = () => {

  const [posts , setPosts] = useState([])
  const [loading , setLoading] = useState(false)
  const [seconds , setSeconds] = useState(0)
  const MyToken = useSelector(state => state.globalReducer.MyToken)

  const navigate = useNavigate()

  const loadDate = async () => {
    const body = {
      'nickname': 'Emil_2005',
      'password': '123_qwerty'
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    
    const data = await fetch('https://megalab.pythonanywhere.com/login/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers
    })
    const response = await data.json()
      

    /*.then(response => response.json())
    .then(json => setPosts(json))*/
    console.log(response)

    

  }

  const userPost = async () => {
    /*const accessToken = '8c73618d1b186a1ecc882ba7f6a6aa91de452c78'
    const accessTokenTwo = '3faad9bce6cbbfff743948885b938cddddf74703'

    const authAxios = axios.create({
      baseURL: `https://megalab.pythonanywhere.com/post/`,
      headers: {
        Authorization: `Token ${accessToken}`
      }
    })

    const fetchTodo = async () => {
      try {
        const result = await authAxios.get(`https://megalab.pythonanywhere.com/post/`)
        setPosts(result.data)
        console.log(posts)
      } catch (e) {
        setPosts(e.message)
      }
    }

    fetchTodo()*/

    
    

    const accessTokenTwo = localStorage.getItem('token')
    const apiMe = 'https://megalab.pythonanywhere.com/post/'

    const authAxios = axios.create({
      baseURL: apiMe,
      headers: {
        Authorization: `Token ${accessTokenTwo}`
      }
    })

    const fetchTodo = async () => {
      try {
        setLoading(true)
        const result = await authAxios.get(``)
        setPosts(result.data)
        console.log(posts)
      } catch (e) {
        setPosts(e.message)
      }
      finally {
        setLoading(false)
      }
    }

    fetchTodo()
}


useEffect(() => {

    
    userPost()
}, [])

useEffect(() => {
  let interval = setInterval(() => {
     setSeconds((seconds) => seconds + 1)
  }, 1000)

  return () => clearInterval(interval)

} , [seconds])

   
  const exitFromAccount = () => {
    localStorage.removeItem('nickname')
    localStorage.removeItem('last_name')
    localStorage.removeItem('name')
    localStorage.removeItem('password')
    localStorage.removeItem('token')
    navigate(`/Registration`)
  }

  return (
    <div className='MainPart'>
        <div className="MainPart__content">
            <div className="MainPart__options options">
                 <div className="options__title">Фильтрация</div>

                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Спорт</div>
                 </div>
                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Политика</div>
                 </div>
                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Звезды</div>
                 </div>
                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Искусство</div>
                 </div>
                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Мода</div>
                 </div>
                 
                 <div className="options__button">
                    Применить
                 </div>
            </div>

            <div className="MainPart__posts posts">  
                {/*<Post 
                  picture="Images/Header/Main__one-img.jpg" 
                  heart='Images/InnerPage/heart.svg' 
                  textClass={'posts__text-content'}
                  posts={posts}
  />*/}
                {loading
                 ? <h1>Идёт загрузка постов {seconds} сек</h1>

                 : posts && posts.map(post =>
                     <Post 
                        picture="Images/Header/Main__one-img.jpg" 
                        heart='Images/InnerPage/heart.svg' 
                        textClass={'posts__text-content'}
                        posts={post}
                        style={{marginTop: 16}}
                      />
               )
            }
            </div>
        </div>
        <h1 onClick={exitFromAccount}>Выйти</h1>
    </div>
  )
}

export default MainPart