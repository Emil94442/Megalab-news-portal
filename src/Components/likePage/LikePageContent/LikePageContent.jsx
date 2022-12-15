import React from 'react'
import Post from '../../MainPage/MainPart/Post/Post'
import './LikePageContent.scss'
import Menu from './Menu/Menu'

const LikePageContent = () => {
  return (
    <div className='lpc'>
       <div className="lpc__content">
            <Menu/>

            <div className="lpc__block-main">
                <div className="lpc__title">Избранные новости</div>
                <Post
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
                />
            </div>
       </div>
    </div>
  )
}

export default LikePageContent