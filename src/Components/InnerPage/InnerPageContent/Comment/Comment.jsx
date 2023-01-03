import React from 'react'
import CommentReply from '../CommentReply/CommentReply'
import './Comment.scss'

const Comment = ({comm}) => {
    
  return (
    <div className='Comment'>
        <div className="inp__user-content">
            <div className="inp__user-title">
               {comm.user.name}
            </div>
            <div className="inp__user-text">
               {comm.text}
               
            </div>
            <div className="inp__data-content">
                <div className="inp__data">30.11.2022</div>
                <div className="inp__answer">Ответить</div>
            </div>
        </div>
        {comm.child.map(commReply =>
            <CommentReply commReply={commReply}/>
        )}
        <div className="inp__answer-content">
            <div className="inp__answer-title">Вы</div>
            <input type="text" className="inp__answer-input"/>
            <div className="inp__answer-button">
                Ответить
            </div>
        </div>
    </div>
  )
}

export default Comment