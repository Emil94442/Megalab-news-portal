import React from 'react'
import './MainPart.scss'

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
                <div className="posts__content">
                    <img src="Images/Header/Main__one-img.jpg" alt="" />
                    <div className="posts__text-content">
                        <div className="posts__data">
                           29.11.2022
                        </div>
                        <div className="posts__title">
                           Заголовок новости
                        </div>
                        <div className="posts__text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="posts__read-more">
                           Читать дальше >>
                        </div>
                        <div className="posts__share-img">
                           <img src="Images/Header/Share.svg" alt="" className=''/>
                        </div>
                    </div> 
                </div>
                <div className="posts__line"></div>
                <div className="posts__content">
                    <img src="Images/Header/Main__two-img.jpg" alt="" />
                    <div className="posts__text-content">
                        <div className="posts__data">
                           29.11.2022
                        </div>
                        <div className="posts__title">
                           Заголовок новости
                        </div>
                        <div className="posts__text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="posts__read-more">
                           Читать дальше >>
                        </div>
                        <div className="posts__share-img">
                           <img src="Images/Header/Share.svg" alt="" className=''/>
                        </div>
                    </div> 
                </div>
                <div className="posts__line"></div>
                <div className="posts__content">
                    <img src="Images/Header/Main__three-img.jpg" alt="" />
                    <div className="posts__text-content">
                        <div className="posts__data">
                           29.11.2022
                        </div>
                        <div className="posts__title">
                           Заголовок новости
                        </div>
                        <div className="posts__text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="posts__read-more">
                           Читать дальше >>
                        </div>
                        <div className="posts__share-img">
                           <img src="Images/Header/Share.svg" alt="" className=''/>
                        </div>
                    </div> 
                </div>
                <div className="posts__line"></div>
                <div className="posts__content">
                    <img src="Images/Header/Main__four-img.jpg" alt="" />
                    <div className="posts__text-content">
                        <div className="posts__data">
                           29.11.2022
                        </div>
                        <div className="posts__title">
                           Заголовок новости
                        </div>
                        <div className="posts__text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="posts__read-more">
                           Читать дальше >>
                        </div>
                        <div className="posts__share-img">
                           <img src="Images/Header/Share.svg" alt="" className=''/>
                        </div>
                    </div> 
                </div>
                <div className="posts__line"></div>
                <div className="posts__content">
                    <img src="Images/Header/Main__five-img.jpg" alt="" />
                    <div className="posts__text-content">
                        <div className="posts__data">
                           29.11.2022
                        </div>
                        <div className="posts__title">
                           Заголовок новости
                        </div>
                        <div className="posts__text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="posts__read-more">
                           Читать дальше >>
                        </div>
                        <div className="posts__share-img">
                           <img src="Images/Header/Share.svg" alt="" className=''/>
                        </div>
                    </div> 
                </div>
                <div className="posts__line"></div>
            </div>
        </div>
    </div>
  )
}

export default MainPart