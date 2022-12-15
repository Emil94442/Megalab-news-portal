import React from 'react'
import './ProfilePage.scss'
import Post from '../MainPage/MainPart/Post/Post'
import Footer from '../Moleculas/Footer/Footer'
import ProfilePageContent from './ProfilePageContent/ProfilePageContent'


const ProfilePage = () => {
  return (
    <div className='ProfilePage'>
        <ProfilePageContent/>
        <Footer/>
    </div>
  )
}

export default ProfilePage