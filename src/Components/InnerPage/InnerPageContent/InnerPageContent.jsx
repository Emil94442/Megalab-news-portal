import React from 'react'
import './InnerPageContent.scss'

const InnerPageContent = () => {
  return (
    <div className='inp'>
        <div className="inp__content">
            <div className="inp__arrow-left-img">
                <img src="Images/InnerPage/arrow-left.svg" alt="" />
            </div>

            <div className="inp__block-one">
                <div className="inp__data-and-title">
                   <div className="inp__data">29.11.2022</div>
                   <div className="inp__title">Заголовок новости</div>
                </div>
                <div className="inp__heart">
                   <img src="Images/InnerPage/heart.svg" alt="" />
                </div>
            </div>

            <div className="inp__block-two">
                <div className="inp__text-one">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </div>
                <div className="inp__img">
                   <img src="Images/InnerPage/big-img.jpg" alt="" />
                </div>
                <div className="inp__text-two">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                   Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
                   Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                </div>
                <div className="inp__share-img">
                   <img src="Images/Header/share.svg" alt="" />
                </div>
                <div className="inp__comment-content">
                    <div className="inp__comment-title">Комментарии</div>
                    <div className="inp__user-content">
                        <div className="inp__user-title">
                           Олег Петров
                        </div>
                        <div className="inp__user-text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="inp__data-content">
                            <div className="inp__data">30.11.2022</div>
                            <div className="inp__answer">Ответить</div>
                        </div>
                    </div>
                    <div className="inp__user-content-for-answer">
                        <div className="inp__user-title">
                           Олег Петров
                        </div>
                        <div className="inp__user-text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="inp__data-content">
                            <div className="inp__data">30.11.2022</div>
                            <div className="inp__answer">Ответить</div>
                        </div>
                        <div className="inp__answer-content">
                            <div className="inp__answer-title">Вы</div>
                            <input type="text" className="inp__answer-input"/>
                            <div className="inp__answer-button">
                                Ответить
                            </div>
                        </div>
                    </div>
                    <div className="inp__user-content-for-write-comment">
                        <div className="inp__user-title">
                           Олег Петров
                        </div>
                        <div className="inp__user-text">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </div>
                        <div className="inp__data-content">
                            <div className="inp__data">30.11.2022</div>
                            <div className="inp__answer">Ответить</div>
                        </div>
                        <div className="inp__write-comment-content">
                            <input type="text" className="inp__write-comment-input" placeholder='Напишите комментарий'/>
                            <div className="inp__write-comment-button">
                                Ответить
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InnerPageContent