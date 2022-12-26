import React from 'react'
import './MainPart.scss'
import Post from './Post/Post'
import axios from 'axios'
import { useState , useEffect } from 'react'

const MainPart = () => {

  const [posts , setPosts] = useState()

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
    console.log(posts)

    

  }

  const userPost = async () => {
    const accessToken = '8c73618d1b186a1ecc882ba7f6a6aa91de452c78'

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

    fetchTodo()
}


useEffect(() => {
    loadDate()
    userPost()
}, [])



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
                <Post 
                  picture="Images/Header/Main__one-img.jpg" 
                  heart='Images/InnerPage/heart.svg' 
                  textClass={'posts__text-content'}
                  posts={posts}
                />

            </div>
        </div>
    </div>
  )
}

export default MainPart