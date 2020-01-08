import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component{

    constructor(props) {
        super(props);

        this.course = this.props.course
    }

    render() {
        return (
            <section className="content">
                <h3 className="title">Курсы и сайты</h3>

                <ul className="pl-15">
                    {this.course.map((cor, index)=>{
                        return (
                            <li key={index} className="mt-5">{cor}</li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

Content.propTypes = {
    course: PropTypes.array.isRequired
}


export default Content