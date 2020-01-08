import React from 'react';

class Content extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="content">
                <h3 className="title">Курсы и сайты</h3>

                <ul className="pl-15">
                    {this.props.course.map((cor, index)=>{
                        return (
                            <li key={index} className="mt-5">{cor}</li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}


export default Content