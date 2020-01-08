import React from 'react';
import PropTypes from 'prop-types';

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

Main.propTypes = {
    user: PropTypes.object.isRequired
}


export default Main