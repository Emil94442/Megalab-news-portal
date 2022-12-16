import React from 'react'
import './CreatePost.scss'

const CreatePost = () => {
  return (
    <div className='cp'>
        <div className="cp__content">
            <div className="cp__x-img">
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
                        <input type="text" className='cp__input'/>
                    </div>
                </div>
                <div className="cp__form-block-one">
                    <div className="cp__form-text">
                       Краткое описание
                    </div>
                    <div className="cp__input-content">
                        <input type="text" className='cp__input'/>
                    </div>
                </div>
                <div className="cp__form-block-one">
                    <div className="cp__form-text">
                       Текст новости
                    </div>
                    <div className="cp__input-content">
                        <input type="text" className='cp__input'/>
                    </div>
                </div>
                <div className="cp__form-block-one">
                    <div className="cp__form-text">
                       Выбрать категорию
                    </div>
                    <div className="cp__select-content">
                        <select>
                            <option value="not-selected">Не выбрано</option>
                        </select>
                    </div>
                </div>
                <div className="cp__not-selected-button">
                    #не выбрано
                </div>
                <div className="cp__button-creater">
                    Создать
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost