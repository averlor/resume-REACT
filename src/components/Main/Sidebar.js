import React from 'react';

class Sidebar extends React.Component{

    constructor(props) {
        super(props);

        this.certificate = this.props.certificate;
        this.state = {
            slideIndex: 0
        }
        this.currentSlide = this.currentSlide.bind(this)
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
                            <a href={this.certificate[this.state.slideIndex]} target="_blank">
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


export default Sidebar