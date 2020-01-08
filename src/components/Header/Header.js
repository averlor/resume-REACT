import React from 'react';

import Info from './Info/Info';
import ShortInfo from './ShortInfo/ShortInfo';

class Header extends React.Component{

    constructor(props) {
        super(props);

        this.avatar = this.props.user.avatar
        this.alt = `${this.props.user.familyName} ${this.props.user.name}`
        this.facts = this.props.user.facts
    }

    render() {
        return (
            <header id="header">
                <Info />
                <ShortInfo
                    avatar={this.avatar}
                    alt={this.alt}
                    facts={this.facts}
                />
            </header>
        )
    }
}


export default Header