import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import './CreatePost.scss'

const CreatePost = ({modal , setModal , myPosts , setMyPosts}) => {
  
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [short_desc, setShort_desc] = useState('')
  const [tag, setTag] = useState('')
  
  
  const NewPostCreate = async () => {
        const MyToken = localStorage.getItem('token')
        const apiMe = 'https://megalab.pythonanywhere.com/post/'

        const authAxios = axios.create({
            baseURL: apiMe,
            headers: {
                Authorization: `Token ${MyToken}`
            }
        })

        const body = {
            title,
            text,
            image,
            tag
        }

        console.log(body)

        const axiosPostCreate = await authAxios.post(`` , body)
        setMyPosts([...myPosts, body])
        console.log(axiosPostCreate.data)
        setModal(false)
  }

  return (
    modal &&
    <div className='cp' onClick={() => setModal(false)}>
        <div className="cp__content" onClick={e => e.stopPropagation()}>
            <div className="cp__x-img" onClick={() => setModal(false)}>
                <img src="Images/createPost/x.svg" alt="" />
            </div>
            <div className="cp__download-content">
                <div className="cp__form-block-one">
                    <div className="cp__form-text">
                        Обложка новости
                    </div>
                    <div className="cp__download-button">
                        <img src="Images/createPost/download-button.svg" alt="" />
                    </div>
                </div>
                <div className="cp__form-block-one">
                    <div className="cp__form-text">
                       Заголовок
                    </div>
                    <div className="cp__input-content">
                        <input type="text" className='cp__input' value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                </div>
                <div className="cp__form-block-one">
                    <div className="cp__form-text">
                       Краткое описание
                    </div>
                    <div className="cp__input-content">
                        <input type="text" className='cp__input' value={short_desc} onChange={e => setShort_desc(e.target.value)}/>
                    </div>
                </div>
                <div className="cp__form-block-one">
                    <div className="cp__form-text">
                       Текст новости
                    </div>
                    <div className="cp__input-content">
                        <input type="text" className='cp__input' value={text} onChange={e => setText(e.target.value)}/>
                    </div>
                </div>
                <div className="cp__form-block-one">
                    <div className="cp__form-text">
                       Выбрать категорию
                    </div>
                    <div className="cp__select-content">
                        <input type="text" value={tag} onChange={e => setTag(e.target.value)}/>
                    </div>
                </div>
                
                <div className="cp__button-creater" onClick={() => NewPostCreate()}>
                    Создать
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost