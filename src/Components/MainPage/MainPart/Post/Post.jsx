import React from 'react'
import './Post.scss'

const Post = ({picture , heart , textClass , ...props}) => {
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
                       <img src={heart} alt="" style={{cursor: 'pointer'}}/>
                   </div>
                </div>
                <div className="posts__title">
                   Заголовок новости
                </div>
                <div className="posts__text">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
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