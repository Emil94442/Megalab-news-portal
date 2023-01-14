import React from 'react'
import Post from '../../MainPage/MainPart/Post/Post'
import Menu from '../../likePage/LikePageContent/Menu/Menu'
import './ProfilePageContent.scss'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import CreatePost from '../../CreatePost/CreatePost'

const ProfilePageContent = () => {

  const [user, setUser] = useState({})
  const [modal, setModal] = useState(false)
  const [myPosts, setMyPosts] = useState([])




  const getUser = async () => {

    const MyToken = localStorage.getItem('token')
    const apiMe = 'https://megalab.pythonanywhere.com/user/'

    const authAxios = axios.create({
        baseURL: apiMe,
        headers: {
            Authorization: `Token ${MyToken}`
        }
    })

    const fetchUser = await authAxios.get(``)
    setUser(fetchUser.data)
    console.log(user)


    
    const nickname = localStorage.getItem('nickname')
    const apiMeV2 = `https://megalab.pythonanywhere.com/post/?author=${nickname}`

    const authAxiosV2 = axios.create({
        baseURL: apiMeV2,
        headers: {
            Authorization: `Token ${MyToken}`
        }
    })

    const fetchMyCreatePost = await authAxiosV2.get(``)
    setMyPosts(fetchMyCreatePost.data)

  }

  const removeItem = (p) => {
    setMyPosts(myPosts.filter(post => post.id !== p.id))
  }


  useEffect(() => {
    getUser()
  }, [])


  const OpenModal = () => {
    setModal(true)
  }

  return (
    <div className='pp'>
        <CreatePost modal={modal} setModal={setModal} myPosts={myPosts} setMyPosts={setMyPosts}/>
        <Menu/>
        <div className="pp__profile-options-content">
            <div className="pp__profile-img-content">
                <div className="pp__profile-img">
                    <img src="Images/ProfilePage/profile-foto.svg" alt=""/>
                    <img src="Images/ProfilePage/foto.svg" alt="" className='Detail'/>
                </div>
                <div className="pp__profile-download-content">
                    <div className="pp__text-one">Добавить фото</div>
                    <img src="Images/ProfilePage/download.svg" alt="" style={{marginLeft: 8 , cursor: 'pointer'}}/>
                    <div className="pp__text-one">Удалить</div>
                    <img src="Images/ProfilePage/trash.svg" alt="" style={{marginLeft: 8 , cursor: 'pointer'}}/>
                </div>
            </div>
            <div className="pp__profile-form-content">
                 <div className="pp__profile-form-block">
                    <div className="pp__form-title">Фамилия</div>
                    <div className="pp__form-input-content">
                        <input type="text" className="pp__form-input" value={user.last_name}/>
                        <img src="Images/ProfilePage/edit.svg" alt="" className='pp__edit'/>
                    </div>
                 </div>
                 <div className="pp__profile-form-block">
                    <div className="pp__form-title">Имя</div>
                    <div className="pp__form-input-content">
                        <input type="text" className="pp__form-input" value={user.name}/>
                        <img src="Images/ProfilePage/edit.svg" alt="" className='pp__edit'/>
                    </div>
                 </div>
                 <div className="pp__profile-form-block">
                    <div className="pp__form-title">Никнейм</div>
                    <div className="pp__form-input-content">
                        <input type="text" className="pp__form-input" value={user.nickname}/>
                        <img src="Images/ProfilePage/edit.svg" alt="" className='pp__edit'/>
                    </div>
                 </div>
                 <div className="pp__profile-form-button">
                    Cохранить
                 </div>
            </div>
        </div>
        <div className="pp__profile-main-content">
            <div className="pp__title-and-download-content">
                <div className="pp__title">
                    Мои публикации
                </div>
                <div className="pp__new-download" onClick={OpenModal}>
                    Новая публикация
                </div>
            </div>
                {myPosts.length
                 ? myPosts.map(post =>
                    <Post
                        picture="Images/Header/Main__one-img.jpg" 
                        heart='Images/InnerPage/heart.svg' 
                        textClass={'posts__text-content like'}
                        sizeOfTrash={'/images/ProfilePage/trash.svg'}
                        posts={post}
                        remove={removeItem}
                        style={{marginTop: 16}}
                    />
                )
                : <h1 style={{textAlign: 'center'}}>Здесь нет постов</h1>
                
                }
                {/*<Post
                    picture="Images/Header/Main__one-img.jpg" 
                    heart='Images/ProfilePage/trash.svg' 
                    textClass={'posts__text-content like'} 
                    style={{marginTop: 48}}
                />
                <Post 
                   picture="Images/Header/Main__two-img.jpg" 
                   heart='Images/ProfilePage/trash.svg' 
                   textClass={'posts__text-content like'} 
                   style={{marginTop: 16}}
                />
                <Post 
                   picture="Images/Header/Main__three-img.jpg" 
                   heart='Images/ProfilePage/trash.svg' 
                   textClass={'posts__text-content like'} 
                   style={{marginTop: 16}}
                />
                <Post 
                   picture="Images/Header/Main__four-img.jpg" 
                   heart='Images/ProfilePage/trash.svg' 
                   textClass={'posts__text-content like'} 
                   style={{marginTop: 16}}
                />
                <Post 
                   picture="Images/Header/Main__five-img.jpg" 
                   heart='Images/ProfilePage/trash.svg' 
                   textClass={'posts__text-content like'} 
                   style={{marginTop: 16}}
  />*/}
        </div>
    </div>
  )
}

export default ProfilePageContent