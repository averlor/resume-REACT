import React from 'react';

class Info extends React.Component{
    render() {
        return (
            <section className="header__info">
                <div id="tabs">
                    <div className="tab whiteborder">Общая информация</div>
                    <div className="tab">Hard skills</div>
                    <div className="tab">Soft skills</div>
                    <div className="tab">Проекты</div>
                    <div className="tab">Опыт</div>
                    <div className="tab">Будущее</div>


                </div>
            </section>
        )
    }
}

export default Info