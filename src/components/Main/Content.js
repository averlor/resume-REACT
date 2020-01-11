import React from 'react';
import PropTypes from 'prop-types';

const Content = ({course}) =>{
    return (
        <section className="content">
            <h3 className="title">Курсы и сайты</h3>

            <ul className="pl-15">
                {course.map((cor, index)=>{
                    return (
                        <li key={index} className="mt-5">{cor}</li>
                    )
                })}
            </ul>
        </section>
    );
}

Content.propTypes = {
    course: PropTypes.arrayOf(PropTypes.string)
}


export default Content