import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';


const App = ({user}) => {

  return (
    <div className="row">
      <Header user={user}/>
      <Main user={user}/>
      <Footer />
    </div>
  )
}

App.propTypes = {
  user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.Info.user,
  }
}

export default connect(mapStateToProps)(App);
