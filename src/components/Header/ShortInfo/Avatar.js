import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ avatar, alt }) => {
    
    return (
        <div className="photos">
            <img className="avatar" src={avatar} alt={alt} />
        </div>
    )
}

Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, 
}

export default Avatar