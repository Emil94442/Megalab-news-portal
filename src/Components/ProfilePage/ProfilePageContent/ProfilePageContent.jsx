import React from 'react'
import Post from '../../MainPage/MainPart/Post/Post'
import Menu from '../../likePage/LikePageContent/Menu/Menu'
import './ProfilePageContent.scss'

const ProfilePageContent = () => {
  return (
    <div className='pp'>
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
                        <input type="text" className="pp__form-input" value='Oлегов'/>
                        <img src="Images/ProfilePage/edit.svg" alt="" className='pp__edit'/>
                    </div>
                 </div>
                 <div className="pp__profile-form-block">
                    <div className="pp__form-title">Имя</div>
                    <div className="pp__form-input-content">
                        <input type="text" className="pp__form-input" value='Oлег'/>
                        <img src="Images/ProfilePage/edit.svg" alt="" className='pp__edit'/>
                    </div>
                 </div>
                 <div className="pp__profile-form-block">
                    <div className="pp__form-title">Никнейм</div>
                    <div className="pp__form-input-content">
                        <input type="text" className="pp__form-input" value='oleg.olegov'/>
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
                <div className="pp__new-download">
                    Новая публикация
                </div>
            </div>
                <Post
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
                />
        </div>
    </div>
  )
}

export default ProfilePageContent