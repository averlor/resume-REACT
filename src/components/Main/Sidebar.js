import React from 'react';
import PropTypes from 'prop-types';

class Sidebar extends React.Component{

    constructor(props) {
        super(props);

        this.certificate = this.props.certificate;
        this.currentSlide = this.currentSlide.bind(this)
    }

    state = {
        slideIndex: 0
    }

    currentSlide(n) {
        this.setState({
            slideIndex: n
        })
    }

    render() {
        return (
            <aside className="sidebar">
                <div className="certificate">
                    <div className="slider">
                        <div className="slider__mySlide fade">
                            <a href={this.certificate[this.state.slideIndex]} target="_blank" rel="noopener noreferrer">
                                <img className="certificate__img" src={this.certificate[this.state.slideIndex]} alt={this.certificate[this.state.slideIndex]}/>
                            </a>
                        </div>
                    </div>

                    <div className="button">
                        {this.certificate.map((fact, index) => {
                            return (
                                <span key={index} className="button__dots" onClick={() => this.currentSlide(index)}></span>
                            )
                        })}
                    </div>
                </div>
            </aside>
        )
    }
}


Sidebar.propTypes = {
    certificate: PropTypes.arrayOf(PropTypes.string)
}


export default Sidebar