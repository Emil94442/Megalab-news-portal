import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Moleculas/Footer/Footer'
import Header from '../Moleculas/Header/Header'
import './InnerPage.scss'
import InnerPageContent from './InnerPageContent/InnerPageContent'
import InnerPageThis from './InnerPageThis'

const InnerPage = () => {

  const params = useParams()

  const [loading, setLoading] = useState()
  const [post , setPost] = useState({})

  const fetchLoad = () => {
    const accessTokenTwo = '8c73618d1b186a1ecc882ba7f6a6aa91de452c78'
    const apiMe = `https://megalab.pythonanywhere.com/post/${params.id}`

    const authAxios = axios.create({
      baseURL: apiMe,
      headers: {
        Authorization: `Token ${accessTokenTwo}`
      }
    })

    const fetchTodo = async () => {
      try {
        setLoading(true)
        const result = await authAxios.get(``)
        setPost(result.data)
        console.log(post)
      } catch (e) {
        setPost(e.message)
      }
      finally {
        setLoading(false)
      }
    }

    fetchTodo()
}


useEffect(() => {
    fetchLoad()
}, [])
  

  return (
    <div className='InnerPage'>
        <Header/>
        <InnerPageContent post={post} arrowLeft="Images/InnerPage/arrow-left.svg"/>
        <Footer style={{}}/>

    </div>
  )
}

export default InnerPage