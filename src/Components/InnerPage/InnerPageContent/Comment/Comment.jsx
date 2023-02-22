import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CommentReply from '../CommentReply/CommentReply'
import './Comment.scss'

const Comment = ({comm , post}) => {


  const [text, setText] = useState('')
  const [commentChild , setCommentChild] = useState(comm.child)
  const MyToken = useSelector(state => state.globalReducer.MyToken)

  const addCommentReply = async () => {
    const newCommentReply = {
        "id": Date.now(),
        "user": {
            "id": Date.now(),
            "nickname": localStorage.getItem('nickname'),
            "name": localStorage.getItem('name'),
            "last_name": localStorage.getItem('last_name'),
            "profile_image": null
        },
        "text": text,
        'child': []
    }
    setCommentChild([...commentChild, newCommentReply])
    setText('')

    const accessTokenTwo = localStorage.getItem('token')
    const apiMe = 'https://megalab.pythonanywhere.com/comment/'

      const authAxios = axios.create({
         baseURL: apiMe,
         headers: {
            Authorization: `Token ${accessTokenTwo}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      })

      const body = {
        'post': post.id,
        'text': text,
        'parent': comm.id
      }

      const responseComment = await authAxios.post(` ` , body)
      console.log(responseComment.data)
  }
    
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
        {commentChild.map(commReply =>
            <CommentReply commReply={commReply}/>
        )}
        <div className="inp__answer-content">
            <div className="inp__answer-title">Вы</div>
            <input type="text" className="inp__answer-input" value={text} onChange={e => setText(e.target.value)}/>
            <div className="inp__answer-button" onClick={addCommentReply}>
                Ответить
            </div>
        </div>
    </div>
  )
}

export default Comment