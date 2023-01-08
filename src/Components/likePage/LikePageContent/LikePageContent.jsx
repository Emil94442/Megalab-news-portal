import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Post from '../../MainPage/MainPart/Post/Post'
import './LikePageContent.scss'
import Menu from './Menu/Menu'

const LikePageContent = () => {

  const [likePosts , setLikePosts] = useState([])


  const accessTokenTwo = localStorage.getItem('token')
  const apiMe = 'https://megalab.pythonanywhere.com/like/'

  const authAxios = axios.create({
    baseURL: apiMe,
    headers: {
      Authorization: `Token ${accessTokenTwo}`
    }
  })

  const loadLikePosts = async () => {
      const loadPosts = await authAxios.get(``)
      setLikePosts(loadPosts.data)
      console.log(likePosts)
  }

  useEffect(() => {
    loadLikePosts()
  }, [])
  

  return (
    <div className='lpc'>
       <div className="lpc__content">
            <Menu/>

            <div className="lpc__block-main">
                <div className="lpc__title">Избранные новости</div>
                {likePosts.map(post =>
                     <Post
                        picture="Images/Header/Main__one-img.jpg" 
                        heart='Images/InnerPage/heart.svg' 
                        textClass={'posts__text-content like'} 
                        posts={post}
                        style={{marginTop: 16}}
                     />
               )}
                {/*<Post
                    picture="Images/Header/Main__one-img.jpg" 
                    heart='Images/LikePage/red-heart.svg' 
                    textClass={'posts__text-content like'} 
                    style={{marginTop: 48}}
                />
                <Post 
                   picture="Images/Header/Main__two-img.jpg" 
                   heart='Images/LikePage/red-heart.svg' 
                   textClass={'posts__text-content like'} 
                   style={{marginTop: 16}}
                />
                <Post 
                   picture="Images/Header/Main__three-img.jpg" 
                   heart='Images/LikePage/red-heart.svg' 
                   textClass={'posts__text-content like'} 
                   style={{marginTop: 16}}
                />
                <Post 
                   picture="Images/Header/Main__four-img.jpg" 
                   heart='Images/LikePage/red-heart.svg' 
                   textClass={'posts__text-content like'} 
                   style={{marginTop: 16}}
                />
                <Post 
                   picture="Images/Header/Main__five-img.jpg" 
                   heart='Images/LikePage/red-heart.svg' 
                   textClass={'posts__text-content like'} 
                   style={{marginTop: 16}}
                />*/}
            </div>
       </div>
    </div>
  )
}

export default LikePageContent