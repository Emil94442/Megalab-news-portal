import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Comment from './Comment/Comment'
import CommentReply from './CommentReply/CommentReply'
//import arrow from "./Images/InnerPage/arrow-left.svg"
import './InnerPageContent.scss'

const InnerPageContent = ({post , setPost}) => {

  console.log(post.comment)

  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [postComment , setPostComment] = useState(post.comment)
  const [obgId, setObgId] = useState({})
  const [heard, setHeard] = useState(false)

  const heart = "/Images/InnerPage/heart.svg"
  const redHeart = "/Images/LikePage/red-heart.svg"
  

  const addComment = async () => {
    const obge = {
        "id": Date.now(),
        "user": {
            "id": Date.now(),
            "nickname": localStorage.getItem('nickname'),
            "name": localStorage.getItem('name'),
            "last_name": localStorage.getItem('last_name'),
            "profile_image": null
        },
        "text": text,
        "child": []
    }
    
    setPostComment([...postComment, obge])
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
        'text': text
      }

      const responseComment = await authAxios.post(` ` , body)
      console.log(responseComment.data)

      setObgId(responseComment.data)
  }


  const changeHeart = async () => {
    if (!heard) {
 
       setHeard(true)
 
     const accessTokenTwo = localStorage.getItem('token')
     const apiMe = 'https://megalab.pythonanywhere.com/like/'
 
       const authAxios = axios.create({
          baseURL: apiMe,
          headers: {
             Authorization: `Token ${accessTokenTwo}`,
             'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
       })
 
       const body = {
          'post': post.id
       }
 
 
       const likeFetch = await authAxios.post(`` , body)
       const axiosLike = await likeFetch.data
       console.log(axiosLike)
    } else {
       setHeard(false)

       const accessTokenTwo = localStorage.getItem('token')
       const apiMe = 'https://megalab.pythonanywhere.com/like/'
 
       const authAxios = axios.create({
          baseURL: apiMe,
          headers: {
             Authorization: `Token ${accessTokenTwo}`,
             'Content-Type': 'application/json',
             'Accept': 'application/json'
          }
       })
 
       const body = {
          'post': post.id
       }
 
 
       const likeFetch = await authAxios.post(`` , body)
       const axiosLike = await likeFetch.data
       console.log(axiosLike)
    }
   }

   useEffect(() => {
    if (post.is_liked) {
        setHeard(true)
     } 

     if (!post.is_liked) {
      setHeard(false)
   } 
   }, [])
   

  return (
    <div className='inp' style={{marginBottom: 0}}>
        <div className="inp__content">
            <div className="inp__arrow-left-img" onClick={() => navigate(-1)}>




                <img src="/Images/InnerPage/arrow-left.svg" alt="arrow-back" />





            </div>

            <div className="inp__block-one">
                <div className="inp__data-and-title">
                   <div className="inp__data">29.11.2022</div>
                   <div className="inp__title">{post.title}</div>
                </div>
                <div className="inp__heart" onClick={changeHeart}>
                   <img src={heard ? redHeart : heart} alt="heart" />
                </div>
            </div>

            <div className="inp__block-two">
                <div className="inp__text-one">
                   {post.text}
                </div>
                <div className="inp__img">
                   <img 
                       src={post.image === null 
                       ? "/Images/Header/Main__one-img.jpg" 
                       : `https://megalab.pythonanywhere.com/${post.image}`
                       }  
                       alt="картина поста" 
                       style={{width: '30%', height: '30%'}}
                   />
                </div>
                <div className="inp__text-two">
                   
                </div>
                <div className="inp__share-img">
                   <img src="/Images/Header/share.svg" alt="share" />
                </div>
                <div className="inp__comment-content">
                    <div className="inp__comment-title">Комментарии</div>
                    {post.comment && !post.comment.length
                      ? <h1 style={{margin: '20px 0'}}>Здесь нет комментариев</h1>
                      : post.comment && postComment.map(comm =>
                        <Comment comm={comm} post={post} obg={obgId}/>
                    )
                    }

                    {/*post.comment.length
                      && post.comment && post.comment[0].child.map(commReply =>
                        <CommentReply commReply={commReply}/>
                    )
                      */}
                    
                    
                    
                    
                    <div className="inp__user-content-for-write-comment">
                        
                        <div className="inp__write-comment-content">
                            <input 
                               type="text" 
                               className="inp__write-comment-input" 
                               placeholder='Напишите комментарий'
                               value={text}
                               onChange={e => setText(e.target.value)}
                            />
                            <div className="inp__write-comment-button" onClick={() => addComment()}>
                                Ответить
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InnerPageContent