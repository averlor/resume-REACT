import React from 'react';

import {connect} from 'react-redux';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';


class App extends React.Component{

  constructor(props) {
    super(props)
  }

  render() {
    return (
      // Имеет ли смысл обернуть все в context
      <div className="row">
        <Header user={this.props.user}/>
        <Main user={this.props.user}/>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.Info.user,
  }
}

export default connect(mapStateToProps)(App);
