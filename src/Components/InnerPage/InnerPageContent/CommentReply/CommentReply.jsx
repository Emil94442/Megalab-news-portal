import React from 'react'
import './CommentReply.scss'

const CommentReply = ({commReply}) => {
  return (
    <div className='CommentReply'>
        <div className="inp__user-content-for-answer">
            <div className="inp__user-title">
               {commReply.user.name}
               
            </div>
            <div className="inp__user-text">
               {commReply.text}
            
            </div>
            <div className="inp__data-content">
                <div className="inp__data">30.11.2022</div>
                <div className="inp__answer">Ответить</div>
            </div>
                        
        </div>
    </div>
  )
}

export default CommentReply