import React from 'react';
import PropTypes from 'prop-types';


import Facts from './Facts';

const Avatar = React.lazy(()=> import('./Avatar'))

const ShortInfo = ({avatar, alt, facts}) => {

    return (
        <section className="header__short-info">
            <React.Suspense fallback={<p>Loading..</p>}>
                <Avatar
                    avatar={avatar}
                    alt={alt}
                />
            </React.Suspense>

            <Facts facts={facts}/>
        </section>
    );
}

ShortInfo.propTypes = {
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    facts: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ShortInfo