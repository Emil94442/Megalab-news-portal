import React from 'react'
import './MainPart.scss'
import Post from './Post/Post'

const MainPart = () => {
  return (
    <div className='MainPart'>
        <div className="MainPart__content">
            <div className="MainPart__options options">
                 <div className="options__title">Фильтрация</div>

                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Спорт</div>
                 </div>
                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Политика</div>
                 </div>
                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Звезды</div>
                 </div>
                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Искусство</div>
                 </div>
                 <div className="options__checkbox-content">
                   <input type="checkbox" name="" id="" />
                   <div className="options__title-checkbox">Мода</div>
                 </div>
                 
                 <div className="options__button">
                    Применить
                 </div>
            </div>

            <div className="MainPart__posts posts">  
                <Post picture="Images/Header/Main__one-img.jpg" heart='Images/InnerPage/heart.svg' textClass={'posts__text-content'}/>
                <Post picture="Images/Header/Main__two-img.jpg" heart='Images/InnerPage/heart.svg' textClass={'posts__text-content'} style={{marginTop: 16}}/>
                <Post picture="Images/Header/Main__three-img.jpg" heart='Images/InnerPage/heart.svg' textClass={'posts__text-content'} style={{marginTop: 16}}/>
                <Post picture="Images/Header/Main__four-img.jpg" heart='Images/InnerPage/heart.svg' textClass={'posts__text-content'} style={{marginTop: 16}}/>
                <Post picture="Images/Header/Main__five-img.jpg" heart='Images/InnerPage/heart.svg' textClass={'posts__text-content'} style={{marginTop: 16}}/>
            </div>
        </div>
    </div>
  )
}

export default MainPart