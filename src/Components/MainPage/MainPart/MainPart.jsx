import React, { useContext, useMemo } from 'react'
import './MainPart.scss'
import Post from './Post/Post'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import CheckBoxTag from './CheckBoxTag/CheckBoxTag'
import { searchConsoleOff } from '../../../redux/action'
import { AuthContext } from '../../../AuthContext'

const MainPart = () => {

  const [posts , setPosts] = useState([])
  const [loading , setLoading] = useState(false)
  const [seconds , setSeconds] = useState(0)
  const [tag , setTag] = useState('')
  const [tagS , setTagS] = useState([])
  const {searchVisible , setSearchVisible} = useContext(AuthContext)
  const [searchQuery , setSearchQuery] = useState('')

  const navigate = useNavigate()


  const userPost = async () => {

    const accessTokenTwo = localStorage.getItem('token')
    const apiMe = 'https://megalab.pythonanywhere.com/post/'

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
        setPosts(result.data)
        setTagS(result.data)
        console.log(posts)
      } catch (e) {
        setPosts(e.message)
      }
      finally {
        setLoading(false)
      }
    }

    fetchTodo()
}

const getTags = () => {
    /*const accessTokenTwo = localStorage.getItem('token')
    const apiMe = 'https://megalab.pythonanywhere.com/post/'

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
        setTagS(result.data)
        console.log(posts)
      } catch (e) {
        setTagS(e.message)
      }
      finally {
        setLoading(false)
      }
    }

    fetchTodo()
    console.log('tagS' , tagS)*/
  
}


useEffect(() => {
    userPost()
    getTags()
}, [])

useEffect(() => {
  let interval = setInterval(() => {
     setSeconds((seconds) => seconds + 1)
  }, 1000)

  return () => clearInterval(interval)

} , [seconds])

   
  const exitFromAccount = () => {
    localStorage.removeItem('nickname')
    localStorage.removeItem('last_name')
    localStorage.removeItem('name')
    localStorage.removeItem('password')
    localStorage.removeItem('token')
    navigate(`/Registration`)
  }

  const tagReturn = (...tags) => {
    const joinTags = tags.join(' ')
    const MyTags = [...tag, joinTags]
    setTag(MyTags)
    console.log(tag)
  }

  const tagFilter = async () => {
      const MyToken = localStorage.getItem('token')
      const apiMe = `https://megalab.pythonanywhere.com/post/?tag=${tag}`
  
      const authAxios = axios.create({
          baseURL: apiMe,
          headers: {
            Authorization: `Token ${MyToken}`
          }
      })
      
      const apiMeV2 = `https://megalab.pythonanywhere.com/post/`
  
      const authAxiosV2 = axios.create({
          baseURL: apiMeV2,
          headers: {
            Authorization: `Token ${MyToken}`
          }
      })

      const fetchTodo = async () => {
        try {
          setLoading(true)
          const getPostForTag = await authAxios.get(``)
          const getTags = await authAxiosV2.get(``)
          setPosts(getPostForTag.data)
          setTagS(getTags.data)
          console.log(getPostForTag.data)
          console.log(posts)
        } catch (e) {
          setPosts(e.message)
        }
        finally {
          setLoading(false)
          setTag('')
          console.log('tag >>> ' , tag)
        }
      }
  
      fetchTodo()
      
  }

  const SearchPostsFunction = useMemo(() => {
    if (searchQuery) {
      return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    } else {
      return posts
    }
  }, [posts, searchQuery])

  return (
    <div className="MainPart">
        <div className={searchVisible ? 'MainPart__search visible' : 'MainPart__search'}>
          <input 
            className='MainPart__search-input' 
            type="text" 
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Поиск постов'
          />
          <h1 className='MainPart__search-close' onClick={() => setSearchVisible(false)}>&times;</h1>
        </div>
     {loading 
     ? <div className='MainPart__loading'>
          <Spinner animation="border" variant="primary" style={{width: 75, height: 75}}/>
       </div>

     : 
         <div className="MainPart__content">
            <div className="MainPart__options options">
                 <div className="options__title">Фильтрация</div>
                <div className="options__tags">

                  {tagS.map(tags => 
                    <CheckBoxTag tags={tags} tag={tagReturn}/>
                  )}
                   
                </div>
                <div className="options__button" type='submit' onClick={tagFilter}>
                    Применить
                 </div>
              
                 
            </div>

            <div className="MainPart__posts posts">  
                {loading
                 ? <h1>Идёт загрузка постов {seconds} сек</h1>

                 : posts && SearchPostsFunction.map(post =>
                     <Post 
                        picture="Images/Header/Main__one-img.jpg" 
                        heart='Images/InnerPage/heart.svg' 
                        textClass={'posts__text-content'}
                        posts={post}
                        style={{marginTop: 16}}
                      />
               )
            }
            </div>
        </div>}
        {!loading && <h1 onClick={exitFromAccount}>Выйти</h1>}
    </div>
  )
}

export default MainPart