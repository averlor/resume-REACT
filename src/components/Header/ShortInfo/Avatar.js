import React from 'react';
import PropTypes from 'prop-types';

class Avatar extends React.Component{

    constructor(props) {
        super(props);

        this.avatar = this.props.avatar
        this.alt = this.props.alt
    }

    render() {
        return (
            <div className="photos">
                <img className="avatar" src={this.avatar} alt={this.alt} />
            </div>
        )
    }
}

Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
}

export default Avatar