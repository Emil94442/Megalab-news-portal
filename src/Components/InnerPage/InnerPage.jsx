import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
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
  const MyToken = useSelector(state => state.globalReducer.MyToken)

  const fetchLoad = () => {
    const accessTokenTwo = localStorage.getItem('token')
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
        {loading
         ? <h1>Загрузка...</h1>
         : <InnerPageThis post={post} setPost={setPost} params={params.id}/>
        }

    </div>
  )
}

export default InnerPage