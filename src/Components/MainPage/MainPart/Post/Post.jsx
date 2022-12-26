import React from 'react'
import './Post.scss'

const Post = ({picture , heart , textClass , sizeOfTrash , posts , ...props}) => {
  return (
    <div {...props}>
       <div className="posts__content">
            <img src={picture} alt="" />
            <div className={textClass}>
                <div className="posts__data-and-like">
                   <div className="posts__data">
                      29.11.2022
                   </div>
                   <div className="posts__heart">
                       <img src={heart} alt="" style={{cursor: 'pointer' , width: 30 , height: 30}}/>
                   </div>
                </div>
                <div className="posts__title">
                   {posts.title}
                </div>
                <div className="posts__text">
                   {posts.text}
                </div>
                <div className="posts__read-more">
                   Читать дальше >>
                </div>
                <div className="posts__share-img">
                   <img src="Images/Header/Share.svg" alt="" style={{cursor: 'pointer'}}/>
                </div>
            </div> 
        </div>
        <div className="posts__line"></div>
    </div>
  )
}

export default Post