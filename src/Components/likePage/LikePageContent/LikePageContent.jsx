import React from 'react'
import Post from '../../MainPage/MainPart/Post/Post'
import './LikePageContent.scss'

const LikePageContent = () => {
  return (
    <div className='lpc'>
       <div className="lpc__content">
            <div className="lpc__block-menu">
                <div className="lpc__logo">
                    <img src="Images/LikePage/title.svg" alt=""/>
                </div>
                <div className="lpc__nav-menu">
                    <img src="Images/LikePage/search.svg" alt=""/>
                    <img src="Images/LikePage/profile.svg" alt=""/>
                    <img src="Images/LikePage/menu.svg" alt=""/>
                </div>
            </div>

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