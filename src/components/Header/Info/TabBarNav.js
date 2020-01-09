import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabBarNav = ({
    navLabel, className, onChangeActiveTab
}) => {
    
    const classes = classNames(
        'nav-items',
        className
    )
    
    return (
        <div
            className={classes}
            onClick={()=>{onChangeActiveTab(navLabel)}}
        >{navLabel}</div>
    )
}

TabBarNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func
}

TabBarNav.defaultProps = {
    navLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => {}
}

export default TabBarNav