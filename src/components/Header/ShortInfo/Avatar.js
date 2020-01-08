import React from 'react';

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

export default Avatar