import React from 'react';

import Content from './Content';
import Sidebar from './Sidebar';

class Main extends React.Component{

    constructor(props) {
        super(props);

        this.course = this.props.user.course;
        this.certificate = this.props.user.certificate;
    }

    render() {
        return (
            <main id="main">
                <Content course={this.course} />
                <Sidebar certificate={this.certificate} />
            </main>
        )
    }
}


export default Main