import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info/Info';
import ShortInfo from './ShortInfo/ShortInfo';

const Header = ({user}) => {

    const {avatar, familyName, name, facts} = user;
    const alt = familyName + ' ' + name;

    return (
        <header id="header">
            <Info user={user}/>
            <ShortInfo
                avatar={avatar}
                alt={alt}
                facts={facts}
            />
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.object.isRequired
}


export default Header