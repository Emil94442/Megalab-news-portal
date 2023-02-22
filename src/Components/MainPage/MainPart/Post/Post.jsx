import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Post.scss'

const Post = ({picture , heart , textClass , sizeOfTrash , posts , remove , ...props}) => {

  const navigate = useNavigate()

  const [heard, setHeard] = useState(false)

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
         'post': posts.id
      }

      const headers = {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
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
         'post': posts.id
      }

      const headers = {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       }

      const likeFetch = await authAxios.post(`` , body)
      const axiosLike = await likeFetch.data
      console.log(axiosLike)
   }
  }

  

  const deletePost = async () => {

     remove(posts)

     const apiMe = `https://megalab.pythonanywhere.com/post/${posts.id}`
     const MyToken = localStorage.getItem('token')

     const authAxios = axios.create({
      baseURL: apiMe,
      headers: {
         Authorization: `Token ${MyToken}`,
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   })
      
      const DeletPostAxios = await authAxios.delete(``)
      return DeletPostAxios  
  }

  
  useEffect(() => {
     if (posts.is_liked) {
        setHeard(true)
     } 

     if (!posts.is_liked) {
      setHeard(false)
   } 
  }, [])


  return (
    <div {...props}>
       <div className="posts__content">
            <img src={posts.image === null ? picture : `https://megalab.pythonanywhere.com/${posts.image}`} alt="" />
            <div className={textClass}>
                <div className="posts__data-and-like">
                   <div className="posts__data">
                      29.11.2022
                   </div>
                   <div className="posts__heart" onClick={!sizeOfTrash ? changeHeart : deletePost}>
                       {!sizeOfTrash 
                       ? (
                        <img src={!heard ? heart : 'Images/LikePage/red-heart.svg'} alt="" style={{cursor: 'pointer' , width: 30 , height: 30}}/>
                       )
                       : (
                        <img src={sizeOfTrash} alt="" style={{cursor: 'pointer' , width: 30 , height: 30}}/>
                       )
                     }
                       
                   </div>
                </div>
                <div className="posts__title">
                   {posts.title}
                </div>
                <div className="posts__text">
                   {posts.text}
                </div>
                <div className="posts__read-more" onClick={() => navigate(`/InnerPage/${posts.id}`)}>
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