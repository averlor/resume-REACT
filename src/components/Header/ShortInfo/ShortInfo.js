import React from 'react';
import PropTypes from 'prop-types';


import Facts from './Facts';

const Avatar = React.lazy(()=> import('./Avatar'))

class ShortInfo extends React.Component{
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="header__short-info">
                <React.Suspense fallback={<p>Loading..</p>}>
                    <Avatar
                        avatar={this.props.avatar}
                        alt={this.props.alt}
                    />
                </React.Suspense>

                <Facts facts={this.props.facts}/>
            </section>
        )
    }
}

ShortInfo.propTypes = {
    avatar: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    facts: PropTypes.array.isRequired
}

export default ShortInfo