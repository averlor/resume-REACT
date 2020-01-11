import React from 'react';
import PropTypes from 'prop-types';

import Content from './Content';
import Sidebar from './Sidebar';

const Main = ({user}) => {

    const {course, certificate} = user;

    return (
        <main id="main">
            <Content course={course} />
            <Sidebar certificate={certificate} />
        </main>
    )
}

Main.propTypes = {
    user: PropTypes.object.isRequired
}


export default Main