import React from 'react';
import PropTypes from 'prop-types';

class Facts extends React.Component{

    constructor(props) {
        super(props);
        this.facts = this.props.facts

        // slider 
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
            <div className="facts">
                <div className="slider">
                    <div className="slider__mySlides fade">
                        <p className="slider__text">{this.facts[this.state.slideIndex]}</p>
                    </div>
                        
                </div>

                <div className="button">
                    {this.facts.map((fact, index) => {
                        return (
                            <span key={index} className="button__dot" onClick={() => this.currentSlide(index)}></span>
                        )
                    })}
                </div>
            </div>
        )
    }
}

Facts.propTypes = {
    facts: PropTypes.array.isRequired
}

export default Facts