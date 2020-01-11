import React from 'react';

import TabBar from './TabBar';
import TabBarItem from './TabBarItem';

import MenuFull from '../../../img/project/menu-full.png';
import MenuMob1 from '../../../img/project/menu-mob-1.png';
import MenuMob2 from '../../../img/project/menu-mob-2.png';
import Potencialex from '../../../img/project/potencialex.png';
import Yoursels from '../../../img/project/yourself.png';
import Diplom from '../../../img/project/maket_sigIn.png';
import Full from '../../../img/project/version_2.jpg';
import Mob from '../../../img/project/mobile-version.jpg'


const Info = ({user}) => {
    return (
        <section className="header__info">
            <TabBar>
                <TabBarItem label="Общая информация">
                    <div className="base-info">
                        <div className="base">
                            <h3 className="title">Общее</h3>

                            <div className="base-full">
                                <span className="label">Фамилия:</span>
                                <p className="base-full__p">{user.familyName}</p>
                                <span className="label">Имя:</span>
                                <p className="base-full__p">{user.name}</p>
                                <span className="label">Отчество:</span>
                                <p className="base-full__p">{user.lastName}</p>
                                <span className="label">Пол:</span>
                                <p className="base-full__p">{user.sex}</p>
                                <span className="label">Возраст:</span>
                                <p className="base-full__p">{user.age}</p>
                                <span className="label">Город:</span>
                                <p className="base-full__p">{user.city}</p>
                                <span className="label">Номер:</span>
                                <p className="base-full__p">
                                    {user.phones.map((phone, index) => {
                                        return (
                                            <a key={index} href={'tel:'+phone}>{phone}</a>
                                        )
                                    })}
                                </p>
                                <span className="label">Почта:</span>
                                <p className="base-full__p">
                                    {user.mails.map((mail, index) => {
                                        return (
                                            <a key={index} href={'mailto:'+mail}>{mail}</a>
                                        )
                                    })}
                                </p>
                                <span className="label">Занятость:</span>
                                <p className="base-full__p">{user.employment}</p>
                            </div>
                        </div>
                        <div className="hobbies">
                            <h3 className="title">Увлечения</h3>

                            <ul>
                                {user.hobies.map((hobie, index) => {
                                    return (
                                        <li key={index} className="mt-10 pl-20">
                                            <span className="label">{hobie.title}: </span>
                                            {hobie.description}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div> 
                </TabBarItem>

                <TabBarItem label="Hard Skill">
                    <div className="hard">
                            {user.hardSkill.map((hard, index)=> {
                                return(
                                    <div key={index} className="hard__items">
                                        <h3 className="title">{hard.title}</h3>

                                        <ul>
                                            {hard.description.map((item, index) => {
                                                return (
                                                    <li key={index}>{item}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                </TabBarItem>

                <TabBarItem label="Soft skills">
                    <div className="soft">
                        {user.softSkill.map((soft, index)=> {
                            return(
                                <div key={index} className="soft__items">
                                    <h3 className="title">{soft.title}</h3>

                                    <ul>
                                        {soft.description.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </TabBarItem>

                <TabBarItem label="Проекты">
                    <div className="project">
                            <div className="project__items">
                                <h3 className="title">
                                    <a href="https://github.com/averlor/CRM" target="_blank" rel="noopener noreferrer">CRM: приложение по контролю финансов</a>
                                </h3>

                                <span className="old">приложение является учебным.</span>
                                <div>
                                    <p>Использовались: vue, view, components, router, vuex</p>
                                </div>
                            </div>

                            <div className="project__items">
                                <h3 className="title">
                                    <a href="https://github.com/averlor/cart_v2" target="_blank" rel="noopener noreferrer">Каталог + корзина</a>
                                </h3>

                                <span className="old">приложение является учебным.</span>
                                <div>
                                    <p>Использовались: view, components, router, vuex</p>
                                </div>
                            </div>

                            <div className="project__items  mt-5">
                                <h3 className="title">
                                    <a href="https://github.com/averlor/todo_v.2.0" target="_blank" rel="noopener noreferrer">ToDo</a>
                                </h3>

                                <span className="old">приложение является учебным.Имеется <a href="http://averlor-todo.surge.sh/" target="_blank" rel="noopener noreferrer">демо</a></span>
                                <div>
                                    <p>Использовались: view, components, router, vuex</p>
                                </div>
                            </div>

                            <div className="project__items mt-5">
                                <h3 className="title">
                                    <a href="https://github.com/averlor/responsiveMenu" target="_blank" rel="noopener noreferrer">Адаптивное меню</a>
                                </h3>

                                <span className="old">приложение является тестовым заданием. Имеется <a href={MenuFull} target="_blank" rel="noopener noreferrer">демо</a>, <a href={MenuMob1} target="_blank" rel="noopener noreferrer">демо</a> и <a href={MenuMob2} target="_blank" rel="noopener noreferrer">демо</a></span>
                                <div>
                                    <p>Использовались: html,css,js</p>
                                </div>
                            </div>

                            <div className="project__items mt-5">
                                <h3 className="title">
                                    <a href="https://github.com/averlor/landing_teamlead/" target="_blank" rel="noopener noreferrer">Potencialex</a>
                                </h3>

                                <span className="old">приложение является тестовым. Все ресурсы по проектам выдавались компание. Имеется <a href={Potencialex} target="_blank" rel="noopener noreferrer">демо</a></span>
                                <div>
                                    <p>Использовались: html,css,js,gulp,pug</p>
                                </div>
                            </div>

                            <div className="project__items mt-5">
                                <h3 className="title">
                                    <a href="https://github.com/averlor/landing/" target="_blank" rel="noopener noreferrer">СамСебеСантехник</a>
                                </h3>

                                <span className="old">приложение является тестовым. На разработку дали 30минут. Имеется <a href={Yoursels} target="_blank" rel="noopener noreferrer">демо</a></span>
                                <div>
                                    <p>Использовались: html,css,js</p>
                                </div>
                            </div>

                            <div className="project__items mt-5">
                                <h3 className="title">
                                    Дипломная работа
                                </h3>

                                <span className="old">приложение является учебным. Имеется <a href={Diplom} target="_blank" rel="noopener noreferrer">демо</a></span>
                                <div>
                                    <p>К сожалению, умений не хватило реализовать все, что придумал. А выкатывать прототип - не имеет смысла. Проект будет дорабатываться</p>
                                </div>
                            </div>

                            <div className="project__items mt-5">
                                <h3 className="title">
                                    Мои пробы в дизайне
                                </h3>

                                <span className="old">заказчик отказался от макетов</span>
                                <div>
                                    <p>Имеется <a href={Full} target="_blank" rel="noopener noreferrer">демо</a> и <a href={Mob} target="_blank" rel="noopener noreferrer">демо</a></p>
                                </div>
                            </div>
                        </div>
                        
                        <p className="link">Все работы хранятся <a href="https://github.com/averlor?tab=repositories" target="_blank" rel="noopener noreferrer" className="pl-5"> тут</a></p>
                </TabBarItem>

                <TabBarItem label="Опыт">
                    <div className="expirience">
                            <div className="official">
                                <h3 className="title">Официальный стаж</h3>

                                <ul>
                                    <li><span className="label">2019-2020:</span> Разработчик веб-интерфейсов в <a href="https://nicedo.ru/" target="_blank
                                        ">NiceDo</a>.<br />
                                        <span className="old">Стаж: 6 месяцев</span></li>
                                </ul>
                            </div>
                            <div className="other">
                                <h3 className="title">Прочая деятельность</h3>

                                <ul>
                                    <li><span className="label">2015:</span> Контент-менеджер в РМЭС.<br/>
                                        <span className="old">Стаж: 3 месяцев</span>
                                    </li>

                                    <li className="mt-10">
                                        <span className="label">2016:</span>
                                        <ul>
                                            <li className="mt-10">
                                                Стажировка в ОАО "ДеСот"<br/>
                                                <span className="old">Стаж: 1 месяцев</span>
                                            </li>
                                            <li className="mt-10">
                                                Участие в Хакатоне от МТС
                                            </li>
                                            <li className="mt-10">
                                                Первые пробы в фрилансе
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mt-10">
                                        <span className="label">2017:</span>
                                        <ul>
                                            <li className="mt-10">
                                                Стажировка в ОАО "ДеСот"<br/>
                                                <span className="old">Стаж: 1 месяцев</span>
                                            </li>
                                            <li className="mt-10">
                                                Участие в Хакатоне в Петербурге
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mt-10">
                                        <span className="label">2018:</span>
                                        <ul>
                                            <li className="mt-10">
                                                Стажировка в ОАО "ДеСот"<br/>
                                                <span className="old">Стаж: 1 месяц</span>
                                            </li>
                                            <li className="mt-10">
                                                Стажировка в Wilix<br/>
                                                <span className="old">Стаж: 2 месяца</span>
                                            </li>
                                            <li className="mt-10">Хакатон от "Центр-Инвест"</li>
                                            <li className="mt-10">Участие в Moscow Python Conf++</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </TabBarItem>

                <TabBarItem label="Будущее">
                    <div className="future">
                        {user.future.map((fut, index)=> {
                            if (fut.role === 'one') {
                                return(
                                    <div key={index} className="one-years">
                                        <h3 className="title">{fut.title}</h3>

                                        <ul>
                                            {fut.description.map((item, index) => {
                                                return (
                                                    <li className="mt-10" key={index}>{item}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            } else {
                                return(
                                    <div key={index} className="five-years">
                                        <h3 className="title">{fut.title}</h3>

                                        <ul>
                                            {fut.description.map((item, index) => {
                                                return (
                                                    <li className="mt-10" key={index}>{item}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </TabBarItem>
            </TabBar>
        </section>
    )
}

export default Info