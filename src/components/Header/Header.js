import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info/Info';
import ShortInfo from './ShortInfo/ShortInfo';

class Header extends React.Component{

    constructor(props) {
        super(props);

        this.avatar = this.props.user.avatar
        this.alt = `${this.props.user.familyName} ${this.props.user.name}`
        this.facts = this.props.user.facts
        this.user = this.props.user
    }

    render() {
        return (
            <header id="header">
                <Info user={this.user}/>
                <ShortInfo
                    avatar={this.avatar}
                    alt={this.alt}
                    facts={this.facts}
                />
            </header>
        )
    }
}

Header.propTypes = {
    user: PropTypes.object.isRequired
}


export default Header