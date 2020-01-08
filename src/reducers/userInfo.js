import avatar from '../img/7.jpg';

import html from '../img/certificate/html.jpg';
import css from '../img/certificate/css.jpg';
import js from '../img/certificate/js.jpg';
import sql from '../img/certificate/sql.jpg';
import python from '../img/certificate/python.jpg';

const initialState = {
    user: {
        avatar: avatar,
        familyName: 'Абрамянц',
        name: 'Владимир',
        lastName: 'Александрович',
        sex: 'Мужской',
        age: '22 года, родился 1 января 1998 года',
        city: 'Краснодар',
        phones: ['89385159940', '89002674059'],
        mails: ['newerpython@gmail.com', 'avabramanc@gmail.com'],
        employment: 'полная занятость',
        facts: [
            'В детстве, как и все, мечтал стать космонавтом...',
            'Уже в 7 лет, сев за компьютер, понял, что хочу быть "как папа" и уйти в мир технологий',
            'В 2015 году реализовал свое детское "хочу" - поступил в КУБГАУ на исит',
            '2015-2019 - активное участие в различных хакатонах. Стажировки в различных компаниях. Первая работа',
            '2019 год - защитил диплом и закончил университет',
            'Сегодняшний день - вы смотрите мое резюме и подумываете взять меня на работу'],
        hobies: [
            {
                title: 'Программирование',
                description: 'мое главное увлечение. Получаю колосальное удовольствие при разработке. Это же так круто - из ничего создать что-то'
            },
            {
                title: 'Книги',
                description: 'очень люблю фантастику. Как научную, так и просто фэнтези.'
            },
            {
                title: 'Музыка',
                description: 'меломан, но больше ориентируюсь на альтернативу и рок. '
            },
            {
                title: 'Спорт',
                description: 'раньше часто участвовал в различных соревнования. Сейчас же люблю просто смотреть все, кроме футбола. Керлинг смотреть и то интереснее.'
            },
            {
                title: 'Религия\мифология',
                description: 'сам не особо верю, но очень интересно читать или слушать документальные факты'
            },
            {
                title: 'Люди',
                description: 'очень нравятся новые знакомства. Зачастую, они несут много полезного'
            }
        ],
        hardSkill: [
            {
                title: 'HTML',
                description: [
                    'Основы',
                    'Особенности html5',
                    'Семантика',
                    'Доступность',
                    'Шаблонизатор pug - <span class="old">давно не использовал. Следует освежить знания</span>'
                ]
            },
            {
                title: 'CSS',
                description: [
                    'Основы',
                    'Особенности CSS3',
                    'Макеты (box model, float, flex, grid, позиционирование)',
                    'Анимация',
                    'Медиа-запросы',
                    'Пользуюсь SCSS, bootstrap (пробовал uikit, но не понравилось)'
                ]
            },
            {
                title: 'JS',
                description: [
                    'Основы',
                    'Манипуляция с DOM',
                    'Контекст, область видимости, замыкания, прототипы, ajax',
                    'Знание ООП',
                    'Изучаю react',
                    'Пробовал Vue.js  -  <span class="old">в силу работы, вынужден был перейти обратно на ванильный js</span>'
                ]
            },
            {
                title: 'PYTHON',
                description: [
                    'Основы',
                    'ООП',
                    'Функциональное программирование',
                    'Изучаю алгоритмы и паттерны',
                    'Flask'
                ]
            },
            {
                title: 'БД',
                description: [
                    'Базовые знания mongodb',
                    'Базовые знания sql'
                ]
            },
            {
                title: 'ИНСТРУМЕНТЫ',
                description: [
                    'Владение английским языком: среднее (могу читать документацию)',
                    'Умею гуглить',
                    'VSCode - редактор кода + куча плагинов',
                    'PyCharm',
                    'Gulp  - <span class="old">последнее время очень редко. Стоит освежить в памяти</span>'
                ]
            },
            {
                title: 'ОС',
                description: [
                    'Win10 - <span class="old">использую на работе</span>',
                    'Ubuntu - <span class="old">для своих целей</span>'
                ]
            },
            {
                title: 'ПРОЧИЕ',
                description: [
                    'Имеется небольшой опыт разработки под БУС, Битрикс24',
                    'Имеется небольшой опыт разработки под wordpress'
                ]
            }
        ],
        softSkill: [
            {
                title: 'Коммуникативные навыки',
                description: [
                    'Умею построить диалог',
                    'Умею вести переписку',
                    'Не возникает трудностей с публичным выступлением',
                    'Нет проблем с объяснением решения или вопроса'
                ]
            },
            {
                title: 'Творческие навыки',
                description: [
                    'Способен систематизировать',
                    'Неплохо получается фотографировать'
                ]
            },
            {
                title: 'Аналитические навыки',
                description: [
                    'Способен оценить ситуацию/вопрос/решение',
                    'Умею изучать и исследовать проблемный вопрос'
                ]
            },
            {
                title: 'Организаторские навыки',
                description: [
                    'Не составляет проблем распланировать день/бюджет',
                    'Имеется опыт руководительской деятельности'
                ]
            },
            {
                title: 'Интерактивые навыки',
                description: [
                    'Имеется опыт проведения собеседований',
                    'Имеется опыт проведения консультаций'
                ]
            },
            {
                title: 'Прочие навыки',
                description: [
                    'Пунктуальность',
                    'Целеустремленность',
                    'Ответственность',
                    'Стрессоустойчивость',
                    'Обладаю чувством юмора'
                ]
            }
        ],
        project: [
            {
                title: '<a href="https://github.com/averlor/CRM">CRM: приложение по контролю финансов</a>',
                type_app: 'приложение является учебным.',
                description: 'Использовались: vue, view, components, router, vuex'
            },
            {
                title: '<a href="https://github.com/averlor/cart_v2">Каталог + корзина</a>',
                type_app: 'приложение является учебным.',
                description: 'Использовались: vue, view, components, router, vuex'
            },
            {
                title: '<a href="https://github.com/averlor/todo_v.2.0">ToDo</a>',
                type_app: 'приложение является учебным.Имеется <a href="http://averlor-todo.surge.sh/" target="_blank">демо</a>',
                description: 'Использовались: view, components, router, vuex'
            },
            {
                title: '<a href="https://github.com/averlor/responsiveMenu">Адаптивное меню</a>',
                type_app: 'приложение является тестовым заданием. Имеется <a href="img/project/menu-full.png" target="_blank">демо</a>, <a href="img/project/menu-mob-1.png" target="_blank">демо</a> и <a href="img/project/menu-mob-2.png" target="_blank">демо</a>',
                description: 'Использовались: html,css,js'
            },
            {
                title: '<a href="https://github.com/averlor/landing_teamlead/">Potencialex</a>',
                type_app: 'приложение является тестовым. Все ресурсы по проектам выдавались компание. Имеется <a href="img/project/potencialex.png" target="_blank">демо</a>',
                description: 'Использовались: html,css,js,gulp,pug'
            },
            {
                title: '<a href="https://github.com/averlor/landing/" target="_blank">СамСебеСантехник</a>',
                type_app: 'приложение является тестовым. На разработку дали 30минут. Имеется <a href="img/project/yourself.png" target="_blank">демо</a>',
                description: '>Использовались: html,css,js'
            },
            {
                title: 'Дипломная работа',
                type_app: 'приложение является учебным. Имеется <a href="img/project/maket_sigIn.png" target="_blank">демо</a>',
                description: 'К сожалению, умений не хватило реализовать все, что придумал. А выкатывать прототип - не имеет смысла. Проект будет дорабатываться'
            },
            {
                title: 'Мои пробы в дизайне',
                type_app: 'заказчик отказался от макетов',
                description: 'Имеется <a href="img/project/version_2.jpg" target="_blank">демо</a> и <a href="img/project/mobile-version.jpg" target="_blank">демо</a>'
            }
        ],
        expirience: [
            {
                type: 'official', 
                year: '2019-2020',
                description: [
                    '</span> Разработчик веб-интерфейсов в <a href="https://nicedo.ru/" target="_blank">NiceDo</a>.<br /><span class="old">Стаж: 6 месяцев</span>'
                ]
            },
            {
                type: 'no-official', 
                year: '2015',
                description: [
                    'Контент-менеджер в РМЭС.<br/><span class="old">Стаж: 3 месяцев</span>'
                ]
            },
            {
                type: 'no-official', 
                year: '2016',
                description: [
                    'Стажировка в ОАО "ДеСот"<br/><span class="old">Стаж: 1 месяцев</span>',
                    'Участие в Хакатоне от МТС',
                    'Первые пробы в фрилансе'
                ]
            },
            {
                type: 'no-official', 
                year: '2017',
                description: [
                    'Стажировка в ОАО "ДеСот"<br/><span class="old">Стаж: 1 месяцев</span>',
                    'Участие в Хакатоне в Санкт-Петербурге'
                ]
            },
            {
                type: 'no-official', 
                year: '2018',
                description: [
                    'Стажировка в ОАО "ДеСот"<br/><span class="old">Стаж: 1 месяц</span>',
                    'Стажировка в Wilix<br/><span class="old">Стаж: 2 месяца</span>',
                    'Хакатон от "Центр-Инвест"',
                    'Участие в Moscow Python Conf++'
                ]
            }
        ],
        future: [
            {
                title: 'В течение года',
                description: [
                    'Изучить webpack',
                    'Изучить docker',
                    'Улучшить свои знания в react',
                    'Улучшить свои знания в flask',
                    'Выйти на уверенную связку react+flask+sql(reddis + mysql/sqlite3/postgresql)'
                ]
            },
            {
                title: 'В течение 5 лет',
                description: [
                    'Машинное обучение + компьютерное зрение',
                    'Нейронные сети',
                    'Уверенная разработка десктоп/мобильных приложений(Electron js + pwa(react native))'
                ]
            }
        ],
        course: [
            'Активно прохожу курсы с SoloLearn',
            'Прошел курсы с сайта Webref.ru - раньше были курсы по web',
            'Прошел курсы с htmacademy + открытое образование: web-разработка',
            'Сайт Stepik',
            'Сайт Shultais education',
            'Активно решаю задачки с codewars',
            'Проект Эйлера'
        ],
        certificate: [html, css, js, sql, python]
    }
}

export default function Info(state = initialState) {
    return state
}