import React from 'react'
import Comment from './Comment/Comment'
import CommentReply from './CommentReply/CommentReply'
//import arrow from "./Images/InnerPage/arrow-left.svg"
import './InnerPageContent.scss'

const InnerPageContent = ({post}) => {

  console.log(post.comment)

  const arrowLeft = "/Images/InnerPage/arrow-left.svg"

  return (
    <div className='inp' style={{marginBottom: 0}}>
        <div className="inp__content">
            <div className="inp__arrow-left-img">




                <img src="/Images/InnerPage/arrow-left.svg" alt="arrow-back" />





            </div>

            <div className="inp__block-one">
                <div className="inp__data-and-title">
                   <div className="inp__data">29.11.2022</div>
                   <div className="inp__title">{post.title}</div>
                </div>
                <div className="inp__heart">
                   <img src="/Images/InnerPage/heart.svg" alt="heart" />
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
                      : post.comment && post.comment.map(comm =>
                        <Comment comm={comm}/>
                    )
                    }

                    {/*post.comment.length
                      && post.comment && post.comment[0].child.map(commReply =>
                        <CommentReply commReply={commReply}/>
                    )
                      */}
                    
                    
                    
                    
                    <div className="inp__user-content-for-write-comment">
                        
                        <div className="inp__write-comment-content">
                            <input type="text" className="inp__write-comment-input" placeholder='Напишите комментарий'/>
                            <div className="inp__write-comment-button">
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