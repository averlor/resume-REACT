import React from 'react';

import Avatar from './Avatar';
import Facts from './Facts';

class ShortInfo extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="header__short-info">
                <Avatar
                    avatar={this.props.avatar}
                    alt={this.props.alt}
                />
                <Facts facts={this.props.facts}/>
            </section>
        )
    }
}

export default ShortInfo